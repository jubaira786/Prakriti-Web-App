const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('public'));
const Chart = require('chart.js'); // Include Chart.js
// const { default: generateBarChart, default: GenerateBarChart } = require('./test');
app.set('view engine', 'html'); // Set EJS as the template engine
app.use(express.static('public'));
// gtuhkjlhgklhgj

const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const fs = require('fs');


// Create a function to generate and save the bar chart

 async function GenerateBarChart(a,b,c) {
    // Sample data (replace this with your own data)
    const aa = a;
    const bb = b;
    const cc = c;
    // const dd = d;
    // const aa=15,bb=10,cc=1;
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
    fs.writeFileSync('./public/barChart.png', image);

    console.log('Bar chart saved as barChart.png');
}



// GenerateBarChart().catch(console.error);





// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});
app.post('/home', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Data storage for selected options
const selectedOptions = {
    q1: [11,12],
    q2: [22,22],
    q3: [22,12],
};

// Handle form submission
app.get('/gg', (req, res) => {
    res.sendFile(__dirname + '/graph.ejs');
});


app.post('/submit', (req, res,next) => {
    const q1 = req.body.q1;
    const q2 = req.body.q2;
    const q3 = req.body.q3;
    const q4 = req.body.q4;
    const q5 = req.body.q5;
    const q6 = req.body.q6;
    const q7 = req.body.q7;
    const q8 = req.body.q8;
    const q9 = req.body.q9;
    const q10 = req.body.q10;
    const q11 = req.body.q11;
    const q12= req.body.q12;
    const q13= req.body.q13;
    const q14= req.body.q14;
    const q15= req.body.q15;
    const q16 = req.body.q16;
    const q17 = req.body.q17;
    const q18 = req.body.q18;
    const q19 = req.body.q19;
    const q20 = req.body.q20;
    const q21 = req.body.q21;
    const q22 = req.body.q22;
    const q23 = req.body.q23;
    const q24 = req.body.q24;
    const q25 = req.body.q25;
    const q26 = req.body.q26;
    const q27 = req.body.q27;
    
    
    console.log(q1,q2,q3);
    // Store selected options in the data storage
    selectedOptions.q1.push(q1);
    selectedOptions.q2.push(q2);
    selectedOptions.q3.push(q3);

    const x=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27];

    let a=0,b=0,c=0;

    for(let i=0;i<x.length;i++)
    {
        if(x[i]=='A')
            a=a+1
        if(x[i]=='B')
            b=b+1
        if(x[i]=='C')
            c=c+1
    }

    console.log(a,b,c);
    GenerateBarChart(a,b,c);
    req.sharedValue=a;
    // res.send("uhwrih")
    // res.sendFile(__dirname + '/graph.html');
    let vata=`If Vata dosha remains imbalanced for an extended period, it can subsequently disrupt the equilibrium of Pitta and Kapha doshas. Prolonged Vata imbalance can result in a host of physical and behavioral symptoms, including:

    Muscle Wasting: An aggravated Vata can lead to muscle wasting, resulting in weakness and a reduction in muscle mass. This can significantly affect overall physical strength and mobility.
    
    Joint Pain: Vata imbalance often manifests as joint pains, stiffness, and reduced joint mobility, making individuals more susceptible to conditions like arthritis.
    
    Headaches: Headaches are a common consequence of Vata imbalance and are often characterized by their variability in intensity, location, and type.
    
    Constipation: Vata dominance can lead to chronic constipation, making regular bowel movements difficult and uncomfortable.
    
    Colic and Cramps: Abdominal discomfort, colic, and cramps are common symptoms of Vata imbalance, which can result in digestive distress.
    
    Gas and Digestive Issues: Individuals with imbalanced Vata may experience excessive gas, bloating, and a range of digestive problems, including irregular bowel movements.
    
    Additionally, other physical and behavioral symptoms associated with Vata imbalance include:
    
    Dry and Rough Skin: Vata's dry and cold qualities can lead to dry and rough skin, which may be prone to flakiness and discomfort.
    It's essential to address Vata imbalance promptly through appropriate Ayurvedic therapies, dietary adjustments, lifestyle modifications, and herbal remedies to restore balance to the doshas and promote overall well-being. Seeking guidance from an experienced Ayurvedic practitioner is advisable for a personalized treatment plan tailored to your unique constitution and health status.
    `
    const pita=`If Pitta dosha is significantly elevated compared to Vata and Kapha doshas and this imbalance persists over time, it can disrupt the equilibrium of the other doshas, leading to a wide array of physical and behavioral symptoms. An aggravated Pitta dosha can cause the following symptoms:

    Heat Sensitivity: Individuals with high Pitta may become more sensitive to heat, experiencing discomfort in hot weather or when exposed to intense sun.
    
    Inflammation: Elevated Pitta can result in inflammation in various parts of the body, potentially leading to conditions such as gastritis, dermatitis, or even inflammatory disorders.
    
    Acidity: Pitta-dominant individuals are prone to hyperacidity, which can manifest as heartburn, acid reflux, and a burning sensation in the stomach.
    
    Skin Issues: Pitta imbalance may lead to skin problems such as acne, rashes, hives, or skin that is sensitive to touch and prone to redness.
    
    Irritability: High Pitta can manifest as irritability, impatience, and a short temper. Individuals may find it challenging to stay calm and composed.
    
    Digestive Problems: Pitta governs digestion, and an aggravated Pitta dosha can result in diarrhea, loose stools, or other digestive issues.
    
    Aggression: In extreme cases, excessive Pitta can lead to aggressive behavior and competitiveness.
    
    Excessive Sweating: Those with high Pitta may sweat excessively, even in mild temperatures or with minimal physical exertion.
    
    Sharp Hunger Pangs: Pitta individuals may experience intense and sudden hunger pangs, leading to a strong desire to eat.
    
    Bitter Taste: An elevated Pitta dosha can result in a heightened sensitivity to bitter tastes.
    
    It is crucial to address Pitta imbalance through Ayurvedic approaches that include dietary adjustments, lifestyle modifications, cooling practices, and herbal remedies. Seeking guidance from an experienced Ayurvedic practitioner can help create a personalized treatment plan to restore balance to the doshas and promote overall health and well-being.`

    const kapa=`If Kapha dosha is significantly elevated compared to Vata and Pitta doshas, and this imbalance persists over time, it can lead to a range of physical and behavioral symptoms. An aggravated Kapha dosha can cause the following:

    Physical Symptoms:
    
    Weight Gain: High Kapha individuals tend to gain weight easily due to their slower metabolism and tendency to accumulate excess fat.
    
    Sluggishness: Kapha dominance often leads to feelings of sluggishness, both mentally and physically. Individuals may experience slow movements and thought processes.
    
    Congestion: Excess Kapha can result in various forms of congestion, such as nasal congestion, chest congestion, and sinus congestion.
    
    Lethargy: People with high Kapha may feel lethargic and unmotivated, making it challenging to engage in physical activity.
    
    Excessive Salivation: Kapha imbalance can lead to excessive salivation or thick, sticky saliva.
    
    Cold Sensitivity: Kapha-dominant individuals are more sensitive to cold weather and may feel chilly even in moderate temperatures.
    
    Digestive Sluggishness: High Kapha can lead to slow and sluggish digestion, causing feelings of heaviness after meals and potentially leading to conditions like obesity.
    
    Behavioral and Mental Symptoms:
    
    Apathy: Individuals with excessive Kapha may become apathetic and lack enthusiasm or drive.
    
    Depression: Prolonged Kapha imbalance can contribute to symptoms of depression, including sadness, hopelessness, and a lack of interest in daily activities.
    
    Resistance to Change: Kapha dominance can result in resistance to change and a preference for routine and familiarity.
    
    Overattachment: People with imbalanced Kapha may become overly attached to possessions, routines, and relationships, making it challenging to adapt to new situations.
    
    Addressing Kapha imbalance in Ayurveda typically involves incorporating practices and remedies that have a warming, stimulating, and lightening effect to counteract Kapha's heavy, cool, and damp qualities. This may include dietary modifications, regular exercise, detoxification practices, and the use of specific herbs and spices.`

    let vh=`Vata: Vata dosha governs movement, creativity, and communication. When in balance, Vata individuals are typically creative, enthusiastic, and agile. They may have a quick mind and adapt well to change.`
    let ph='Pitta: Pitta dosha is responsible for digestion, metabolism, and intellect. Balanced Pitta individuals tend to have strong digestion, sharp intellect, and a good appetite for learning and achieving their goals.'
    let kh='Kapha: Kapha dosha provides stability, strength, and emotional calmness. In balance, Kapha individuals are often steady, supportive, and have a nurturing nature. They tend to have good endurance and strong immunity.'



    let myVariable = 'Vata, Pitta, and Kapha—are in a state of equilibrium and are present in balanced proportions within an individual, it is considered an ideal state of health in Ayurveda. This balance is referred to as "Sama Dosha," and it is associated with overall well-being, optimal health, and a harmonious state of mind and body.';


    let vaa="You Have High in Vata"
    let pit="You Have High in Pitta"
    let kaa="You Have High in Kapha"
    let header=`You are in equillibrium`;
    let img="/equillibrium.jpg";
    let headerdef="You are in Equillibrium"


    
    {
        if(a>=b&&a>=c)
        {
            myVariable=vata;
            header=vaa;
            img='/vata/jpg'
            headerdef=vh;
        }
        else if (b>=a&&b>=c)
        {
            myVariable=pita;
            header=pit;
            img='pitta.jpg'
            headerdef=ph;
        }
        else if(c>=a&&c>=b)
        {
            myVariable=kapa;
            header=kaa;
            img='kapha.jpg'
            headerdef=kh;
        }
    }
   res.send(`
    <!DOCTYPE html>
    <html>
    <head>
    <style>
    /* Reset some default styles to ensure consistency */
    body, h1, p {
        margin: 0;
        padding: 0;
    }

    /* Overall styling for the body */
    body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0; /* Background color for the entire page */
        text-align: center;
    }

    /* Page title styling */
    h1 {
        font-size: 24px;
        color: #333; /* Text color for headings */
        margin-top: 20px;
    }

    /* Paragraph styling */
    p {
        font-size: 16px;
        color: #666; /* Text color for paragraphs */
    }

    /* Image styling */
    img {
        max-width: 100%; /* Ensure images don't overflow their containers */
        height: auto;
        margin: 20px 0; /* Add space above and below images */
    }
</style>
        <title>Bar Graph</title>
        <!-- Include Chart.js library -->
        <!-- <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> -->
    </head>
    <body>
        <!-- Create a canvas element to render the bar graph -->
        <h1>Tiridosha Theory</h1>
        <!-- <canvas id="barChart"></canvas> -->
        <!-- <img src="/barChart.png" alt=""> -->   
        <img src="/barChart.png" alt="">
        <h1>${header}</h1>
        <br>
        <p>${headerdef}</p>
        <br>
        <p>${myVariable}</p>
        <br>
        <img src=${img} alt="">
        <!-- Include your JavaScript code for creating the chart -->
        <!-- <script src="chart.js"></script> -->
    </body>
    </html>
    `
    )
    // res.send(`<!DOCTYPE html>
    // <html>
    
    // <head>
    //     <style>
    //         /* Reset some default styles to ensure consistency */
    //         body, h1, p {
    //             margin: 0;
    //             padding: 0;
    //         }
    
    //         /* Overall styling for the body */
    //         body {
    //             font-family: Arial, sans-serif;
    //             background-color: #f0f0f0; /* Background color for the entire page */
    //             text-align: center;
    //         }
    
    //         /* Chat bubble container style */
    //         .chat-bubble {
    //             background-color: #007BFF; /* Background color for chat bubbles */
    //             color: #fff; /* Text color for chat bubbles */
    //             max-width: 80%; /* Max width for the chat bubble container */
    //             margin: 20px auto; /* Center-align chat bubbles with some margin */
    //             padding: 10px 20px; /* Padding inside the chat bubble */
    //             border-radius: 10px; /* Rounded corners for the chat bubble */
    //             display: inline-block; /* Display as inline block for chat bubbles */
    //         }
    
    //         /* Page title styling */
    //         h1 {
    //             font-size: 24px;
    //             color: #333; /* Text color for headings */
    //             margin-top: 20px;
    //         }
    
    //         /* Paragraph styling */
    //         p {
    //             font-size: 16px;
    //             color: #666; /* Text color for paragraphs */
    //         }
    
    //         /* Image styling */
    //         img {
    //             max-width: 100%; /* Ensure images don't overflow their containers */
    //             height: auto;
    //             margin: 20px 0; /* Add space above and below images */
    //         }
    //     </style>
    //     <title>Bar Graph</title>
    // </head>
    
    // <body>
    //     <!-- Chat-like chat bubble container for content -->
    //     <div class="chat-bubble">
    //         <h1>Tiridosha Theory</h1>
    //         <img src="/barChart.png" alt="">
    //     </div>
    //     <!-- Chat-like chat bubble container for content -->
    //     <div class="chat-bubble">
    //         <h1>${header}</h1>
    //         <p>${headerdef}</p>
    //         <p>${myVariable}</p>
    //         <img src=${img} alt="">
    //     </div>
    // </body>
    
    // </html>
    // `)
    
    // res.render('graph', { content: contentFromNodeJS });
    

});




// console.log(selectedOptions);

// Route to display the graph
app.get('/graph', (req, res) => {
    // Prepare data for the chart
    const aa= req.sharedValue;
    console.log(aa);
    const data = {
        labels: ['Option A', 'Option B', 'Option C'],
        datasets: [
            {
                label: 'Question 1',
                data: getOptionCount(selectedOptions.q1),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Question 2',
                data: getOptionCount(selectedOptions.q2),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'Question 3',
                data: getOptionCount(selectedOptions.q3),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Create the chart
    const ctx = require('canvas').createCanvas(800, 400).getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });

    // Convert the chart to a base64 image
    const image = chart.toBase64Image();

    // Display the chart
    res.send(`<img src="${image}">`);
});

// Start the server
const port = 3030;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Helper function to count option occurrences
function getOptionCount(options) {
    const optionCount = {
        A: 0,
        B: 0,
        C: 0,
    };

    for (const option of options) {
        optionCount[option]++;
    }

    return [optionCount.A, optionCount.B, optionCount.C];
}
