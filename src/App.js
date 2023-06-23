import React from 'react';

import supabase from './supabase';

import "./App.css"
import Listagem from "./Componentes/Listagem"
import Cadastro from './Componentes/Cadastro';


function App() {

	const [ usuarios, alteraUsuarios ] = React.useState( [] );

	function buscaTodos(){
		supabase.from("usuarios").select()
		.then ( response => {
			console.log("Conexão bem sucedida!");
			console.log( response.data );
			alteraUsuarios( response.data );
		} )
		.catch( response => {
			console.log("Deu erro na conexão");
			console.log( response )
		} )
	}

	React.useEffect( ()=> {
		buscaTodos();
	}, [] )

  return (
      <div className="container">

		<div className="d-flex justify-content-around">

			<Listagem usuarios={usuarios} alteraUsuarios={alteraUsuarios}  />
			<Cadastro usuarios={usuarios} alteraUsuarios={alteraUsuarios} />

		</div> 
		
      </div>
  );
}

export default App;