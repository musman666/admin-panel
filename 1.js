const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May' , 'june' , 'July' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec'],
    datasets: [{
      label: 'Collection',
      data: [12, 19, 3, 5 , 10 ,15 , 50 , 5 ,50, 12 ,40 ,10],
      backgroundColor: 'rgba(61, 179, 179, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Donut Chart
const donutCtx = document.getElementById('donutChart');
new Chart(donutCtx, {
  type: 'doughnut',
  data: {
    labels: ['Rent', 'Installment', 'Internet', 'Bills'],
    datasets: [{
      label: 'Product',
      data: [40, 5, 5, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      }
    }
  }
});

new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Revenue',
      data: [5, 10, 8, 15, 20],
      borderColor: 'rgba(75,192,192,1)',
      fill: true,
      tension: 0.4
    }]
  }
});

// Pie Chart
new Chart(document.getElementById('pieChart'), {
  type: 'pie',
  data: {
    labels: ['Free', 'Basic', 'Pro'],
    datasets: [{
      data: [45, 25, 30],
      backgroundColor: ['#ff6384','#36a2eb','#ffce56']
    }]
  }
});

// Radar Chart
new Chart(document.getElementById('radarChart'), {
  type: 'radar',
  data: {
    labels: ['Speed', 'Power', 'Endurance', 'Agility', 'Skill'],
    datasets: [{
      label: 'Player A',
      data: [65, 59, 90, 81, 56],
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)'
    }]
  }
});

// Polar Chart
new Chart(document.getElementById('polarChart'), {
  type: 'polarArea',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [{
      data: [11, 16, 7, 3, 14],
      backgroundColor: ['#ff6384','#36a2eb','#ffce56','#4bc0c0','#9966ff']
    }]
  }
});

// Bubble Chart
new Chart(document.getElementById('bubbleChart'), {
  type: 'bubble',
  data: {
    datasets: [{
      label: 'Bubbles',
      data: [
        {x: 10, y: 20, r: 15},
        {x: 15, y: 10, r: 10},
        {x: 25, y: 30, r: 20}
      ],
      backgroundColor: 'rgba(255,99,132,0.6)'
    }]
  }
});


const toggleBtn = document.getElementById("mode-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});
