import React, { Component } from "react";
import './Conversor.css';

class Conversor extends Component {

    constructor(props){
        super(props)
        this.state = {
            MoedaA_valor: "",
            MoedaB_valor: 0,
            cotacao: 0
        }
        this.converter = this.converter.bind(this);
       
    }
    
    converter(){
        let de_para = `${this.props.MoedaA}-${this.props.MoedaB}`;
        let url = `https://economia.awesomeapi.com.br/last/${de_para}`;
      
        
   

        fetch(url).then(response =>{
            return response.json() 
        } )
        .then(json => {
                let de_para_ = `${this.props.MoedaA}${this.props.MoedaB}`
                this.setState({cotacao: json[de_para_].ask})
             
                let MoedaB_valor = parseFloat(this.state.MoedaA_valor * this.state.cotacao).toFixed(2)
                this.setState({MoedaB_valor: MoedaB_valor})
            })
        .catch(error => console.log('error', error));

    }
    render(){
        return(
            <div className="container-conversor">
                <div className="Conversor">
                    <p className="Moeda"> 1 {this.props.MoedaA} igual a  </p>
                    <h1 className="Title-moeda">{parseFloat(this.state.cotacao).toFixed(2)} {this.props.MoedaB}</h1>
                </div>
                <div className="Conversor-input">
                    <div className="MoedaA">
                        <input className="number-moedaa"></input>
                        <select className="select-moedaa">
                            <option value="USD"> Dólar americano</option>
                            <option value="BRL"> Real</option>          
                            <option value="EUR"> Euro </option>           
                        </select>
                    </div>
                    <div className="MoedaB">
                        <input className="number-moedaa"></input>
                        <select className="select-moedaa">
                            <option value="USD"> Dólar americano</option>
                            <option value="BRL"> Real</option>          
                            <option value="EUR"> Euro </option>           
                        </select>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Conversor;