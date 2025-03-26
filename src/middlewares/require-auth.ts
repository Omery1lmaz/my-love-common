import { Request, Response, NextFunction } from "express";
import jwt, { TokenExpiredError, JsonWebTokenError } from "jsonwebtoken";
import { NotAuthorizedError } from "../errors/not-authorized-error";

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Yetkisiz erişim, giriş yapın" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(400).json({ message: "Token bulunamadı" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY!) as {
      id: string;
    };

    req.currentUser = { id: decodedToken.id };

    next();
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return res
        .status(401)
        .json({ message: "Oturum süresi doldu, tekrar giriş yapın" });
    } else if (error instanceof JsonWebTokenError) {
      return res.status(400).json({ message: "Geçersiz token" });
    } else {
      console.error("Kimlik doğrulama hatası:", error);
      return res.status(500).json({ message: "Kimlik doğrulama başarısız" });
    }
  }
};
