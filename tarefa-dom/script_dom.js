    let contador = 0;
    let notas = [];

    function enviar_nota() {
        let input = document.querySelector("#nota");
        let nota_inserida = input.value.trim().replace(",", ".");

        if (nota_inserida === '') {
            alert("Por favor, insira uma nota.");
            return;
        }

        let nota = parseFloat(nota_inserida);

        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert("A nota digitada é inválida, por favor, insira uma nota válida.");
            input.value ='';
            return;

        }

        contador++;
        notas.push(nota);

        let escopo = document.createElement("div");
        let texto = document.createElement("p");
        texto.innerText = `A nota ${contador} é ${nota.toFixed(2)}`;
        escopo.append(texto);

        let secao = document.querySelector("#notas-adicionadas");
        secao.append(escopo);

        input.value = ''; 
    }

    function calcular_media() {
        if (notas.length === 0) {
            alert("Por favor, insira uma nota.");
            return;
        }

        let soma = notas.reduce((total, valor) => total + valor, 0); /*pesquisei pra fazer esse reduce, tenho dificuldade com arrow function*/
        let media = soma / notas.length;

        document.querySelector("#media").innerText = `A média é: ${media.toFixed(2)}`;
    }

    let botao_adicionar = document.querySelector("#botao-adicionar");
    botao_adicionar.addEventListener("click", enviar_nota);

    let botao_calcular = document.querySelector("#botao-calcular");
    botao_calcular.addEventListener("click", calcular_media);