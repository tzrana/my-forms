import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChartComponent = () => {
  const [seriesData, setSeriesData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset any previous errors
      try {
        const response = await fetch('https://mocki.io/v1/5df86e2d-e139-43a9-892e-08255fd6c032');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();

        // Log the raw data for debugging
        console.log('Fetched data:', result);

        // Validate if the result has the expected structure
        if (result && Array.isArray(result.data) && result.data.length > 0) {
          const categories = result.data.map(item => item.date); // Extract dates for X-axis
          const values = result.data.map(item => item.value); // Extract values for Y-axis

          // Update state with valid data
          setSeriesData([{ name: 'Data', data: values }]);
          setCategories(categories);
        } else {
          throw new Error('Unexpected data structure');
        }
      } catch (error) {
        setError(error.message);
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function (optional)
    return () => {
      setSeriesData([]);
      setCategories([]);
    };
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Chart options configuration
  const chartOptions = {
    chart: {
      type: 'line',
      height: 350,
    },
    xaxis: {
      categories: categories, // X-axis categories (dates)
    },
    title: {
      text: 'Line Chart Example',
      align: 'center',
    },
    stroke: {
      curve: 'smooth', // Smooth curve for the line
    },
    markers: {
      size: 4,
      colors: ['#FF4560'], // Marker color for the line
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  // Conditional rendering of loading, error, or chart
  return (
    <div style={{ padding: '20px' }}>
      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && seriesData.length > 0 && categories.length > 0 ? (
        <ReactApexChart
          options={chartOptions}
          series={seriesData}
          type="line"
          height={350}
        />
      ) : (
        !loading && !error && <p>No data available.</p>
      )}
    </div>
  );
};

export default LineChartComponent;
