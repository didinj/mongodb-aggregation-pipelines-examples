db.orders.aggregate([
  ,
  /* your pipeline here */ {
    $merge: {
      into: "cachedReports",
      whenMatched: "merge",
      whenNotMatched: "insert"
    }
  }
]);
