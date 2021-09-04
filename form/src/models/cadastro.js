function validarCPF(tmpcpf) {
    if (tmpcpf.length !== 11) {
        return { valido: false, texto: "CPF deve ter 11 dígitos" };
    } else {
        return { valido: true, texto: "" };
    }
}

function validarSenha(tmpsenha) {
    if (tmpsenha.length < 4 || tmpsenha.length > 72) {
        return { valido: false, texto: "Senha deve ter de 4 a 72 dígitos" };
    } else {
        return { valido: true, texto: "" };
    }
}

function validarInputs(tmpValue) {
    return (tmpValue.length === 0) ? { valido: false, texto: "Preencha este campo!" } : { valido: true, texto: "" };
}

export { validarCPF, validarSenha, validarInputs };