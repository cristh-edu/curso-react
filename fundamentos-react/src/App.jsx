import "./App.css"
import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'
export default _ => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="Mega" color="#415a77">
                <Mega qtd={5} />
            </Card>
            <Card titulo="Contador" color="#415a77">
                <Contador numeroInicial={10} />
            </Card>
            <Card titulo="Componente Controlado(Input)" color="#415a77">
                <Input />
            </Card>
            <Card titulo="Comunicação Indireta" color="#15616d">
                <IndiretaPai />
            </Card>
            <Card titulo="Comunicação Direta" color="#0d3b66">
                <DiretaPai />
            </Card>
            <Card titulo="Par ou Impar" color="#78290f">
                <ParOuImpar numero={20} />
                <UsuarioInfo usuario={{ nome: 'Fernando' }} />
                <UsuarioInfo usuario={{}} />
                <UsuarioInfo />
            </Card>
            <Card titulo="Tabela de Produtos" color="#087e8b">
                <TabelaProdutos />
            </Card>

            <Card titulo="Repetição" color="#5d2e46">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="Componente com Filhos" color="#16425b">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="Desafio Aleatório" color="#084c61">
                <Aleatorio min={1} max={60}></Aleatorio>
            </Card>

            <Card titulo="Com parâmetro">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3} />
            </Card>

            <Card titulo="Primeiro">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
)