const Team = require('../models/team.model.js');
const Player = require('../models/player.model.js');
const { uploadOnCloudinary } = require('../services/cloudinary.service.js');

// Team controller functions

/**
 * - GET /api/esports/get-team?game=gameName&team=teamName
 * - Fetch all the lineups, with optional filtering by game and team name.
 */
const getLinups = async (req, res) => {
    const { category, team } = req.query;  // ✅ was: game → now: category

    let filter = {};
    // Case-insensitive match — handles "bgmi" = "BGMI" = "Bgmi"
    if (category) filter.categoryName = { $regex: new RegExp(`^${category}$`, 'i') };
    if (team)     filter.teamName     = { $regex: new RegExp(`^${team}$`,     'i') };

    try {
        const teams = await Team.find(filter).populate("players");
        return res.status(200).json({ teams });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

/**
 * - POST /api/esports
 * - Create a new esports team lineup.
 */
const postLinups = async (req, res) => {
    const { categoryName, teamName, players } = req.body;
    
    if(!categoryName || !teamName || !players) {
        return res.status(400).json({ message: "categoryName, teamName and players are required." });
    }

    try {
        const newTeam = await Team.create({ categoryName, teamName, players });
        if(!newTeam) {
            return res.status(500).json({ message: "Failed to create team." });
        }

        return res.status(201).json({ team: newTeam });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

/**
 * - PATCH /api/esports/:id
 * - Update an existing esports team lineup by ID.
 */
const updateLinups = async (req, res) => {
    const { id } = req.params;
    if(!id) {
        return res.status(400).json({ message: "Team ID is required." });
    }

    const body = req.body;
    // if(!body) {
    //     return res.status(400).json({ message: "please provide the body with updated team information." });
    // }

    try {
        const updatedPlayer = await Player.findByIdAndUpdate(id, body, { new: true });
        if(!updatedPlayer) {
            return res.status(404).json({ message: "Player not found." });
        }
        return res.status(200).json({ player: updatedPlayer });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

/**
 * - DELETE /api/esports/:id
 * - Delete an esports team lineup by ID.
 */
const deleteLinups = async (req, res) => {
    const { id } = req.params;
    if(!id) {
        return res.status(400).json({ message: "Team ID is required." });
    }

    try {
        const deletedTeam = await Team.findByIdAndDelete(id);
        if(!deletedTeam) {
            return res.status(404).json({ message: "Team not found." });
        }
        return res.status(200).json({ message: "Team deleted successfully." });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


// Players controller functions

/**
 * - POST /api/esports/add-player
 * - Add a new player to the database, with image upload to Cloudinary.
 */
const addPlayer = async (req, res) => {
    const { name, role, game } = req.body;
    if(!name || !game || !req.file) {
        return res.status(400).json({ message: "Player name and image are required." });
    }

    const playerLocalImage = req.file.path;

    try {
        const cloudinaryResponse = await uploadOnCloudinary(playerLocalImage, game);
        if(!cloudinaryResponse) {
            return res.status(500).json({ message: "Failed to upload player image." });
        }

        const playerData = {
            name,
            role,
            image: cloudinaryResponse?.url || null,
        };

        const player = await Player.create(playerData);
        if(!player) {
            return res.status(500).json({ message: "Failed to create player." });
        }
    
        return res.status(201).json({ message: "Player added successfully.", player });
    } catch (error) {
        
    }
};

/**
 * - GET /api/esports/team-players?team=teamName
 * - Fetch all players of a specific team.
 */
const getTeamPlayers = async (req, res) => {
    const { team } = req.query;

    try {
        const players = await Player.find({ teamName: team });
        return res.status(200).json({ players });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getLinups,
    postLinups,
    updateLinups,
    deleteLinups,
    addPlayer,
    getTeamPlayers,
};