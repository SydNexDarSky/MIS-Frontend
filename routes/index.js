import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html', { title: "Scores Management System" })
})

export default router;
