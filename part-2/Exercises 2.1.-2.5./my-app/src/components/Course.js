import React from 'react';

import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'
import Total2 from './Total2.js'
import Header2 from './Header2.js'
import Content2 from './Content2.js'


const Course = ({ course}) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
            <Header2 course={course} />
            <Content2 course={course} />
            <Total2 course={course} />
        </div>
    )
}

export default Course