import React from 'react';
import Part from './Part.js';

const Content = ({ course }) => {
    return (
        <div>
            <Part part={course[0].parts[0]} />
            <Part part={course[0].parts[1]} />
            <Part part={course[0].parts[2]} />
            <Part part={course[0].parts[3]} />
        </div>
    )
}

export default Content