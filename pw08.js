var regNome = new RegExp("[A-z ] {6,100}");

function validar(){
    if(!regNome.test(nome.value)){
        alert("Informe um nome completo.");
        nome.focus();
        return false;
    }
    alert("Nome valido.");
}