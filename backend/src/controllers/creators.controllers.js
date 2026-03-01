const Creator = require("../models/creators.model.js");
const allLiveCreators = async (req, res) => {
    try {
        const allCreators = await Creator.find().select({ channelId: 1 });


        if (!allCreators.length === 0) {
            return res.status(400).json({ message: "Not any creators found" });
        }

        

    } catch (error) {
        console.error("Error fetching live creators:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}