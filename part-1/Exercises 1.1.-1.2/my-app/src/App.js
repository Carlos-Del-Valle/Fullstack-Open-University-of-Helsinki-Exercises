import React from 'react'

const App = () => {

    return (
        <div>

            <Header/>

            <Content/>

            <Total/>

        </div>
)

}

    const Header = () => {

    const course = 'Half Stack application development'

        return(
            <div>
                {course}
            </div>

        )
    }

    const Content = () => {


        const exercises1 = 10

        const exercises2 = 7

        const exercises3 = 14

        return(
            <div>
                <Part1/>: {exercises1} exercises.<br />
                <Part2/>: {exercises2} exercises.<br />
                <Part3/>: {exercises3} exercises.<br />
            </div>
    )
}

    const Part1 = () => {
        const part1 = 'Fundamentals of React'
        return (
            <>
                {part1}
            </>
    )
}

    const Part2 = () => {
        const part2 = 'Using props to pass data'
        return (
            <>
                {part2}
            </>
    )
}
    const Part3 = () => {
        const part3 = 'State of a component'
        return (
            <>
                {part3}
            </>
    )
}

    const Total = () => {

        const exercises1 = 10
        const exercises2 = 7
        const exercises3 = 14

    return(
            <div>
                Number of exercises: {exercises1 + exercises2 + exercises3}.
            </div>
    )
}

export default App

