import React, { Component } from "react";

class MyForm extends Component {
    state = {
        form: { nombre: "", apellido: "", correo: "", isEdit: false },
        btnName: "Guardar",
        btnClass: "ui primary button submit-button",
    }

    empty(obj) {
        return Object.entries(obj).length === 0 && obj.constructor === Object;
    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props && !this.empty(this.props.customer)) {
           this.setState({
            form: {...this.props.customer, isEdit:true},
            btnName: "Editar",
            btnClass:"ui orange button submit-button"
           })

        }

    }
    handleChange= event =>{
        const {name, value} = event.target;
        let form= this.state.form;
        form[name]= value;
        this.setState({form});

    }
    onFormSubmit= event=>{
        //prevenir que recargue la pag
        event.preventDefault();
       
        if(this.formValidation()){
           //enviar datos a la app
           this.props.onFormSubmit(this.state.form); 
        }

    }
    formValidation(){
      if(document.getElementsByName("nombre")[0].value===""){
          alert("Ingrese el nombre");
          return false;
      } 
      if(document.getElementsByName("apellido")[0].value===""){
        alert("Ingrese el apellido");
        return false;
    } 
    if(document.getElementsByName("correo")[0].value===""){
        alert("Ingrese el correo");
        return false;
    }
    return true;  
    }
    render() {

        return (
            <form className="ui form">
                <div className="fields">
                    <div className="four wide field">
                        <label>Nombre</label>
                        <input type="text" name="nombre" placeholder="Nombre" 
                        onChange={this.handleChange}
                        value={this.state.form.nombre}></input>
                    </div>
                    <div className="four wide field">
                        <label>Apellido</label>
                        <input type="text" name="apellido" placeholder="Apellido"
                        onChange={this.handleChange}
                         value={this.state.form.apellido}></input>
                    </div>
                    <div className="four wide field">
                        <label>Correo</label>
                        <input type="email" name="correo" placeholder="ejemplo@gmail.com"
                         onChange={this.handleChange}
                         value={this.state.form.correo}></input>
                    </div>
                    <div className="four wide field">
                        <button className={this.state.btnClass}
                        onClick={this.onFormSubmit}
                        >{this.state.btnName}</button>
                    </div>
                </div>
            </form>
        );
    }
}
export default MyForm;