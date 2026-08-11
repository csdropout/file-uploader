import "dotenv/config";
import express from "express";
import session from "express-session";
import passport from "passport";
import { prisma } from "./lib/prisma.js";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import authRouter from "./routes/authRouter.js";

const app = express();
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
    secret: "i will not tell",
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000,
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  }),
);

app.get("/", (req, res) => {
  res.send("Welcome to Waffle Drive!");
});
app.use("/", authRouter);

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if (err) console.error(err);
  console.log(`Express app listening on port ${port}!`);
});
