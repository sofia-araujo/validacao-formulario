function validaFormulario(){
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    // Validação de campos vazios
    if(nome == ' ' || email == '' || senha == ''){
        alert("Error:. Por favor, preencha todos os campos vazios")
        return
    } 

    // Validação do campo de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(email)){
        alert("Digite um e-mail válido!")
        return
    }

    // Validação tamanho da senha
    if(senha.length > 8){
        alert("A senha não pode ter mais que 8 caracteres!")
        return
    }

    alert("O cadastro foi realizado com sucesso")
}