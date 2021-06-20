import React from 'react';

const Total = ({ course }) => {
    //const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    let initialValue = 0
    let sum = [{x: course[0].parts[0].exercises}, {x: course[0].parts[1].exercises}, {x: course[0].parts[2].exercises}, {x: course[0].parts[3].exercises}].reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.x
    }, initialValue)

    return(
        <b>Total of exercises {sum}</b>
    )
}

export default Total