import { body, validationResult, matchedData } from "express-validator";
import { prisma } from "../lib/prisma.js";
import bcrypt from "bcryptjs";
import passport from "passport";

export function getSignUp(req, res) {
  res.render("sign-up", {
    data: {},
  });
}

const validateUser = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isAlpha()
    .withMessage("Name should only contain alphabets"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password should be at least 6 characters long"),

  body("confirm_password")
    .trim()
    .notEmpty()
    .withMessage("Confirm your password")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Passwords do not match"),
];

export const postSignUp = [
  validateUser,
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("sign-up", {
        errors: errors.array(),
        data: req.body,
      });
    }

    try {
      const { name, username, password } = req.body;
      const usernameExists = await prisma.user.findUnique({
        where: { username: username },
      });
      if (usernameExists) {
        return res.status(400).render("sign-up", {
          errors: [{ msg: "Username is already used" }],
          formData: req.body,
        });
      }

      const hash = await bcrypt.hash(password, 10);
      await prisma.user.create({
        data: {
          name: name,
          username: username,
          hash: hash,
        },
      });
      res.redirect("/login");
    } catch (err) {
      next(err);
    }
  },
];

export function getLogin(req, res) {
  res.render("login");
}

export function postLogin(req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.render("login", {
        errors: [{ msg: info.message }],
      });
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      return res.redirect("/");
    });

    return res.redirect("/");
  })(req, res, next);
}
