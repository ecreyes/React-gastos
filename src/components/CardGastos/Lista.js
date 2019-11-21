import React from 'react';

class Lista extends React.Component {
    render() {
        const gastos = this.props.gastos;
        const gastosItems = gastos.map((item, index) =>
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {item.gasto}
                <span className="badge badge-primary badge-pill">{item.cantidad}</span>
            </li>
        );
        return (
            <ul className="list-group mt-1">
                {gastosItems}
            </ul>
        );
    }
}

export default Lista;