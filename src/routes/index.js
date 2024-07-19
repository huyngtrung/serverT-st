import authRouter from "./auth";

const initRoutes = (app) => {
  app.use("/api/v1/auth", authRouter);

  app.use("/", (req, res) => {
    res.send("server on");
  });

  return app; // Trả về app nếu cần
};

export default initRoutes;
