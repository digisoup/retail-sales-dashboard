// SALES BY REGION

const salesCtx = document.getElementById("salesChart");

new Chart(salesCtx, {
  type: "bar",
  data: {
    labels: ["Central", "East", "South", "West"],
    datasets: [
      {
        label: "Sales ($)",
        data: [501239.89, 678781.24, 391721.9, 725457.82],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// PROFIT BY CATEGORY

const profitCtx = document.getElementById("profitChart");

new Chart(profitCtx, {
  type: "bar",
  data: {
    labels: ["Furniture", "Office Supplies", "Technology"],
    datasets: [
      {
        label: "Profit ($)",
        data: [18451.27, 122490.8, 145454.95],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// MONTHLY SALES TREND

const trendCtx = document.getElementById("trendChart");

new Chart(trendCtx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Sales",
        data: [
          12000, 15000, 17000, 19000, 22000, 21000, 25000, 27000, 29000, 31000,
          35000, 40000,
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// SALES BY SEGMENT

const segmentCtx = document.getElementById("segmentChart");

new Chart(segmentCtx, {
  type: "doughnut",
  data: {
    labels: ["Consumer", "Corporate", "Home Office"],
    datasets: [
      {
        data: [1161401.34, 706146.37, 429653.15],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
