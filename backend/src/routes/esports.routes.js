const esportsController = require('../controllers/esports.controllers.js');
const express = require('express');
const { upload } = require('../middlewares/multer.middleware.js');

const router = express.Router();

/**
 * - GET /api/esports/get-team?game=gameName&team=teamName
 * - Fetch all the lineups, with optional filtering by game and team name.
 */
router.route("/get-team").get(esportsController.getLinups);

/**
 * - POST /api/esports/add-team
 * - Create a new esports team lineup.
 */
router.route("/add-team").post(esportsController.postLinups);

/**
 * - PATCH /api/esports/:id
 * - Update an existing esports team lineup by ID.
 */
router.route("/:id").patch(esportsController.updateLinups);

/**
 * - DELETE /api/esports/:id
 * - Delete an existing esports team lineup by ID.
 */
router.route("/:id").delete(esportsController.deleteLinups);

/**
 * - POST /api/esports/add-player
 * - Adding the player to the database, with image upload to Cloudinary.
 */
router.route("/add-player").post(upload.single("image"), esportsController.addPlayer);

/**
 * - GET /api/esports/team-players?team=teamName
 * - Fetch all players of a specific team.
 */
router.route("/team-players").get(esportsController.getTeamPlayers);

module.exports = router;