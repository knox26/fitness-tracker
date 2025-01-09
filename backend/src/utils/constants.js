export  const cookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: "none",
};

export const jwtOptions = {
    expiresIn: "1d",
};