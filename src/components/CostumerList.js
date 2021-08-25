import React, {Component} from "react";
import Costumer from "./Costumer";

class CostumerList extends Component{
    onDelete =(id) =>{
        this.props.onDelete(id);
    }
    onEdit =(customer) =>{
        this.props.onEdit(customer);
    }
    render(){
        
        const customers= this.props.customers; //LEER LAS PROS
        return (
            <div className="data">
                <table className="ui celled table">
                    <thead>
                    <tr>
                        <th>B</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Acción</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map(customer=>{
                    return <Costumer 
                    customer={customer} 
                    key = {customer.id}
                    onDelete={this.onDelete}
                    onEdit= {this.onEdit}
        
                    />; 
                    })} 
                    </tbody>
                </table>
            </div>
        );
    }
}
export default CostumerList;