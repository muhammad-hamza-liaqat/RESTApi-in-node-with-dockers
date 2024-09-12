const { StatusCodes } = require('http-status-codes')
const { HTTPResponse } = require('../helpers/response')
const { sequelize } = require('../config/postgres.config')

const fullJoinOnCustomerOrder = async (req, res) => {
  // const customerId = req.params.id
  const query = `
      SELECT cus.customer_id, cus.customer_name, cus.address, cus.postal_code, o.order_id, o.order_date
      FROM customers cus
      FULL OUTER JOIN orders o
      ON cus.customer_id = o.customer_id
    `
    // WHERE cus.customer_id = :customerId
  const result = await sequelize.query(query, {
    type: sequelize.QueryTypes.SELECT
  })

  const response = new HTTPResponse('fetched', result)
  return res.status(StatusCodes.OK).json(response)
}

const userFullOrderDetails = async (req, res) => {
  // join on customer, order, order_details, product -> for specific customer
  const customerId = req.params.id
  const query = `
  select c.customer_id, c.customer_name, o.order_id, o.order_date, od.quantity, od.product_id, p.product_id, p.product_name, p.unit, p.category_id, ca.category_id
  from customers c
  inner join orders o 
  on c.customer_id = o.customer_id
  inner join order_details od
  on o.order_id = od.order_id
  inner join products p
  on od.product_id = p.product_id
  inner join categories ca
  on p.category_id = ca.category_id
  where c.customer_id = :customerId
    `
  const result = await sequelize.query(query, {
    replacements: { customerId },
    type: sequelize.QueryTypes.SELECT
  })
  const response = new HTTPResponse('fetched', result)
  return res.status(StatusCodes.OK).json(response)
}

// const userFullOrderDetails = async (req, res) => {
//   // join on customer, order, order_details, product -> for specific customer
//   const customerId = req.params.id
//   const query = `
// SELECT
//     c.customer_id,
//     c.customer_name,
//     o.order_id,
//     o.order_date,
//     od.quantity,
//     od.product_id,
//     p.product_id,
//     p.product_name,
//     p.unit,
//     p.category_id,
//     ca.category_id
// FROM customers c
// FULL OUTER JOIN orders o
//     ON c.customer_id = o.customer_id
// FULL OUTER JOIN order_details od
//     ON o.order_id = od.order_id
// FULL OUTER JOIN products p
//     ON od.product_id = p.product_id
// FULL OUTER JOIN categories ca
//     ON p.category_id = ca.category_id
// WHERE c.customer_id = :customerId
//     `
//   const result = await sequelize.query(query, {
//     replacements: { customerId },
//     type: sequelize.QueryTypes.SELECT
//   })
//   const response = new HTTPResponse('fetched', result)
//   return res.status(StatusCodes.OK).json(response)
// }

const rightJoin = async (req, res) => {
  const query = `
SELECT 
    p.product_name, 
    c.category_id, 
    c.category_name,
    COUNT(p.product_id) AS product_count 
FROM products p
RIGHT JOIN categories c
    ON p.category_id = c.category_id
GROUP BY 
    p.product_name, 
    c.category_id, 
    c.category_name;

    `
  const result = await sequelize.query(query, {
    type: sequelize.QueryTypes.SELECT
  })
  const response = new HTTPResponse('fetched', result)
  return res.status(StatusCodes.OK).json(response)
}

const leftJoin = async (req, res) => {
  const query = `
SELECT 
    c.customer_name, 
    COUNT(o.order_id) AS order_count
FROM customers c
LEFT JOIN orders o 
    ON c.customer_id = o.customer_id
GROUP BY 
    c.customer_name
ORDER BY 
    order_count DESC;

      `
  const result = await sequelize.query(query, {
    type: sequelize.QueryTypes.SELECT
  })
  const response = new HTTPResponse('fetched', result)
  return res.status(StatusCodes.OK).json(response)
}

module.exports = { fullJoinOnCustomerOrder, userFullOrderDetails, rightJoin, leftJoin }
