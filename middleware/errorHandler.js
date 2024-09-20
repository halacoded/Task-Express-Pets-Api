const errorHandler = (error, req, res, next) => {
  try {
    return res
      .status(error.status || 500)
      .json({ error: error || "interval server error" });
  } catch (error) {
    next(error);
  }
};

module.exports = errorHandler;
