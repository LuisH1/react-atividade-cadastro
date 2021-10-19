import logo from '../logo.svg';
import React from "react";
import "./cadastro.css";

export default function Cadastro() {

    function mostrarMensagem(){
        alert("Cadastro realizado com sucesso.")
    }


    return(
        <div id='div-container'>
            <div id='div-esquerda'>
                <form id='form'>
                    <h2>Cadastro</h2>
                    <p>Preencha os dados para começar.</p>
                   <div>
                   <input type="text" name='nome' placeholder='Nome' />
                   </div>
                    <div>
                    <input type="text" name='sobrenome' placeholder='Sobrenome' />
                    </div>
                    <div>
                    <input type="text" name='email' placeholder='E-mail' />
                    </div>
                    <div>
                    <input type="password" name='senha' placeholder='Senha' />
                    </div>
                    <button id='botao' onClick={() => mostrarMensagem()}>Concluir cadastro</button>
                </form>
            </div>
            <div id='div-direita'>
            <img src={logo} className="Cadastro-logo" alt="logo" />
            <h2 id='titulo-imagem'>App React</h2>
            </div>
        </div>
    );
}