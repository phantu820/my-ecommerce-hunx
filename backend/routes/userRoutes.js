import express from "express";
const router = express.Router();

router.route("/").get(async (req, res) => {
  res.send("1");
})

export default router;
