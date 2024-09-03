const defaultPage = async (req, res) => {
  res.end('hello from default route')
}

module.exports = { defaultPage }
