import React from 'react';
import { validarInputs } from '../models/cadastro';

const ValidacoesCadastro = React.createContext({
    cpf: validarInputs,
    senha: validarInputs,
    name: validarInputs,
    cep: validarInputs,
    email: validarInputs,
    cidade: validarInputs
});

export default ValidacoesCadastro;