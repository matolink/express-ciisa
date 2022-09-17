import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "this is my website" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "about this website" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Page" });
});

export default router;
