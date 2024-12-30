import React, { useEffect, useState } from 'react';
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Helmet } from 'react-helmet';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const Statistics = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/allData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const data = {
        labels: products.map((product) => product.title),
        datasets: [
          {
            label: "Price ($)",
            data: products.map((product) => product.price),
            backgroundColor: "rgba(75, 192, 192)",
          },
          {
            label: "Rating (x500 for scale)",
            data: products.map((product) => product.rating * 500),
            backgroundColor: "rgba(153, 102, 255)",
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Product Prices and Ratings",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };


    return (
        <div>
            <Helmet>
              <title>Gadget Heaven/Statistics</title>
            </Helmet>
            <div className='bg-purple-600 lg:px-16 mx-2 md:mx-auto
              flex justify-center items-center h-[240px] md:h-[340px]'>
                <div className='text-center'>
                    <h1 className='text-xl lg:text-4xl text-white font-semibold lg:leading-snug mt-2 lg:w-[900px]'>Statistics</h1>
                    <p className='text-gray-200'>Explore the latest gadgets that will take your experience to the next level. From smart devices to<br /> the coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className='mt-8 lg:px-16 mx-2 md:mx-auto'>
                <h2 className='text-2xl font-semibold text-gray-600'>Statistics</h2>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Statistics;