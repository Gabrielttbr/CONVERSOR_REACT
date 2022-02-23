import React, { Component } from "react";
import './Conversor.css';

class Conversor extends Component {

    constructor(props){
        super(props)
        this.state = {
            MoedaA_valor: "",
            MoedaB_valor: "",
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
                    <p className="Moeda"> 1 {this.state.MoedaA_valor} igual a  </p>
                    <h1 className="Title-moeda">{parseFloat(this.state.cotacao).toFixed(2)} {this.state.MoedaB_valor}</h1>
                </div>
                <div className="Conversor-input">
                    <div className="MoedaA">
                        <input className="number-moedaa"></input>
                        <select className="select-moedaa" onChange={ValueSelect => {
                            this.setState({MoedaA_valor: ValueSelect.target.value })
                         }}>
                            <option value="AFN">Afghani do Afeganistão</option>   
                            <option value="MGA">Ariary Madagascarense</option>   
                            <option value="THB">Baht Tailandês</option>   
                            <option value="PAB">Balboa Panamenho</option>   
                            <option value="ETB">Birr Etíope</option>   
                            <option value="BTC">Bitcoin</option>   
                            <option value="BOB">Boliviano</option>   
                            <option value="VEF">Bolívar Venezuelano</option>   
                            <option value="XBR">Brent Spot</option>   
                            <option value="GHS">Cedi Ganês</option>   
                            <option value="SVC">Colon de El Salvador</option>   
                            <option value="CRC">Colón Costarriquenho</option>   
                            <option value="CZK">Coroa Checa</option>   
                            <option value="DKK">Coroa Dinamarquesa</option>   
                            <option value="ISK">Coroa Islandesa</option>   
                            <option value="NOK">Coroa Norueguesa</option>   
                            <option value="SEK">Coroa Sueca</option>   
                            <option value="NIO">Córdoba Nicaraguense</option>   
                            <option value="SDR">DSE</option>   
                            <option value="GMD">Dalasi da Gâmbia</option>   
                            <option value="MKD">Denar Macedônio</option>   
                            <option value="DZD">Dinar Argelino</option>   
                            <option value="IQD">Dinar Iraquiano</option>   
                            <option value="JOD">Dinar Jordaniano</option>   
                            <option value="KWD">Dinar Kuwaitiano</option>   
                            <option value="LYD">Dinar Líbio</option>
                            <option value="RSD">Dinar Sérvio</option>
                            <option value="TND">Dinar Tunisiano</option>
                            <option value="BHD">Dinar do Bahrein</option>
                            <option value="MAD">Dirham Marroquino</option>
                            <option value="AED">Dirham dos Emirados</option>
                            <option value="STD">Dobra São Tomé/Príncipe</option>
                            <option value="DOGE">Dogecoin</option>
                            <option value="VND">Dong Vietnamita</option>
                            <option value="AMD">Dram Armênio</option>
                            <option value="USD">Dólar Americano</option>
                            <option value="AUD">Dólar Australiano</option>
                            <option value="CAD">Dólar Canadense</option>
                            <option value="JMD">Dólar Jamaicano</option>
                            <option value="NAD">Dólar Namíbio</option>
                            <option value="NZD">Dólar Neozelandês</option>
                            <option value="TWD">Dólar Taiuanês</option>
                            <option value="ZWL">Dólar Zimbabuense</option>
                            <option value="BSD">Dólar das Bahamas</option>
                            <option value="KYD">Dólar das Ilhas Cayman</option>
                            <option value="BBD">Dólar das Bahamas</option>
                            <option value="BZD">Dólar de Belize</option>
                            <option value="BND">Dólar de Brunei</option>
                            <option value="SGD">Dólar de Cingapura</option>
                            <option value="FJD">Dólar de Fiji</option>
                            <option value="HKD">Dólar de Hong Kong</option>
                            <option value="TTD">Dólar de Trinidad</option>
                            <option value="XCD">Dólar do Caribe Oriental</option>
                            <option value="CVE">Escudo cabo-verdiano</option>
                            <option value="ETH">Ethereum</option>
                            <option value="EUR">Euro</option>
                            <option value="HUF">Florim Húngaro</option>
                            <option value="BIF">Franco Burundinense</option>
                            <option value="XAF">Franco CFA Central</option>
                            <option value="XOF">Franco CFA Ocidental</option>
                            <option value="XPF">Franco CFP</option>             
                            <option value="KMF">Franco Comorense</option>
                            <option value="RWF">Franco Ruandês</option>
                            <option value="CHF">CHF</option>
                            <option value="CHFRTS">Franco Suíço</option>
                            <option value="GNF">Franco de Guiné</option>
                            <option value="DJF">Franco do Djubouti</option>
                            <option value="HTG">Gourde Haitiano</option>
                            <option value="PYG">Guarani Paraguaio</option>
                            <option value="ANG">Guilder das Antilhas</option>
                            <option value="UAH">Hryvinia Ucraniana</option>
                            <option value="JPY">Iene Japonês</option>
                            <option value="PGK">Kina Papua-Nova Guiné</option>
                            <option value="LAK">Kip Laosiano</option>
                            <option value="HRK">Kuna Croata</option>
                            <option value="MWK">Kwacha Malauiana</option>
                            <option value="ZMK">Kwacha Zambiana</option>
                            <option value="AOA">Kwanza Angolano</option>
                            <option value="MMK">Kyat de Mianmar</option>
                            <option value="GEL">Lari Georgiano</option>
                            <option value="ALL">Lek Albanês</option>
                            <option value="HNL">Lempira Hondurenha</option>
                            <option value="MDL">Leu Moldavo</option>
                            <option value="RON">Leu Romeno</option>
                            <option value="BGN">Lev Búlgaro</option>
                            <option value="EGP">Libra Egípcia</option>
                            <option value="GBP">Libra Esterlina</option>
                            <option value="LBP">Libra Libanesa</option>
                            <option value="SDG">Libra Sudanesa</option>
                            <option value="SYP">Libra Síria</option>
                            <option value="SZL">Lilangeni Suazilandês</option>
                            <option value="LTC">Litecoin</option>
                            <option value="LSL">Loti do Lesoto</option>
                            <option value="AZN">Manat Azeri</option>
                            <option value="BAM">Marco Conversível</option>
                            <option value="MZN">Metical de Moçambique</option>
                            <option value="MNT">Mongolian Tugrik</option>
                            <option value="NGNPARALLEL">Naira Nigeriana</option>
                            <option value="NGN">Naira Nigeriana</option>
                            <option value="NGNI">Naira Nigeriana</option>
                            <option value="TRY">Nova Lira Turca</option>
                            <option value="ILS">Novo Shekel Israelense</option>
                            <option value="MRO">Ouguiya Mauritana</option>
                            <option value="MOP">Pataca de Macau</option>
                            <option value="ARS">Peso Argentino</option>
                            <option value="CLP">Peso Chileno</option>
                            <option value="COP">Peso Colombiano</option>
                            <option value="CUP">Peso Cubano</option>
                            <option value="DOP">Peso Dominicano</option>
                            <option value="PHP">Peso Filipino</option>
                            <option value="MXN">Peso Mexicano</option>
                            <option value="UYU">Peso Uruguaio</option>
                            <option value="BWP">Pula de Botswana</option>
                            <option value="GTQ">Quetzal Guatemalteco</option>
                            <option value="ZAR">Rand Sul-Africano</option>
                            <option value="BRL">Real Brasileiro</option>
                            <option value="BRLT">Real Brasileiro Turismo</option>
                            <option value="QAR">Rial Catarense</option>
                            <option value="IRR">Rial Iraniano</option>
                            <option value="OMR">Rial Omanense</option>
                            <option value="KHR">Riel Cambojano</option>
                            <option value="MYR">Ringgit Malaio</option>
                            <option value="YER">Riyal Iemenita</option>
                            <option value="SAR">Riyal Saudita</option>
                            <option value="BYN">Rublo Bielorrusso</option>
                            <option value="RUBTOM">Rublo Russo</option>
                            <option value="RUB">Rublo Russo</option>
                            <option value="MVR">Rufiyaa Maldiva</option>
                            <option value="IDR">Rupia Indonésia</option>
                            <option value="INR">Rúpia Indiana</option>
                            <option value="MUR">Rúpia Mauriciana</option>
                            <option value="NPR">Rúpia Nepalesa</option>
                            <option value="PKR">Rúpia Paquistanesa</option>
                            <option value="LKR">Rúpia de Sri Lanka</option>
                            <option value="SCR">Rúpias de Seicheles</option>
                            <option value="KES">Shilling Queniano</option>
                            <option value="SOS">Shilling Somaliano</option>
                            <option value="TZS">Shilling Tanzaniano</option>
                            <option value="UGX">Shilling Ugandê</option>
                            <option value="PEN">Sol do Peru</option>
                            <option value="KGS">Som Quirguistanês</option>
                            <option value="UZS">Som Uzbequistanês</option>
                            <option value="TJS">Somoni do Tajiquistão</option>
                            <option value="TMT">TMT</option>
                            <option value="BDT">Taka de Bangladesh</option>
                            <option value="KZT">Tengue Cazaquistanês</option>
                            <option value="VUV">Vatu de Vanuatu</option>
                            <option value="KRWKRW">Won Sul-Coreano</option>
                            <option value="XAGG">XPrata</option>
                            <option value="XRP">XRP</option>
                            <option value="CNY">Yuan Chinês</option>
                            <option value="CNH">Yuan chinês offshore</option>
                            <option value="PLN">Zlóti Polonês</option>
                        </select>
                    </div>
                    <div className="MoedaB">
                        <input className="number-moedaa"></input>
                        <select className="select-moedaa" onChange={ValueMoedaB => this.setState( {MoedaB_valor: ValueMoedaB.target.value})}>
                        <option value="AFN">Afghani do Afeganistão</option>   
                            <option value="MGA">Ariary Madagascarense</option>   
                            <option value="THB">Baht Tailandês</option>   
                            <option value="PAB">Balboa Panamenho</option>   
                            <option value="ETB">Birr Etíope</option>   
                            <option value="BTC">Bitcoin</option>   
                            <option value="BOB">Boliviano</option>   
                            <option value="VEF">Bolívar Venezuelano</option>   
                            <option value="XBR">Brent Spot</option>   
                            <option value="GHS">Cedi Ganês</option>   
                            <option value="SVC">Colon de El Salvador</option>   
                            <option value="CRC">Colón Costarriquenho</option>   
                            <option value="CZK">Coroa Checa</option>   
                            <option value="DKK">Coroa Dinamarquesa</option>   
                            <option value="ISK">Coroa Islandesa</option>   
                            <option value="NOK">Coroa Norueguesa</option>   
                            <option value="SEK">Coroa Sueca</option>   
                            <option value="NIO">Córdoba Nicaraguense</option>   
                            <option value="SDR">DSE</option>   
                            <option value="GMD">Dalasi da Gâmbia</option>   
                            <option value="MKD">Denar Macedônio</option>   
                            <option value="DZD">Dinar Argelino</option>   
                            <option value="IQD">Dinar Iraquiano</option>   
                            <option value="JOD">Dinar Jordaniano</option>   
                            <option value="KWD">Dinar Kuwaitiano</option>   
                            <option value="LYD">Dinar Líbio</option>
                            <option value="RSD">Dinar Sérvio</option>
                            <option value="TND">Dinar Tunisiano</option>
                            <option value="BHD">Dinar do Bahrein</option>
                            <option value="MAD">Dirham Marroquino</option>
                            <option value="AED">Dirham dos Emirados</option>
                            <option value="STD">Dobra São Tomé/Príncipe</option>
                            <option value="DOGE">Dogecoin</option>
                            <option value="VND">Dong Vietnamita</option>
                            <option value="AMD">Dram Armênio</option>
                            <option value="USD">Dólar Americano</option>
                            <option value="AUD">Dólar Australiano</option>
                            <option value="CAD">Dólar Canadense</option>
                            <option value="JMD">Dólar Jamaicano</option>
                            <option value="NAD">Dólar Namíbio</option>
                            <option value="NZD">Dólar Neozelandês</option>
                            <option value="TWD">Dólar Taiuanês</option>
                            <option value="ZWL">Dólar Zimbabuense</option>
                            <option value="BSD">Dólar das Bahamas</option>
                            <option value="KYD">Dólar das Ilhas Cayman</option>
                            <option value="BBD">Dólar das Bahamas</option>
                            <option value="BZD">Dólar de Belize</option>
                            <option value="BND">Dólar de Brunei</option>
                            <option value="SGD">Dólar de Cingapura</option>
                            <option value="FJD">Dólar de Fiji</option>
                            <option value="HKD">Dólar de Hong Kong</option>
                            <option value="TTD">Dólar de Trinidad</option>
                            <option value="XCD">Dólar do Caribe Oriental</option>
                            <option value="CVE">Escudo cabo-verdiano</option>
                            <option value="ETH">Ethereum</option>
                            <option value="EUR">Euro</option>
                            <option value="HUF">Florim Húngaro</option>
                            <option value="BIF">Franco Burundinense</option>
                            <option value="XAF">Franco CFA Central</option>
                            <option value="XOF">Franco CFA Ocidental</option>
                            <option value="XPF">Franco CFP</option>             
                            <option value="KMF">Franco Comorense</option>
                            <option value="RWF">Franco Ruandês</option>
                            <option value="CHF">CHF</option>
                            <option value="CHFRTS">Franco Suíço</option>
                            <option value="GNF">Franco de Guiné</option>
                            <option value="DJF">Franco do Djubouti</option>
                            <option value="HTG">Gourde Haitiano</option>
                            <option value="PYG">Guarani Paraguaio</option>
                            <option value="ANG">Guilder das Antilhas</option>
                            <option value="UAH">Hryvinia Ucraniana</option>
                            <option value="JPY">Iene Japonês</option>
                            <option value="PGK">Kina Papua-Nova Guiné</option>
                            <option value="LAK">Kip Laosiano</option>
                            <option value="HRK">Kuna Croata</option>
                            <option value="MWK">Kwacha Malauiana</option>
                            <option value="ZMK">Kwacha Zambiana</option>
                            <option value="AOA">Kwanza Angolano</option>
                            <option value="MMK">Kyat de Mianmar</option>
                            <option value="GEL">Lari Georgiano</option>
                            <option value="ALL">Lek Albanês</option>
                            <option value="HNL">Lempira Hondurenha</option>
                            <option value="MDL">Leu Moldavo</option>
                            <option value="RON">Leu Romeno</option>
                            <option value="BGN">Lev Búlgaro</option>
                            <option value="EGP">Libra Egípcia</option>
                            <option value="GBP">Libra Esterlina</option>
                            <option value="LBP">Libra Libanesa</option>
                            <option value="SDG">Libra Sudanesa</option>
                            <option value="SYP">Libra Síria</option>
                            <option value="SZL">Lilangeni Suazilandês</option>
                            <option value="LTC">Litecoin</option>
                            <option value="LSL">Loti do Lesoto</option>
                            <option value="AZN">Manat Azeri</option>
                            <option value="BAM">Marco Conversível</option>
                            <option value="MZN">Metical de Moçambique</option>
                            <option value="MNT">Mongolian Tugrik</option>
                            <option value="NGNPARALLEL">Naira Nigeriana</option>
                            <option value="NGN">Naira Nigeriana</option>
                            <option value="NGNI">Naira Nigeriana</option>
                            <option value="TRY">Nova Lira Turca</option>
                            <option value="ILS">Novo Shekel Israelense</option>
                            <option value="MRO">Ouguiya Mauritana</option>
                            <option value="MOP">Pataca de Macau</option>
                            <option value="ARS">Peso Argentino</option>
                            <option value="CLP">Peso Chileno</option>
                            <option value="COP">Peso Colombiano</option>
                            <option value="CUP">Peso Cubano</option>
                            <option value="DOP">Peso Dominicano</option>
                            <option value="PHP">Peso Filipino</option>
                            <option value="MXN">Peso Mexicano</option>
                            <option value="UYU">Peso Uruguaio</option>
                            <option value="BWP">Pula de Botswana</option>
                            <option value="GTQ">Quetzal Guatemalteco</option>
                            <option value="ZAR">Rand Sul-Africano</option>
                            <option value="BRL">Real Brasileiro</option>
                            <option value="BRLT">Real Brasileiro Turismo</option>
                            <option value="QAR">Rial Catarense</option>
                            <option value="IRR">Rial Iraniano</option>
                            <option value="OMR">Rial Omanense</option>
                            <option value="KHR">Riel Cambojano</option>
                            <option value="MYR">Ringgit Malaio</option>
                            <option value="YER">Riyal Iemenita</option>
                            <option value="SAR">Riyal Saudita</option>
                            <option value="BYN">Rublo Bielorrusso</option>
                            <option value="RUBTOM">Rublo Russo</option>
                            <option value="RUB">Rublo Russo</option>
                            <option value="MVR">Rufiyaa Maldiva</option>
                            <option value="IDR">Rupia Indonésia</option>
                            <option value="INR">Rúpia Indiana</option>
                            <option value="MUR">Rúpia Mauriciana</option>
                            <option value="NPR">Rúpia Nepalesa</option>
                            <option value="PKR">Rúpia Paquistanesa</option>
                            <option value="LKR">Rúpia de Sri Lanka</option>
                            <option value="SCR">Rúpias de Seicheles</option>
                            <option value="KES">Shilling Queniano</option>
                            <option value="SOS">Shilling Somaliano</option>
                            <option value="TZS">Shilling Tanzaniano</option>
                            <option value="UGX">Shilling Ugandê</option>
                            <option value="PEN">Sol do Peru</option>
                            <option value="KGS">Som Quirguistanês</option>
                            <option value="UZS">Som Uzbequistanês</option>
                            <option value="TJS">Somoni do Tajiquistão</option>
                            <option value="TMT">TMT</option>
                            <option value="BDT">Taka de Bangladesh</option>
                            <option value="KZT">Tengue Cazaquistanês</option>
                            <option value="VUV">Vatu de Vanuatu</option>
                            <option value="KRWKRW">Won Sul-Coreano</option>
                            <option value="XAGG">XPrata</option>
                            <option value="XRP">XRP</option>
                            <option value="CNY">Yuan Chinês</option>
                            <option value="CNH">Yuan chinês offshore</option>
                            <option value="PLN">Zlóti Polonês</option>          
                        </select>
                    </div>
                </div>
                
            </div>
        )
    }
    
}

export default Conversor;