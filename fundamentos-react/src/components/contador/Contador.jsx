import './Contador.css'
import React, { Component } from 'react'

class Contador extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         numero : this.props.numeroInicial
    //     }
    // }

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passo || 1,
    }

    // constructor(props) {
    //     super(props)
    //     this.inc = this.state.inc
    // }
    // inc() {
    //     this.setState({
    //         numero: this.state.numero + 1
    //     })
    // }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value
        })
    }

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="">Passo: </label>
                    <input type="number" id="passoInput" value={this.state.passo} onChange={this.setPasso}/>
                </div>
                <button onClick={this.inc} >+</button>
                <button onClick={this.dec} >-</button>
            </div>
        )
    }
}

export default Contador