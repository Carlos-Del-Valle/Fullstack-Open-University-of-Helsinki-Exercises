import React, { useState,useEffect } from "react";
import personService from './services/persons';
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const initialPersons = [
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
];

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [nameFilter, setNameFilter] = useState("");

    useEffect(() => {
        console.log('effect')
        personService
            .getAll()
            .then(initialPersons => {
                console.log('promise fulfilled')
                setPersons(initialPersons)
            })
    }, [])


    const lowerCasedNames = persons.map(person => {
        return person.name.toLocaleLowerCase();
    });

    const filteredPersons = persons.filter(person => {
        return person.name.toLocaleLowerCase().includes(nameFilter.toLowerCase());
    });

    const handleChange = (event, type) => {
        switch (type) {
            case "nameFilter":
                setNameFilter(event.target.value);
                break;
            case "name":
                setNewName(event.target.value);
                break;
            case "number":
                setNewNumber(event.target.value);
                break;
            default:
                break;
        }
    };

    const createNewPerson = () => {
        const replacer = (match, p1, p2) => {
            return p1.toUpperCase() + p2.toLocaleLowerCase();
        };

        const titleCasedName = newName.replace(/\b([a-zA-Z])(\w+)/g, replacer);

        const person = {
            name: titleCasedName,
            number: newNumber
        };

        return person;
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (lowerCasedNames.includes(newName.toLocaleLowerCase())) {
            alert(`${newName} is already added to the phonebook.`);
        } else {
            const person = createNewPerson();
            personService
                .create("http://localhost:3001/persons", person)
                .then(response => {
                setPersons(persons.concat(response.data));
                setNewName("");
                setNewNumber("");
            });
        }

        setNewName("");
        setNewNumber("");
    };

    const removePersonWithId = id => {
        let deleted = true;

        personService
            .remove(id)
            .catch(err => {
                console.log(err);
                deleted = false;
            })
            .finally(() => {
                if (deleted) {
                    setPersons(persons.filter(p => p.id !== id));
                }
            });
    };

    const handleClick = (event, type) => {
        switch (type) {
            case "deletePerson":
                const id = parseInt(event.target.dataset.id);
                if (Number.isNaN(id) || !id) break;
                const person = persons.find(p => p.id === id);
                const wantsToDelete = window.confirm(`Delete ${person.name}?`);
                if (wantsToDelete) removePersonWithId(id);
                break;
            default:
                break;
        }
    };


    return (
        <div>
            <h2>Phonebook</h2>

            <Filter
                handleFilterChange={event => handleChange(event, "nameFilter")}
                value={nameFilter}
            />

            <h3>Add a New:</h3>

            <PersonForm
                nameValue={newName}
                numberValue={newNumber}
                handleSubmit={event => handleSubmit(event)}
                handleNameChange={event => handleChange(event, "name")}
                handleNumberChange={event => handleChange(event, "number")}
            />

            <h3>Numbers</h3>

            <Persons
                persons={filteredPersons}
                handleClick={event => handleClick(event, "deletePerson")}
            />

        </div>
    );
};

export default App;

