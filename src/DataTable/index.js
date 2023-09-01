import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Spin } from 'antd'; // Import the Table and Spin components

const Index = () => {
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading as true
  const columns = [ // Define the table columns
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    // Add more columns as needed
  ];

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT'); // Replace with your API endpoint
        setGridData(response.data); // Set the data in the state
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    loadData(); // Call the loadData function when the component mounts
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <div>
      <h2>DataTable with Ant Design in React</h2>
      {loading ? ( // Display a loading spinner while data is being fetched
        <Spin size="large" />
      ) : (
        <Table
          dataSource={gridData}
          columns={columns}
          pagination={false} // Remove pagination if you don't need it
        />
      )}
    </div>
  );
};

export default Index;
