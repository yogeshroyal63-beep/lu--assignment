import express from "express";
const router = express.Router();

let users = [];

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/", (req, res) => {
  res.status(200).json(users);
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Validation Error
 */
router.post("/", (req, res) => {
  if (!req.body.name) {
    const error = new Error("Name required");
    error.statusCode = 400;
    throw error;
  }

  const user = { id: Date.now(), name: req.body.name };
  users.push(user);
  res.status(201).json(user);
});

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update user
 */
router.put("/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }
  user.name = req.body.name;
  res.json(user);
});

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete user
 */
router.delete("/:id", (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: "Deleted" });
});

export default router;