import React from 'react';
import ReactDOM from 'react-dom';

function GroceryHeader(props) {
    return <h1>{props.title}</h1>;
}

function GroceryItem(props) {
    return <li>{props.item}</li>;
}

function GroceryList(props) {
    return (
        <ol>
            {props.items.map((item, i) => <GroceryItem key={i} item={item} />)}
        </ol>
    )
}

const list = (
    <div>
        <GroceryHeader title="My Grocery List!" />
        <GroceryList items={['Eggs', 'Bacon', 'Cheese', 'Biscuits', 'Ham']}/>
    </div>
)

ReactDOM.render(
    list,
    document.getElementById('app')
);








