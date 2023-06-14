var alunos = [];
function gettext() {
    var nome = document.querySelector("#nome");
    if ((nome === null || nome === void 0 ? void 0 : nome.value) !== "" && nome) {
        alunos.push(nome.value);
        console.log(alunos);
        nome.value = "";
    }
}
