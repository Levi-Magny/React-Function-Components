import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function DadosUsuario({aoEnviar}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    return(
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({email, senha});
            }}
        >
            <TextField
                type="email"
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
                type="password"
                label="Senha"
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