import React from 'react';
import Lista from './Lista';
import Detalle from './Detalle';


class Listado extends React.Component{
    render(){
        const gastos = this.props.gastos;
        const restante = this.props.restante;
        const presupuesto = this.props.presupuesto;
        return(
            <div>
                <Lista gastos={gastos}/>
                <Detalle restante={restante} presupuesto={presupuesto}/>
            </div>
        );
    }
}

export default Listado;