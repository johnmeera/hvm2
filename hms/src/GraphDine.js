import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import moment from 'moment';
import './Dineinn.css'; // Import CSS file for styling

const Dineinn = () => {
  const [dineinns, setDineinns] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8105/dineinn/all');
        setDineinns(response.data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (dineinns.length > 0) {
      const today = moment().startOf('day');
      const last7Days = Array.from({ length: 7 }, (_, i) => today.clone().subtract(i, 'days'));
      const last7DaysDates = last7Days.map((day) => day.format('YYYY-MM-DD'));

      const filteredData = last7DaysDates.map((date) => {
        const salesForDate = dineinns.filter((item) => moment(item.time).isSame(date, 'day'));
        const totalSalesForDate = salesForDate.reduce((total, item) => total + item.nettotal, 0);
        return {
          date,
          sales: totalSalesForDate,
        };
      });

      setFilteredData(filteredData);
    }
  }, [dineinns]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="dineinn-container">
      <h6>Dinein</h6>

      <div className="chart">
        <ResponsiveContainer width="100%" aspect={2}>
          <AreaChart
            data={filteredData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="sales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" stroke="gray" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#sales)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <table className="dineinn-table">
        {/ Table content rendering /}
      </table>
    </div>
  );
};

export default Dineinn;
