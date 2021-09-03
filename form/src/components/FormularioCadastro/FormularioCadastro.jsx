import React, {useState} from 'react';
import DadosDeEntrega from './DadosDeEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({aoEnviar, validacaoCPF}){
    return(
        <>
            <DadosPessoais aoEnviar={aoEnviar} validacaoCPF={validacaoCPF}/>
            <DadosUsuario/>
            <DadosDeEntrega/>
        </>
    );
}

export default FormularioCadastro;