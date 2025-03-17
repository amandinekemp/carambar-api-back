const express = require("express");
const router = express.Router();
const jokeController = require("../controllers/jokeController");

/**
 * @swagger
 * /blagues:
 *   post:
 *     summary: Add a new joke
 *     tags: [Jokes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *               answer:
 *                 type: string
 *     responses:
 *       201:
 *         description: Joke successfully added
 *       500:
 *         description: Error while adding the joke
 */
router.post("/", jokeController.addJoke);

/**
 * @swagger
 * /blagues:
 *   get:
 *     summary: Retrieve all jokes
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: List of jokes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   content:
 *                     type: string
 *                   answer:
 *                     type: string
 */
router.get("/", jokeController.getAllJokes);

/**
 * @swagger
 * /blagues/random:
 *   get:
 *     summary: Retrieve a random joke
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: A random joke
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 content:
 *                   type: string
 *                 answer:
 *                   type: string
 */
router.get("/random", jokeController.getRandomJoke);

/**
 * @swagger
 * /blagues/{id}:
 *   get:
 *     summary: Retrieve a joke by ID
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the joke
 *     responses:
 *       200:
 *         description: Joke details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 content:
 *                   type: string
 *                 answer:
 *                   type: string
 *       404:
 *         description: Joke not found
 */
router.get("/:id", jokeController.getJokeById);

module.exports = router;
