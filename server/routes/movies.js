const router = require("express").Router();
const { prisma } = require("../db");

router.get("/movies/list", async (req, res) => {
  try {
    const offset = parseInt(req.query.offset) || 0;
    const count = await prisma.movie.count();
    const movies = await prisma.movie.findMany({
      take: 12,
      skip: offset,
    });
    res.json({ movies, count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/movie/:id", async (req, res) => {
  const id = req.params.id;
  const movie = await prisma.movie.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return res.send(movie);
});

module.exports = router;
