import React from 'react'

const course = {
    name: 'Half Stack application development',
    parts: [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]
}

const Header = () => {

    //const course = 'Half Stack application development'

    return(
        <div>
            {course.name}
        </div>

    )
}

const Content = () => {


    return(
        <div>
            <Part1/>: {course.parts[0].exercises} exercises.<br />
            <Part2/>: {course.parts[1].exercises} exercises.<br />
            <Part3/>: {course.parts[2].exercises} exercises.<br />
        </div>
    )
}

const Part1 = () => {
    //const part1 = 'Fundamentals of React'
    return (
        <>
            {course.parts[0].name}
        </>
    )
}

const Part2 = () => {
    //const part2 = 'Using props to pass data'
    return (
        <>
            {course.parts[1].name}
        </>
    )
}

const Part3 = () => {
    //const part3 = 'State of a component'
    return (
        <>
            {course.parts[2].name}
        </>
    )
}

const Total = () => {

    //const exercises1 = 10
    //const exercises2 = 7
    //const exercises3 = 14

    return(
        <div>
            Number of exercises: {course.parts[0].exercises+ course.parts[1].exercises + course.parts[2].exercises}.
        </div>
    )
}

const App = () => {

    return (
        <div>
            <Header></Header>
            <Content></Content>
            <Total></Total>

        </div>
    )

}

export default App

