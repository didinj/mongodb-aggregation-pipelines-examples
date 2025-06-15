db.orders.aggregate([
  {
    $project: {
      orderId: 1,
      amount: 1,
      highValue: {
        $cond: { if: { $gt: ["$amount", 500] }, then: true, else: false }
      }
    }
  }
]);
