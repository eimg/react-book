import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <li>
                {this.props.name},
                ${this.props.price}
            </li>
        );
    }
}

class AddForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();

    render() {
        return (
            <div>
                <input type="text" ref={this.nameRef} /><br />
                <input type="text" ref={this.priceRef} /><br />
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}

class App extends React.Component {
    state = {
        items: [
            { id: 1, name: 'Apple', price: 0.99 },
            { id: 2, name: 'Orange', price: 0.89 },
        ]
    }

    add = (name, price) => {
        let id = this.state.items.length + 1;

        this.setState({
            items: [
                ...this.state.items,
                { id, name, price }
            ]
        });
    }

    render() {
        return (
            <div>
                <h1>Hello React</h1>
                <ul>
                    {this.state.items.map(i => {
                        return (
                            <Item
                                id={i.id}
                                name={i.name}
                                price={i.price}
                            />
                        )
                    })}
                </ul>
                <AddForm add={this.add} />
            </div>
        )
    }
}

export default App;
