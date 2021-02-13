import React, { Component } from "react";
import axios from "axios";


interface Cliente{
  idCliente:number
  nome:string
  cognome:string
  telefono:string
}


export default class Index extends Component {
  state = {
    title: "",
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/JavaBiblioteca/api")
      .then((response) => {
        this.setState({ title: response.data.map((cliente:Cliente)=>{
          return <div>Telefono{cliente.idCliente}: {cliente.telefono}</div>;
        }) });
      });
  }
  
  render() {
    return <div>{this.state.title}</div>;
  }
}
