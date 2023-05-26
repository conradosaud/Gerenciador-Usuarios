import React from 'react';

function Cadastro( { usuarios, alteraUsuarios } ){

    const [ nome, alteraNome ] = React.useState("");
	const [ status, alteraStatus ] = React.useState(true);

    function salvar( e ){
		e.preventDefault()
		
		const usuario = {
			nome: nome,
			status: status
		}

		// O operador ... se chama spread ou "despejar"
		alteraUsuarios( [ ...usuarios, usuario ] )

	}

    return(
        <div className="caixa"> 
            <h2> Cadastro </h2>
            
            <form onSubmit={ (e)=> salvar(e) } >
                <div class="mb-3 form-floating">
                    <input onChange={ e => alteraNome(e.target.value) } class="form-control" id="txtNome" placeholder="Nome" />
                    <label for="txtNome" class="form-label">Nome</label>
                </div>
                <div class="mb-3 form-check">
                    <input checked={status} onChange={ e => alteraStatus( e.target.checked ) } type="checkbox" class="form-check-input" id="cboxStatus"/>
                    <label class="form-check-label" for="cboxStatus">Ativo</label>
                </div>
                <button type="submit" class="btn btn-primary">Salvar</button>
            </form>

        </div>
    )
}

export default Cadastro;