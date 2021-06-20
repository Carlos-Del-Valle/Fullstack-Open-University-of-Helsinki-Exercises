import React from 'react';
import Part from './Part.js';

const Content2 = ({ course }) => {
    return (
        <div>
            <Part part={course[1].parts[0]} />
            <Part part={course[1].parts[1]} />
        </div>
    )
}

export default Content2