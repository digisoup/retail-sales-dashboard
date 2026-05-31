const ctx = document.getElementById("salesChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["West", "East", "Central", "South"],
    datasets: [
      {
        label: "Sales",
        data: [245000, 210000, 180000, 160000],
      },
    ],
  },
});
