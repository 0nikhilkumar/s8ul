async function fetchChannelData(identifier) {
    try {
        let channelId;

        // If already channel ID
        if (identifier.startsWith("UC")) {
            channelId = identifier;
        } else {
            const searchRes = await axios.get(`${YT_BASE}/search`, {
                params: {
                    part: "snippet",
                    q: identifier,
                    type: "channel",
                    maxResults: 1,
                    key: API_KEY,
                },
            });

            if (!searchRes.data.items.length) return null;
            channelId = searchRes.data.items[0].id.channelId;
        }

        const channelRes = await axios.get(`${YT_BASE}/channels`, {
            params: {
                part: "snippet,statistics,brandingSettings",
                id: channelId,
                key: API_KEY,
            },
        });

        const channel = channelRes.data.items[0];
        if (!channel) return null;

        return {
            creator_id: channel.id,
            name: channel.snippet.title,
            youtube_url: channel.snippet.customUrl
                ? `https://www.youtube.com/${channel.snippet.customUrl}`
                : null,
            instagram_url: extractInstagram(channel.snippet.description),
            description: channel.snippet.description,
            thumbnail: channel.snippet.thumbnails.high.url,
            subscribers: channel.statistics.subscriberCount,
            total_views: channel.statistics.viewCount,
            total_videos: channel.statistics.videoCount,
            country: channel.brandingSettings?.channel?.country || null,
            fetched_at: new Date().toISOString(),
        };
    } catch (err) {
        console.error("❌ Error:", err.response?.data || err.message);
        return null;
    }
}