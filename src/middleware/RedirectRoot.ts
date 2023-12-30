import { Request, Response, NextFunction } from "express";

// Middleware for redirecting routes containing 'api' to '/'
export const redirectAPIToRoot = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const regex = /\/api/i; // Case-insensitive regex to match 'api' in the URL
	if (regex.test(req.originalUrl)) {
		return res.redirect("/");
	} else {
		next();
	}
};
