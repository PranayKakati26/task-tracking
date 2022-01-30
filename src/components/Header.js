import React from 'react';
import Button from './Button';



const Header = ({onAdd,btnColor,btnText}) => {
    const onClick = () => {
        onAdd();
    }



    return (
        <header className="header">
        <h1>Task Tracker</h1>
            <Button color={btnColor} text={btnText} onClick={onClick}/>
        </header>
    );
};

export default Header;
