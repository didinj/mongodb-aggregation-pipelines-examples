db.orders.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customerId",
      foreignField: "customerId",
      as: "customer"
    }
  },
  {
    $unwind: "$customer"
  },
  {
    $project: {
      orderId: 1,
      orderDate: 1,
      amount: 1,
      "customer.name": 1,
      "customer.email": 1
    }
  }
]);
