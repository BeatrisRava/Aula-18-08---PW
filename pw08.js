var regNome = new RegExp("[A-z ]{6,100}");
var regSenha = new RegExp("^(?=.*[A-Z])(?=.*[!#@$%&-+_(){}])(?=.*[0-9])(?=.*[a-z]).{6,25}$");
var regTel = new RegExp("[0-9]{4,5}-[0-9]{4}");
var regDeny = new RegExp("or 1=1|location.href|<script|lixo|antivac|terra plana");

 

function validar(){
    nome.classList.remove("erro");
    senha.classList.remove("erro");
    erros.innerHTML = "";
    var tudoOk = true;
    if(!regNome.test(nome.value)){
        erros.innerHTML = erros.innerHTML + 
            "Informe um nome completo !<br/>";
        nome.classList.add("erro");
        nome.focus();
        tudoOk = false;
    }
    if(!regSenha.test(senha.value)){
        erros.innerHTML = erros.innerHTML +  
            "Informe uma senha forte !<br/>";
        senha.classList.add("erro");
        senha.focus(); 
        tudoOk = false;      
    }
    if(!regTel.test(telefone.value)){
        erros.innerHTML = erros.innerHTML + 
            "Informe um telefone valido !<br/>";
        telefone.focus();
        tudoOk = false;
    }
    if(regDeny.test(msg.value)){
        msg.value = "Conteudo improprio !";
        tudoOk = false;
    }
    if(tudoOk) alert("tudo certo !");
}