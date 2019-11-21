import React from 'react';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            gasto:"",
            cantidad:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleGastoChange = this.handleGastoChange.bind(this);
        this.handleCantidadChange = this.handleCantidadChange.bind(this);
    }

    handleGastoChange(e){
        this.setState({
            gasto: e.target.value
        });
    }

    handleCantidadChange(e){
        this.setState({
            cantidad:e.target.value
        });

    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.gasto && this.state.cantidad){
            this.props.onGastoChange(this.state);
            e.currentTarget.reset();
            this.setState({
                gasto:"",
                cantidad:""
            });
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="gasto">Nombre gasto</label>
                    <input onChange={this.handleGastoChange} className="form-control" id="gasto" type="text" placeholder="Ej. transporte"/>
                </div>
                <div className="form-group">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input onChange={this.handleCantidadChange} className="form-control" id="cantidad" type="text" placeholder="Ej. 300"/>
                </div>
                <input className="btn btn-primary btn-block" type="submit" value="Agregar" />
            </form>
        );
    }
}

export default Form;