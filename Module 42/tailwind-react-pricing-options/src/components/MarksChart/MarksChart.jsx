import React , {use} from 'react';
import { Bar, BarChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise)
    const marksData = marksDataRes.data
    const marksChartData = marksData.map(studentData => {

        const student = {
            id : studentData.id,
            name : studentData.name ,
            physics : studentData.marks.physics ,
            math : studentData.marks.math ,
            science : studentData.marks.science
        }
        const avg = (student.physics + student.math + student.science)/3;
        student.avg = avg;
        return student;
    })

    console.log(marksChartData)
    return (
        <div>
            {
               <BarChart height={500} width={1300} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="avg" fill='red'></Bar>
                <Bar dataKey="math" fill='yellow'></Bar>
                <Bar dataKey="science" fill='green'></Bar>
               </BarChart> 
            }
        </div>
    );
};

export default MarksChart;