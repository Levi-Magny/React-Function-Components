import { Typography } from '@material-ui/core';
import React, {useState} from 'react';
import DadosDeEntrega from './DadosDeEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({aoEnviar, validacaoCPF}){
    const [etapaAtual, setEtapaAtual] = useState(0);

    function proximo(){
        setEtapaAtual(etapaAtual+1);
    }

    function formularioAtual(etapa){
        switch(etapa){
            case 0:
                return <DadosUsuario aoEnviar={proximo}/>;
            case 1:
                return <DadosPessoais aoEnviar={proximo} validacaoCPF={validacaoCPF}/>;
            case 2:
                return <DadosDeEntrega/>;
            default:
                return <Typography>Erro ao selecionar formulário</Typography>

        }
    }

    return(
        <>{formularioAtual(etapaAtual)}</>
    );
}

export default FormularioCadastro;