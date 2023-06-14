let alunos:string[]=[]

function gettext() {
    let nome: HTMLInputElement| null = document.querySelector("#nome")
    if (nome?.value !== "" && nome) {
        alunos.push(nome.value)
        console.log(alunos);
        nome.value="";       
    }
}