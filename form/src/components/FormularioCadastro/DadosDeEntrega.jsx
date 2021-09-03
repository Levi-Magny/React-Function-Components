import React, { useState } from 'react';
import {TextField, Button} from '@material-ui/core'

function DadosDeEntrega(){
    return(
        <form>
            <TextField
                id="cep"
                type="number"
                label="CEP"
                variant="outlined"
                margin="normal"
                required
            />
            <TextField
                id="endereco"
                type="adress"
                label="Endereço"
                variant="outlined"
                margin="normal"
                fullWidth
                required
            />
            <TextField
                id="numero"
                type="number"
                label="Número"
                variant="outlined"
                margin="normal"
                required
            />
            <TextField
                id="estado"
                type="state"
                label="Estado"
                variant="outlined"
                margin="normal"
                required
            />
            <TextField
                id="cidade"
                type="city"
                label="Cidade"
                variant="outlined"
                margin="normal"
                required
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