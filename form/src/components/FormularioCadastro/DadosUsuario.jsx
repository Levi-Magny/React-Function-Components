import React, { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro);
    const [erro, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar()) {
                    aoEnviar({ email, senha });
                }
            }}
        >
            <TextField
                error={!erro.email.valido}
                helperText={erro.email.texto}
                onBlur={validarCampos}
                type="email"
                name="email"
                label="email"
                variant="outlined"
                id="email"
                required
                margin="normal"
                fullWidth
                value={email}
                onChange={event => {
                    setEmail(event.target.value);
                }}
            />
            <TextField
                error={!erro.senha.valido}
                helperText={erro.senha.texto}
                onBlur={validarCampos}
                type="password"
                label="Senha"
                name="senha"
                variant="outlined"
                required
                id="senha"
                margin="normal"
                fullWidth
                value={senha}
                onChange={event => {
                    setSenha(event.target.value);
                }}
            />
            <Button
                type="submit"
                color="primary"
                variant="contained"
            >Próximo</Button>
        </form>
    );
}

export default DadosUsuario;