import { Typography } from '@material-ui/core';
import React, {useState} from 'react';
import DadosDeEntrega from './DadosDeEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({aoEnviar, validacaoCPF}){
    const [etapaAtual, setEtapaAtual] = useState(0);

    const formularios = [
        <DadosUsuario aoEnviar={mudarForm}/>,
        <DadosPessoais aoEnviar={mudarForm} validacaoCPF={validacaoCPF}/>,
        <DadosDeEntrega/>
    ];

    /**
     * 
     * @param {Integer} direction If 0, we go to the previous form. Else, we go to the next.
     */
    function mudarForm(direction){
        let tempEtapa = (direction === 0) ? etapaAtual-1 : etapaAtual+1;
        setEtapaAtual(tempEtapa);
    }

    return(
        <>{formularios[etapaAtual]}</>
    );
}

export default FormularioCadastro;