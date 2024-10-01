const express = require("express");
const router = require("express").Router();

router.post("/login", (req, res) => {
    res.send("Login successful!");
  });
router.post("/signup", async () => {});

module.exports = router;
