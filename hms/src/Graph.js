import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Graph = ({ aspect, title }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);
  const [totalCost, setTotalCost] = useState(0);
  const [takeaways, setTakeaways] = useState([]);

  useEffect(() => {
    const fetchTakeaways = async () => {
      try {
        const response = await axios.get('http://localhost:8105/takeaway/all');
        setTakeaways(response.data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching takeaways:', error);
      }
    };

    fetchTakeaways();
  }, []);

  useEffect(() => {
    if (takeaways.length > 0) {
      const today = moment().startOf('day');
      const last7Days = Array.from({ length: 7 }, (_, i) =>
        today.clone().subtract(i, 'days')
      );
      const last7DaysDates = last7Days.map((day) => day.format('YYYY-MM-DD'));
  
      const filteredData = last7DaysDates.map((date) => {
        const salesForDate = takeaways.filter(
          (item) => moment(item.time).isSame(date, 'day')
        );
        const totalCostForDate = salesForDate.reduce(
          (total, item) => total + item.nettotal,
          0
        );
        return {
          date,
          cost: totalCostForDate,
        };
      });
  
      setFilteredData(filteredData);
  
      const sumOfCost = filteredData.reduce((total, item) => total + item.cost, 0);
      setTotalCost(sumOfCost);
    }
  }, [takeaways]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const targetAmount = 10000; 

  return (
    <div className="chart">
      <h6>Roomservice</h6>
      <div className="title">Last 7 Days Chart</div>
      <ResponsiveContainer width="100%" aspect={2}>
        <AreaChart
          width={730}
          height={250}
          data={filteredData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" stroke="gray" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip content={<CustomTooltip targetAmount={targetAmount} />} />
          <Area
            type="monotone"
            dataKey="cost"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label, targetAmount }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{`Target: ${targetAmount}`}</p>
      </div>
    );
  }

  return null;
};

export default Graph;
