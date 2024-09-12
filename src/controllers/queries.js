// select c.customer_id, c.customer_name, o.order_id, o.order_date, od.quantity, od.product_id, p.product_id, p.product_name, p.unit, p.category_id, ca.category_id
// from customers c
// inner join orders o 
// on c.customer_id = o.customer_id
// inner join order_details od
// on o.order_id = od.order_id
// inner join products p
// on od.product_id = p.product_id
// inner join categories ca
// on p.category_id = ca.category_id
// where c.customer_id = :customerId