import React from 'react';

const Header = ({ course }) => {
    return (
        <h2>{course[0].name}</h2>
    )
}

export default Header