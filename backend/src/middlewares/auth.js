import User from "../models/userModel";
import jwt from "jsonwebtoken";

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization || req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized", success: false });
  }
  try {
    const  decodedToken =  jwt.verify(token, process.env.JWT_KEY);
    const user = await User.findById(decodedToken.id);
    
  } catch (error) {
    
  }

}