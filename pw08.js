var regNome = new RegExp("[A-z ]{6,100}");
var regSenha = new RegExp("^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,25}$");
var regTel = new RegExp("[0-9]{4,5}-[0-9]{4}");

function validar(){
    if(!regNome.test(nome.value)){
        alert("Informe um nome completo.");
        nome.focus();
        return false;
    }
    if(!regSenha.test(senha.value)){
        alert("Informe uma senha forte.");  
        senha.focus();
        return false;
    }
    
    if(!regTel.test(nome.value)){
        alert("Informe telefone valido");
        telefone.focus();
        return false;
    }
    alert("Cadastro valido.");
}