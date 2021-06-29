import React, { useState } from "react";

const Person = props => {
    return (
        <>
            {props.name} {props.number}
            <br />
        </>
    );
};

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "0426877076" }]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [nameFilter, setNameFilter] = useState("");

    const lowerCasedNames = persons.map(person => {
        return person.name.toLocaleLowerCase();
    });

    const filteredPersons = persons.filter(person => {
        return person.name.toLocaleLowerCase().includes(nameFilter.toLowerCase());
    });

    const personsList = filteredPersons.map(person => {
        return (
            <Person key={person.name} name={person.name} number={person.number} />
        );
    });

    const handleChangeName = event => {
        setNewName(event.target.value);
    };

    const handleChangeNumber = event => {
        setNewNumber(event.target.value);
    };

    const handleChangeFilter = event => {
        setNameFilter(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (lowerCasedNames.includes(newName.toLocaleLowerCase())) {
            alert(`${newName} is already added to the phonebook.`);
        } else {
            const replacer = (match, p1, p2) => {
                return p1.toUpperCase() + p2.toLocaleLowerCase();
            };

            const titleCasedName = newName.replace(/\b([a-zA-Z])(\w+)/g, replacer);

            const person = {
                name: titleCasedName,
                number: newNumber
            };

            setPersons([...persons].concat(person));
        }

        setNewName("");
        setNewNumber("");
    };

    return (
        <div>
            <h2>Phonebook</h2>
            Filter by Name:{" "}
            <input
                onChange={event => handleChangeFilter(event)} value={nameFilter}/>
            <form onSubmit={event => handleSubmit(event)}>
                <h2>Add a new</h2>
                <div>
                    name:{" "}
                    <input onChange={event => handleChangeName(event)} value={newName} />
                </div>
                <div>
                    number:{" "}
                    <input onChange={event => handleChangeNumber(event)} value={newNumber}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Names & Numbers</h2>
            {personsList}
        </div>
    );
};

export default App;
