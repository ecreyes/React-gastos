import React from 'react';

class Detalle extends React.Component {
    render() {
        const presupuesto = this.props.presupuesto;
        const restante = this.props.restante;
        return (
            <div className="mt-3">
                <div className="alert alert-info" role="alert">
                    Presupuesto ${presupuesto}
                </div>
                <div className="alert alert-danger" role="alert">
                    Restante ${restante}
                </div>
            </div>
        );
    }
}

export default Detalle;