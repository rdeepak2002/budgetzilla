// Mock data for dashboard

// Monthly metrics
export const monthlyMetrics = {
  customers: {
    count: 3782,
    growth: 1.15, // 1.15% growth
  },
  transactions: {
    count: 5359,
    growth: 3.02, // 3.02% growth
  },
  targetCompletion: {
    percentage: 75.55,
    current: 15207,
    target: 20000,
  }
};

// Monthly sales data
export const monthlySalesData = [
  { month: 'Jan', amount: 12500 },
  { month: 'Feb', amount: 17800 },
  { month: 'Mar', amount: 13200 },
  { month: 'Apr', amount: 14500 },
  { month: 'May', amount: 13800 },
  { month: 'Jun', amount: 12900 },
  { month: 'Jul', amount: 10500 },
  { month: 'Aug', amount: 14200 },
  { month: 'Sep', amount: 13100 },
  { month: 'Oct', amount: 17500 },
  { month: 'Nov', amount: 16200 },
  { month: 'Dec', amount: 11800 },
];

// Statistics data for area chart
export const statisticsData = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    {
      name: 'Revenue',
      data: [19000, 21000, 20000, 19500, 18500, 19000, 20500, 21500, 22000, 23000, 22500, 24000],
    },
    {
      name: 'Expenses',
      data: [12000, 13000, 12500, 13500, 12000, 13000, 14000, 15000, 14500, 15500, 15000, 16000],
    },
    {
      name: 'Profit',
      data: [7000, 8000, 7500, 6000, 6500, 6000, 6500, 6500, 7500, 7500, 7500, 8000],
    },
  ],
};

// Recent orders data
export const recentOrders = [
  {
    id: 1,
    product: 'MacBook Pro 15"',
    category: 'Laptop',
    price: 2399.00,
    status: 'Delivered',
    customer: {
      name: 'John Smith',
      avatar: '/avatars/avatar1.png',
    },
  },
  {
    id: 2,
    product: 'Apple Watch Ultra',
    category: 'Watch',
    price: 799.00,
    status: 'Pending',
    customer: {
      name: 'Sarah Johnson',
      avatar: '/avatars/avatar2.png',
    },
  },
  {
    id: 3,
    product: 'iPad Pro 12.9"',
    category: 'Tablet',
    price: 1099.00,
    status: 'Processing',
    customer: {
      name: 'Michael Brown',
      avatar: '/avatars/avatar3.png',
    },
  },
  {
    id: 4,
    product: 'AirPods Pro',
    category: 'Audio',
    price: 249.00,
    status: 'Delivered',
    customer: {
      name: 'Emily Davis',
      avatar: '/avatars/avatar4.png',
    },
  },
];