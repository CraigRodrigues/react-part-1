import React from 'react';
import ReactDOM from 'react-dom';

function GroceryItem(props) {
    return <li>{props.name}</li>;
}

const groceryList = () => (
    <div>
        <h1>My Grocery List</h1>
        <ol>
            <GroceryItem name="Eggs" />
            <GroceryItem name="Bacon" />
            <GroceryItem name="Cheese" />
            <GroceryItem name="Biscuits" />
        </ol>
    </div>
);

ReactDOM.render(
    groceryList(),
    document.getElementById('app')
);