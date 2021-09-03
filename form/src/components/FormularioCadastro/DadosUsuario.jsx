import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

function DadosUsuario(){
    return(
        <form>
            <TextField
                type="email"
                label="email"
                variant="outlined"
                id="email"
                margin="normal"
                fullWidth
            />
            <TextField
                type="password"
                label="Senha"
                variant="outlined"
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