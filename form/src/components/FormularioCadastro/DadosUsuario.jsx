import React, { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [buttondisabled, setButtonDisabled] = useState(false);
    const [erro, setErro] = useState({ senha: { valido: true, texto: "" }, email: { valido: true, texto: "" } })

    const validacoes = useContext(ValidacoesCadastro);
    function validarCampos(event) {
        const { name, value } = event.target;
        const novoEstado = { ...erro } // fragmenta o array com o spread operator
        novoEstado[name] = validacoes[name](value); // atualiza ou cria o erro
        setButtonDisabled(!novoEstado[name].valido);
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
                disabled={buttondisabled}
            >Próximo</Button>
        </form>
    );
}

export default DadosUsuario;