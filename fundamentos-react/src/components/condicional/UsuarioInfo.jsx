import React from 'react'
import If, { Else } from './if'
export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>
                <Else>
                    Seja bem vindo <strong>Usuário</strong>
                </Else>
            </If>
        </div>
    )
}