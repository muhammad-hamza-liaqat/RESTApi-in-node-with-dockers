const Category = require('../models/category.model')
const Customer = require('../models/customer.model')
const Product = require('../models/product.model')
const Order = require('../models/order.model')
const testProduct = require('../models/testProduct.model')
const orderDetail = require('../models/orderDetail.model')

const associationDefined = () => {
  console.log('association file called!..................!')

  Category.hasMany(Product, { foreignKey: 'category_id' })
  Product.belongsTo(Category, { foreignKey: 'category_id' })

  Customer.hasMany(Order, { foreignKey: 'customer_id' })
  Order.belongsTo(Customer, { foreignKey: 'customer_id' })

  Order.hasMany(orderDetail, { foreignKey: 'order_id' })
  orderDetail.belongsTo(Order, { foreignKey: 'order_id' })

  Product.hasMany(orderDetail, { foreignKey: 'product_id' })
  orderDetail.belongsTo(Product, { foreignKey: 'product_id' })
}

module.exports = associationDefined
