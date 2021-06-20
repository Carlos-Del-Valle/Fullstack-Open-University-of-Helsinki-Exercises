import React from 'react';

const Total2 = ({ course }) => {
    //const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    let initialValue = 0
    let sum = [{x: course[1].parts[0].exercises}, {x: course[1].parts[1].exercises}].reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.x
    }, initialValue)

    return(
        <b>Total of exercises {sum}</b>
    )
}

export default Total2