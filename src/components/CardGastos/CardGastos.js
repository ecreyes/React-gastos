import React from 'react';
import Form from './Form';
import Listado from './Listado'

class CardGastos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            presupuesto:1000,
            restante:1000,
            gastos:[]
        }
        this.handleGastoChange = this.handleGastoChange.bind(this);
    }

    handleGastoChange(data){
        let cloneGastos = this.state.gastos.slice();
        let cloneRestante = this.state.restante;
        cloneRestante -= data.cantidad;
        if(cloneRestante>=0){
            cloneGastos.push(data);
            this.setState({
                restante:cloneRestante,
                gastos: cloneGastos
            });
        }
    }

    render() {
        return (
            <div className="card card-body">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Form onGastoChange={this.handleGastoChange}/>
                    </div>
                    <div className="col-12 col-md-6">
                        <Listado  gastos={this.state.gastos} restante={this.state.restante} presupuesto={this.state.presupuesto}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardGastos;