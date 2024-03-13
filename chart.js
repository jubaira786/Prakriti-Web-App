// Sample data (replace this with your own data)

const a=15
const data = [a,5,5,25];

// Create a bar chart using Chart.js
const customXAxisValues=["vata","pitta",'kapha']
const ctx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        // labels: Array.from({ length: 3 }, (_, i) => i + 1), // X-axis values from 1 to 25
        labels :customXAxisValues,
        datasets: [{
            label: 'Data Count', // Label for the dataset
            data: data, // The variable containing count data
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
            borderColor: 'rgba(75, 192, 192, 1)', // Border color
            borderWidth: 1, // Border width
        }],
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'X-Axis Values', // X-axis label
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Count', // Y-axis label
                },
                beginAtZero: true, // Start Y-axis from 0
            },
        },
    },
});
