import React, { Component } from "react";

class Costumer extends Component {
    
    onDelete= () =>{
       this.props.onDelete(this.props.customer.id);
    }
    onEdit= () =>{
        this.props.onEdit(this.props.customer);
     }
    render() {
        const customer= this.props.customer;
        return (
            <tr>
                <td>{customer.id}</td>
                <td>{customer.nombre}</td>
                <td>{customer.correo}</td>
                <td>
                    <button className="mini ui blue button" onClick={this.onEdit} >Editar</button>
                    <button className="mini ui red button" onClick={this.onDelete}>Eliminar</button>
                </td>
            </tr>

        );
    }
}
export default Costumer;