const cookieController = {}

cookieController.checkCookie = (req, res, next) => {
  console.log('check cookie')
  if (!req.cookies.username){
    console.log('no cookie')
    res.locals.invalidCookie = true;
  }
  return next();
}

module.exports = cookieController;