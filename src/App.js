import React from 'react';

import "./App.css"
import Listagem from "./Componentes/Listagem"
import Cadastro from './Componentes/Cadastro';

function App() {

	/*

		-------------- ATIVIDADE --------------


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
	const [ editando, alteraEditando ] = React.useState(null);

  return (
      <div className="container">


		<div className="d-flex justify-content-around">

			<Listagem alteraEditando={alteraEditando} usuarios={usuarios} alteraUsuarios={alteraUsuarios}  />

			<Cadastro alteraEditando={alteraEditando} editando={editando} usuarios={usuarios} alteraUsuarios={alteraUsuarios} />

		</div> 
		

      </div>
  );
}

export default App;