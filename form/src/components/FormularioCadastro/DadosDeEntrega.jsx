import React, { useState } from 'react';
import {TextField, Button} from '@material-ui/core'

function DadosDeEntrega({aoEnviar}){
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    return(
        <form
        onSubmit={event => {
            event.preventDefault();
            aoEnviar({cep, endereco, numero, estado, cidade});
        }}
        >
            <TextField
                id="cep"
                type="number"
                label="CEP"
                variant="outlined"
                margin="normal"
                required
                value={cep}
                onChange={event => {
                    setCep(event.target.value)
                }}
            />
            <TextField
                id="endereco"
                type="adress"
                label="Endereço"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                value={endereco}
                onChange={event => {
                    setEndereco(event.target.value)
                }}
            />
            <TextField
                id="numero"
                type="number"
                label="Número"
                variant="outlined"
                margin="normal"
                required
                value={numero}
                onChange={event => {
                    setNumero(event.target.value)
                }}
            />
            <TextField
                id="estado"
                type="state"
                label="Estado"
                variant="outlined"
                margin="normal"
                required
                value={estado}
                onChange={event => {
                    setEstado(event.target.value)
                }}
            />
            <TextField
                id="cidade"
                type="city"
                label="Cidade"
                variant="outlined"
                margin="normal"
                required
                value={cidade}
                onChange={event => {
                    setCidade(event.target.value)
                }}
            />
            <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
            >Finalizar Cadastro
            </Button>
        </form>
    );
}

export default DadosDeEntrega;