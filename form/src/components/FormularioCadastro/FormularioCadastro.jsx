import React from 'react';
import Button from '@material-ui/core/Button';
import { FormControlLabel, Switch } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

function FormularioCadastro() {
    return (
        <form>
                <TextField id="nome" label="Nome" variant="outlined" margin="normal" fullWidth/>

                <TextField id="sobrenome" label="Sobrenome" variant="outlined" margin="normal" fullWidth/>

                <TextField id="cpf" label="CPF" variant="outlined" margin="normal" fullWidth/>

                <FormControlLabel control={<Switch defaultChecked color="primary"/>} label="Promoções"/>

                <FormControlLabel control={<Switch defaultChecked color="primary"/>} label="Novidades"/>

                <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro;