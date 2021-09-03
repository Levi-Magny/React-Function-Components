import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function DadosUsuario({aoEnviar}){
    return(
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar();
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
            />
            <TextField
                type="password"
                label="Senha"
                variant="outlined"
                required
                id="senha"
                margin="normal"
                fullWidth
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