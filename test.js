const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const fs = require('fs');


// Create a function to generate and save the bar chart

 async function GenerateBarChart() {
    // Sample data (replace this with your own data)
    // const aa = props.a;
    // const bb = props.b;
    // const cc = props.c;
    const aa=5,bb=10,cc=15;
    const data = [aa, bb, cc, 25];
    
    // Custom X-axis values
    const customXAxisValues = ['vata', 'pitta', 'kapha'];
    const width = 800; // Width of the chart
    const height = 400; // Height of the chart

    const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

    const configuration = {
        type: 'bar',
        data: {
            labels: customXAxisValues,
            datasets: [{
                label: 'Data Count',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }],
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'X-Axis Values',
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'Count',
                    },
                    beginAtZero: true,
                },
            },
        },
    };

    const image = await chartJSNodeCanvas.renderToBuffer(configuration);

    // Save the chart as an image file
    fs.writeFileSync('./public/arChart.png', image);

    console.log('Bar chart saved as barChart.png');
}



GenerateBarChart().catch(console.error);

