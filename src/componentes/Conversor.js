import React, { Component } from "react";
import './Conversor.css';

class Conversor extends Component {
    constructor(props){
        super(props)
        this.state = {
            MoedaA_valor: "",
            MoedaB_valor: 0
        }
        this.converter = this.converter.bind(this);
    }
    converter(){
        let de_para = `${this.props.MoedaA}-${this.props.MoedaB}`;
        let url = `https://economia.awesomeapi.com.br/last/${de_para}`;
        let raw = "";

   

        fetch(url).then(response =>{
            return response.json() 
        } )
        .then(json => {
                let de_para_ = `${this.props.MoedaA}${this.props.MoedaB}`
                let cotacao = json[de_para_].ask;
                console.log(cotacao)
                let MoedaB_valor = parseFloat(this.state.MoedaA_valor * cotacao).toFixed(2)
                this.setState({MoedaB_valor: MoedaB_valor})
            })
        .catch(error => console.log('error', error));
    }
    render(){
        return(
            <div className="Conversor">
                <h2> {this.props.MoedaA} para {this.props.MoedaB}</h2>
                <input type="text" onChange={(event) => {this.setState( {MoedaA_valor: event.target.value})}}></input>
                <input type="submit" value="Converter" onClick={this.converter}></input>
                <p className="ValorCovertido">{this.state.MoedaB_valor}</p>
            </div>
        )
    }
    
}

export default Conversor;