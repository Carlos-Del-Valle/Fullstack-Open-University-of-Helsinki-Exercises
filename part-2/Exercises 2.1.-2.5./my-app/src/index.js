import React from 'react';
import ReactDOM from 'react-dom';

const Title = ({title}) => {

    return (
        <h1>{title.name}</h1>
    )
}

const Header = ({ course }) => {
    return (
        <h2>{course[0].name}</h2>
    )
}

const Header2 = ({ course }) => {
    return (
        <h2>{course[1].name}</h2>
    )
}

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

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

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

const Content2 = ({ course }) => {
    return (
        <div>
            <Part part={course[1].parts[0]} />
            <Part part={course[1].parts[1]} />
        </div>
    )
}

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



const App = () => {

    const title = {
        id: 1,
        name: 'Web development curriculum'
        }


    const course = [{
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },

            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
          ]
        },

        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }

        ]


    return (

        <div>
            <Title title={title} />
            <Course course={course} />


        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))