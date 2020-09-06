import React, {Component} from 'react';

export class Counter extends Component {
    render() {
        return (
            <div>
                <div>Counter: <span>{this.props.counter}</span></div>
                <div>Number of Clicks: <span>{this.props.index}</span></div>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
                <button onClick={this.props.getIndex}>Total number of clicks</button>
            </div>

        )
    }
}