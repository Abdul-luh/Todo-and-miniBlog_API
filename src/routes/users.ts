import { Router, Request, Response } from "express";

import { signUpHandler } from "../controllers/SignUp";

export const router = Router();

// SIGNUP FUNCTION
router.post("/signup", signUpHandler);
