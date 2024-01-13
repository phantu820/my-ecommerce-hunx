import express from "express";
const router = express.Router();

router.route("/").get(async (req, res) => {
  return res.send("1");
})

export default router;
