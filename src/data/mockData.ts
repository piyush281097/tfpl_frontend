const mockData = [
    {
      country: "India",
      state: "Maharashtra",
      city: "Mumbai",
      sector: "Retail",
      category: "Juice",
      userID:'1',
      startDate: "2024-04-01",
      endDate: "2024-04-30",
      mySpend: {
        current: 120000,
        reference: 100000,
        absoluteChange: 20000,
        percentChange: 20
      },
      sameStoreSpend: {
        current: 95000,
        reference: 90000,
        absoluteChange: 5000,
        percentChange: 5.56
      },
      newStoreSpend: {
        current: 15000,
        reference: 10000,
        absoluteChange: 5000,
        percentChange: 50
      },
      lostStoreSpend: {
        current: 10000,
        reference: 15000,
        absoluteChange: -5000,
        percentChange: -33.33
      }
    },
    {
      country: "India",
      state: "Karnataka",
      city: "Bengaluru",
      sector: "Retail",
      userID:'1',
      category: "Snacks",
      startDate: "2024-04-01",
      endDate: "2024-04-30",
      mySpend: {
        current: 90000,
        reference: 85000,
        absoluteChange: 5000,
        percentChange: 5.88
      },
      sameStoreSpend: {
        current: 70000,
        reference: 75000,
        absoluteChange: -5000,
        percentChange: -6.67
      },
      newStoreSpend: {
        current: 10000,
        reference: 5000,
        absoluteChange: 5000,
        percentChange: 100
      },
      lostStoreSpend: {
        current: 10000,
        reference: 5000,
        absoluteChange: 5000,
        percentChange: 100
      }
    },
    {
      country: "USA",
      state: "California",
      city: "San Francisco",
      sector: "Hospitality",
      userID:'1',
      category: "Beverages",
      startDate: "2024-04-01",
      endDate: "2024-04-30",
      mySpend: {
        current: 130000,
        reference: 110000,
        absoluteChange: 20000,
        percentChange: 18.18
      },
      sameStoreSpend: {
        current: 100000,
        reference: 95000,
        absoluteChange: 5000,
        percentChange: 5.26
      },
      newStoreSpend: {
        current: 20000,
        reference: 10000,
        absoluteChange: 10000,
        percentChange: 100
      },
      lostStoreSpend: {
        current: 10000,
        reference: 15000,
        absoluteChange: -5000,
        percentChange: -33.33
      }
    },
    {
      country: "USA",
      state: "Texas",
      city: "Austin",
      sector: "Retail",
      userID:'1',
      category: "Frozen Foods",
      startDate: "2024-04-01",
      endDate: "2024-04-30",
      mySpend: {
        current: 80000,
        reference: 70000,
        absoluteChange: 10000,
        percentChange: 14.29
      },
      sameStoreSpend: {
        current: 60000,
        reference: 55000,
        absoluteChange: 5000,
        percentChange: 9.09
      },
      newStoreSpend: {
        current: 10000,
        reference: 10000,
        absoluteChange: 0,
        percentChange: 0
      },
      lostStoreSpend: {
        current: 10000,
        reference: 5000,
        absoluteChange: 5000,
        percentChange: 100
      }
    },
    {
      country: "India",
      state: "Maharashtra",
      city: "Mumbai",
      sector: "Retail",
      category: "Juice",
      userID:'2',
      startDate: "2024-04-01",
      endDate: "2024-04-30",
      mySpend: {
        current: 120000,
        reference: 100000,
        absoluteChange: 20000,
        percentChange: 20
      },
      sameStoreSpend: {
        current: 95000,
        reference: 90000,
        absoluteChange: 5000,
        percentChange: 5.56
      },
      newStoreSpend: {
        current: 15000,
        reference: 10000,
        absoluteChange: 5000,
        percentChange: 50
      },
      lostStoreSpend: {
        current: 10000,
        reference: 15000,
        absoluteChange: -5000,
        percentChange: -33.33
      }
    },
    {
      country: "India",
      state: "Karnataka",
      city: "Bengaluru",
      sector: "Retail",
      userID:'2',
      category: "Snacks",
      startDate: "2024-04-01",
      endDate: "2024-04-30",
      mySpend: {
        current: 90000,
        reference: 85000,
        absoluteChange: 5000,
        percentChange: 5.88
      },
      sameStoreSpend: {
        current: 70000,
        reference: 75000,
        absoluteChange: -5000,
        percentChange: -6.67
      },
      newStoreSpend: {
        current: 10000,
        reference: 5000,
        absoluteChange: 5000,
        percentChange: 100
      },
      lostStoreSpend: {
        current: 10000,
        reference: 5000,
        absoluteChange: 5000,
        percentChange: 100
      }
    },
    {
      country: "USA",
      state: "California",
      city: "San Francisco",
      sector: "Hospitality",
      userID:'2',
      category: "Beverages",
      startDate: "2024-04-01",
      endDate: "2024-04-30",
      mySpend: {
        current: 130000,
        reference: 110000,
        absoluteChange: 20000,
        percentChange: 18.18
      },
      sameStoreSpend: {
        current: 100000,
        reference: 95000,
        absoluteChange: 5000,
        percentChange: 5.26
      },
      newStoreSpend: {
        current: 20000,
        reference: 10000,
        absoluteChange: 10000,
        percentChange: 100
      },
      lostStoreSpend: {
        current: 10000,
        reference: 15000,
        absoluteChange: -5000,
        percentChange: -33.33
      }
    },
    {
      country: "India",
      state: "Maharashtra",
      city: "Mumbai",
      sector: "Retail",
      category: "Juice",
      userID:'3',
      startDate: "2024-04-01",
      endDate: "2024-04-30",
      mySpend: {
        current: 120000,
        reference: 100000,
        absoluteChange: 20000,
        percentChange: 20
      },
      sameStoreSpend: {
        current: 95000,
        reference: 90000,
        absoluteChange: 5000,
        percentChange: 5.56
      },
      newStoreSpend: {
        current: 15000,
        reference: 10000,
        absoluteChange: 5000,
        percentChange: 50
      },
      lostStoreSpend: {
        current: 10000,
        reference: 15000,
        absoluteChange: -5000,
        percentChange: -33.33
      }
    },
    {
      country: "India",
      state: "Karnataka",
      city: "Bengaluru",
      sector: "Retail",
      userID:'3',
      category: "Snacks",
      startDate: "2024-04-01",
      endDate: "2024-04-30",
      mySpend: {
        current: 90000,
        reference: 85000,
        absoluteChange: 5000,
        percentChange: 5.88
      },
      sameStoreSpend: {
        current: 70000,
        reference: 75000,
        absoluteChange: -5000,
        percentChange: -6.67
      },
      newStoreSpend: {
        current: 10000,
        reference: 5000,
        absoluteChange: 5000,
        percentChange: 100
      },
      lostStoreSpend: {
        current: 10000,
        reference: 5000,
        absoluteChange: 5000,
        percentChange: 100
      }
    },
    {
      country: "India",
      state: "Maharashtra",
      city: "Mumbai",
      sector: "Retail",
      category: "Juice",
      userID:'4',
      startDate: "2024-04-01",
      endDate: "2024-04-30",
      mySpend: {
        current: 120000,
        reference: 100000,
        absoluteChange: 20000,
        percentChange: 20
      },
      sameStoreSpend: {
        current: 95000,
        reference: 90000,
        absoluteChange: 5000,
        percentChange: 5.56
      },
      newStoreSpend: {
        current: 15000,
        reference: 10000,
        absoluteChange: 5000,
        percentChange: 50
      },
      lostStoreSpend: {
        current: 10000,
        reference: 15000,
        absoluteChange: -5000,
        percentChange: -33.33
      }
    },
  ]
  
  
  export default mockData;