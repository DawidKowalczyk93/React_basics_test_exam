import React, {Component} from "react";
import { createRoot } from "react-dom/client";


class RandomNumbers extends Component{
    render() {
       const {min, max, count} = this.props;
       const numbers = [];
       for(let i = 0; i < count; i++) {
           numbers.push(Math.floor(Math.random() * (max - min + 1) + min));
       }
       return (
           <>
               <RandomNumbersInfo min={min} max={max} count={count} />
               <RandomNumbersList numbers={numbers} />
           </>

       )
    }
}

class RandomNumbersInfo extends Component {
    render() {
        return (
            <div>
                <p>Minimalna liczba to: {this.props.min}</p>
                <p>Maksymalna liczba to: {this.props.max}</p>
                <p>Ilość liczb to: {this.props.count}</p>
            </div>
        )
    }
}

class RandomNumbersList extends Component {
    render() {
        return (
        <ul>
            {this.props.numbers.map((number, index) => {
                return <li key={index}>{number}</li>
            })}
        </ul>
        ) }
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<RandomNumbers min={1} max={10} count={10} />);