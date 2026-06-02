// SALES BY REGION

const salesCtx = document.getElementById("salesChart");

new Chart(salesCtx, {
  type: "bar",
  data: {
    labels: ["West", "East", "Central", "South"],
    datasets: [
      {
        label: "Sales ($)",
        data: [245000, 210000, 180000, 160000],
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
    labels: ["Technology", "Office Supplies", "Furniture"],
    datasets: [
      {
        label: "Profit ($)",
        data: [55000, 42000, 18000],
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
        data: [55, 30, 15],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
