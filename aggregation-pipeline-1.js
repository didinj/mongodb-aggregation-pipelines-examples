db.orders.aggregate([
  { $unwind: "$items" },
  {
    $project: {
      productId: "$items.productId",
      subtotal: { $multiply: ["$items.quantity", "$items.price"] }
    }
  },
  {
    $group: {
      _id: "$productId",
      totalSales: { $sum: "$subtotal" }
    }
  },
  { $sort: { totalSales: -1 } }
]);
