const YT_BASE = "https://www.googleapis.com/youtube/v3";
const API_KEY = process.env.YOUTUBE_API_KEY;

const extractInstagram = (text = "") => {
    const match = text.match(/https?:\/\/(?:www\.)?instagram\.com\/[\w._/?=&%-]+/i);
    return match ? match[0] : null;
};

const chunkArray = (items, size) => {
    const chunks = [];
    for (let index = 0; index < items.length; index += size) {
        chunks.push(items.slice(index, index + size));
    }
    return chunks;
};

const mapChannel = (channel) => ({
    creator_id: channel.id,
    name: channel.snippet?.title || null,
    youtube_url: channel.snippet?.customUrl
        ? `https://www.youtube.com/${channel.snippet.customUrl}`
        : `https://www.youtube.com/channel/${channel.id}`,
    instagram_url: extractInstagram(channel.snippet?.description || ""),
    description: channel.snippet?.description || null,
    thumbnail: channel.snippet?.thumbnails?.high?.url || channel.snippet?.thumbnails?.default?.url || null,
    subscribers: channel.statistics?.subscriberCount || null,
    total_views: channel.statistics?.viewCount || null,
    total_videos: channel.statistics?.videoCount || null,
    country: channel.brandingSettings?.channel?.country || null,
    fetched_at: new Date().toISOString(),
});

const fetchChannelData = async (creatorIds = []) => {
    try {
        if (!Array.isArray(creatorIds) || creatorIds.length === 0) {
            return [];
        }

        if (!API_KEY) {
            console.error("❌ YOUTUBE_API_KEY is missing");
            return [];
        }

        const uniqueIds = [...new Set(
            creatorIds
                .filter((creatorId) => typeof creatorId === "string")
                .map((creatorId) => creatorId.trim())
                .filter((creatorId) => creatorId.startsWith("UC"))
        )];

        if (!uniqueIds.length) {
            return [];
        }

        const idChunks = chunkArray(uniqueIds, 50);
        const channelsById = new Map();

        for (const idChunk of idChunks) {
            const params = new URLSearchParams({
                part: "snippet,statistics,brandingSettings",
                id: idChunk.join(","),
                key: API_KEY,
            });

            const response = await fetch(`${YT_BASE}/channels?${params.toString()}`);

            if (!response.ok) {
                const errorBody = await response.text();
                console.error("❌ YouTube API error:", errorBody);
                continue;
            }

            const data = await response.json();
            const channels = data?.items || [];

            for (const channel of channels) {
                channelsById.set(channel.id, mapChannel(channel));
            }
        }

        return uniqueIds
            .map((creatorId) => channelsById.get(creatorId))
            .filter(Boolean);
    } catch (error) {
        console.error("❌ Error fetching channel data:", error.message);
        return [];
    }
};

module.exports = {
    fetchChannelData,
};