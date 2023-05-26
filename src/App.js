import React from 'react';

import "./App.css"
import Listagem from "./Componentes/Listagem"
import Cadastro from './Componentes/Cadastro';

function App() {

	/*
		max-height: 400px; overflow: auto;
		-------------- ATIVIDADE --------------
		- Transferir o cadastro para um componente
			separado (Cadastro.js)

		- Adicionar e-mail no objeto de usuários e
			também no cadastro

		- Não deixar o usuário cadastrar um nome
			vazio, nem menor que 3 caracteres

		- Não deixar o usuário cadastrar um email
			que não tenha arroba

		* Use a biblioteca React-toastify para
			exibir as mensagens de erro

	*/
	
	

	

	// Como Funciona os objetos em JavaScript
	const usuario = {
		// chave: valor
		nome: "Conrado",
		idade: 15,
		status: true,
		endereco: {
			rua: "Rua x",
			numero: 139,
			complemneto:"ap 20"
		},
		vacinas_covid19:["Pfizer", "Pfizer", "Pfizer", "J&J"]
	}
	//console.log(usuario)
	//console.log(usuario.endereco.rua)
	//conselo.log( Objects.key(usuario))

	//Como usar um array com objetos dentro
	const usuarios_padrao = [
		{nome: "Gabriel", status: true},
		{nome: "Grazi", status: true},
		{nome: "Luana", status: true},
		{nome: "Conrado", status:false}
	]

	const [ usuarios, alteraUsuarios ] = React.useState( usuarios_padrao );

  return (
      <div className="container">


		<div className="d-flex justify-content-around">

			<Listagem usuarios={usuarios}  />

			<Cadastro usuarios={usuarios} alteraUsuarios={alteraUsuarios} />

		</div>
		

      </div>
  );
}

export default App;