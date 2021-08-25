import React, { Component } from "react";
import MyForm from "./MyForm";
import CostumerList from "./CostumerList";
import axios from "axios";
import Cargar from "./Cargar";
import "./app.css";


class App extends Component {

    state = {
        customers:[],
        url:"http://laravel-rest-api.test/api/customers",
        customer: {},
        loader:false,

    };
    componentDidMount(){
        this.getCustomers();
    }
    getCustomers = async () => {
        this.setState({loader:true});
        const c = await axios.get(this.state.url);
        this.setState({customers: c.data, loader:false});
    }
    delete = async(id) =>{
        await axios.delete(`${this.state.url}/${id}`);
        this.getCustomers();

    }
    onDelete= (id) =>{
        this.delete(id);
    }
    onEdit= (customer) =>{
        /* this.setState({customer:customer}) */
        this.setState({customer:customer})
    }
    createCustomer =async (data)=>{
        this.setState({loader:true})
        await axios.post(this.state.url,{
        nombre: data.nombre,
        apellido: data.apellido,
        correo: data.correo    
        })
        this.getCustomers();
    }

    editCostumer= async (data)=>{
        this.setState({customer:{},loader:true})
        await axios.put(`${this.state.url}/${data.id}`,{
        nombre: data.nombre,
        apellido: data.apellido,
        correo: data.correo 
        });
        this.getCustomers();

    }
    onFormSubmit = data =>{
        if(data.isEdit){
            this.editCostumer(data)
        }else{
            this.createCustomer(data);
        }
    }
    
    
    render() {

        return (
            <div>
                <div className="ui inverted menu">
                    <div className="ui container">
                        <a href="/#" className="header item">
                            Api react-laravel
                        </a>
                    </div>
                </div>
                <div className="ui main container">
                    <MyForm customer={this.state.customer}
                    onFormSubmit={this.onFormSubmit}
                    />
                    {this.state.loader? <Cargar/>: ""}
                    <CostumerList 
                    customers={this.state.customers}
                    onDelete={this.onDelete}
                    onEdit={this.onEdit}
                    />
                </div>
            </div>

        );
    }
}
export default App;