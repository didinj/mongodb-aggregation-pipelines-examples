db.customers.aggregate([
  {
    $match: {
      joinedDate: {
        $gte: ISODate("2024-06-01T00:00:00Z")
      }
    }
  },
  {
    $project: {
      month: { $dateToString: { format: "%Y-%m", date: "$joinedDate" } }
    }
  },
  {
    $group: {
      _id: "$month",
      registrations: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);
