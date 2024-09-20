const notFoundHandler = (req, res, next) => {
  try {
    return res.status(404).json({ error: "path not found" });
  } catch (error) {
    next(error);
  }
};

module.exports = notFoundHandler;
