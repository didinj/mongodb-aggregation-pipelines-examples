db.orders.aggregate([
  { $unwind: "$items" },
  {
    $facet: {
      totalRevenue: [
        {
          $group: {
            _id: null,
            revenue: {
              $sum: { $multiply: ["$items.quantity", "$items.price"] }
            }
          }
        }
      ],
      topProducts: [
        {
          $group: {
            _id: "$items.productId",
            totalSold: { $sum: "$items.quantity" }
          }
        },
        { $sort: { totalSold: -1 } },
        { $limit: 5 }
      ]
    }
  }
]);
