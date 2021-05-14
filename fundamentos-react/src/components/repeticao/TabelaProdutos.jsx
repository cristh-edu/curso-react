import './TabelaProdutos.css'
import React from 'react'
import produtos from '../../data/produtos'

export default props => {
    const produtosLi = produtos.map((produto, i) => {
        return (
            <tr className={i%2 === 0 ? 'Par' : 'Impar'} key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco.toFixed(2).replace('.',',')}</td>
            </tr>
        )
    })
    return (
        <table className="TabelaProdutos">
            <thead>
                <th>Id</th>
                <th>Nome</th>
                <th>Preço</th>
            </thead>
            <tbody>
                {produtosLi}
            </tbody>
        </table>
    )
}