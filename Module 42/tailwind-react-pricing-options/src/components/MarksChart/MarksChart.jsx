import React , {use} from 'react';

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
            
        </div>
    );
};

export default MarksChart;