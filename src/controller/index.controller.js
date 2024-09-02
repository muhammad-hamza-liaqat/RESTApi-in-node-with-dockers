const defaultPage = async (req, res) => {
  res.end('hello from default route')
}

const menuPage = async (req, res) => {
  res.end('hello from menu page')
}

const orderPage = async (req, res) => {
  res.end('hello from order page')
}

module.exports = { defaultPage, menuPage, orderPage }
