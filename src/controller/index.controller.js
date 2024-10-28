const defaultPage = async (req, res) => {
  res.end('hello from default route');
};

const menuPage = async (req, res) => {
  res.end('hello from menu page');
};

const orderPage = async (req, res) => {
  res.end('hello from order page');
};

// Pass next to propagate the error to Bugsnag
const bugSnagError = async (req, res, next) => {
  next(new Error("test error for bugsnag"));
};

module.exports = { defaultPage, menuPage, orderPage, bugSnagError };
