import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
const Result = [
  { "id": 1, "name": "Student A", "science": 78, "physics": 72, "math": 85 },
  { "id": 2, "name": "Student B", "science": 85, "physics": 80, "math": 90 },
  { "id": 3, "name": "Student C", "science": 92, "physics": 88, "math": 95 },
  { "id": 4, "name": "Student D", "science": 67, "physics": 60, "math": 70 },
  { "id": 5, "name": "Student E", "science": 74, "physics": 69, "math": 76 },
  { "id": 6, "name": "Student F", "science": 88, "physics": 84, "math": 91 },
  { "id": 7, "name": "Student G", "science": 59, "physics": 55, "math": 63 },
  { "id": 8, "name": "Student H", "science": 81, "physics": 78, "math": 86 },
  { "id": 9, "name": "Student I", "science": 90, "physics": 89, "math": 94 },
  { "id": 10, "name": "Student J", "science": 69, "physics": 65, "math": 72 }
]

const ResultChart = () => {
    return (
        <div>
            
            <LineChart width={500} height={300} data={Result}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey= "math" stroke='red'></Line>
                <Line dataKey= "physics" stroke='green'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;