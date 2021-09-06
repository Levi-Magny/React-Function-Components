import React, { useContext, useState } from 'react';

import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const validacoes = useContext(ValidacoesCadastro);
    const [erro, validarCampos] = useErros(validacoes);

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
            }}
        >
            <TextField
                id="nome"
                name="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={nome}
                onChange={(event) => {
                    let tempName = event.target.value;

                    setNome(tempName);
                }}
            />

            <TextField
                id="sobrenome"
                name="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={sobrenome}
                onChange={(event) => {
                    let tempName = event.target.value;
                    setSobrenome(tempName);
                }}
            />

            <TextField
                error={!erro.cpf.valido}
                helperText={erro.cpf.texto}
                onBlur={validarCampos}
                name="cpf"
                id="cpf"
                label="CPF"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={cpf}
                onChange={(event) => {
                    let tempcpf = event.target.value;
                    if (tempcpf.length >= 11) {
                        tempcpf = tempcpf.substr(0, 11);
                    }

                    // regex que verifica se os caracteres sao numericos.
                    if (/^\d+$/.test(tempcpf) || tempcpf === "") {
                        setCPF(tempcpf);
                    }
                }}

            />

            <FormControlLabel
                control={
                    <Switch
                        color="primary"
                        checked={promocoes}
                        onChange={evento => {
                            setPromocoes(evento.target.checked);
                        }}
                    />
                }
                label="Promoções"
            />

            <FormControlLabel
                control={
                    <Switch
                        color="primary"
                        checked={novidades}
                        onClick={evento => {
                            setNovidades(evento.target.checked);
                        }}
                    />
                }
                label="Novidades"
            />

            <Button
                type="button"
                variant="contained"
                color="secondary"
                onClick={() => {
                    aoEnviar(0)
                }}
            >
                Anterior
            </Button>

            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                Próximo
            </Button>
        </form>
    )
}

export default DadosPessoais;