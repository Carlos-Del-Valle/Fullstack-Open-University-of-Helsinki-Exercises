import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = ({good, neutral, bad, allClicks}) => {

    if (allClicks === 0) {
        return (
            <div>
                No feedback given
            </div>
        )
    }

    return(
        <div>
            <table>
                <tbody>
                    <Statistic text='good ' value = {good}/>
                    <Statistic text='neutral ' value = {neutral}/>
                    <Statistic text='bad ' value = {bad}/>
                    <Statistic text='all ' value = {allClicks}/>
                    <Statistic text='average ' value={(good - bad) / allClicks} />
                    <Statistic text='positive ' value={`${(good / allClicks) * 100} %`} />
                </tbody>
            </table>
        </div>
    )
}

const Statistic = ({text, value}) => {
    return(

            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>

    )
}


const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allClicks, setAll] = useState(0)
    const [selected, setSelected] = useState(0)

    const handleGoodClick = () => {
        console.log('clicked the Good click button')
        setGood(good + 1)
        setAll(allClicks + 1)
    }

    const handleNeutralClick = () => {
        console.log('clicked the Neutral click button')
        setNeutral(neutral + 1)
        setAll(allClicks + 1)
    }

    const handleBadClick = () => {
        console.log('clicked the Bad click button')
        setBad(bad + 1)
        setAll(allClicks +1)
    }

    const handleAnecdoteClick = () => {
        console.log('clicked the Next anecdote button')
        setSelected(Math.floor(Math.random() * anecdotes.length))
        }

    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]

    return (
        <div>
            <h1>give feedback</h1>

            <Button handleClick={handleGoodClick} text='Good'/>
            <Button handleClick={handleNeutralClick} text='Neutral'/>
            <Button handleClick={handleBadClick} text='Bad'/>

            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>

            <h1>Anecdotes</h1>
            <p>{anecdotes[selected]}</p>
            <Button handleClick={handleAnecdoteClick} text='Next anecdote' />


        </div>
    )
}

export default App
