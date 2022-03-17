const cookieController = {}

cookieController.checkCookie = (req, res, next) => {
  if (!req.cookies.username){
    res.locals.invalidCookie = true;
  }
  res.locals.username = req.cookies.username;
  return next();
}

module.exports = cookieController;