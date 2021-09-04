import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import DadosDeEntrega from './DadosDeEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({aoEnviar, validacaoCPF}){
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(()=>{
        if(etapaAtual === formularios.length - 1)
            aoEnviar(dadosColetados);
    })

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados}/>,
        <DadosPessoais aoEnviar={coletarDados} validacaoCPF={validacaoCPF}/>,
        <DadosDeEntrega aoEnviar={coletarDados}/>,
        <Typography>Obrigado pelo cadastro!</Typography>
    ];

    function coletarDados(dados){
        setDados({...dadosColetados, ...dados});
        proximo();
    }

    /**
     * 
     * @param {Int} direction If 0, we go to the previous form. Else, we go to the next.
     */
    function proximo(){
        setEtapaAtual(etapaAtual + 1);
    }

    return(
        <>
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Endereço</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formularios[etapaAtual]}
        </>
    );
}

export default FormularioCadastro;