import { useState } from 'react';

function useErros(validacoes) {
    const estadoInicial = criarEstadoInicial(validacoes);
    const [erro, setErro] = useState(estadoInicial);
    function validarCampos(event) {
        const { name, value } = event.target;
        const novoEstado = { ...erro } // fragmenta o array com o spread operator
        novoEstado[name] = validacoes[name](value); // atualiza ou cria o erro
        setErro(novoEstado); // seta o novo erro
    }

    function possoEnviar() {
        for (let campo in erro) {
            if (!erro[campo].valido) {
                return false;
            }
        }
        return true;
    }

    return [erro, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes){
    const estadoInicial = {};
    for(let campo in validacoes){
        estadoInicial[campo] = { valido: true, texto: "" }
    }
    return estadoInicial;
}

export default useErros;