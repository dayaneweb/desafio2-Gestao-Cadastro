let clientForm = document.getElementById("clientForm");
let produtoForm = document.getElementById("produtoForm");
clientForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let tel = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;
    let endereco = document.getElementById("endereco").value;
    let dados = {
        nome,
        cpf,
        tel,
        email,
        endereco,
    };

    let valores = Object.values(dados);
    let body = document.getElementById("clients");
    let linha = document.createElement("tr");
    body.append(linha);

    valores.forEach(vl => {
        let td = document.createElement("td");
        linha.append(td);
        td.append(vl);
    });
    let clients = JSON.parse(localStorage.getItem("clients")) ?? [];
    clients.push(dados);

    let clientsConvert = JSON.stringify(clients);

    localStorage.setItem("clients", clientsConvert);

    alert("Cadastro realizado com sucesso");
    limparCamposClientes();
});
function validaCpf(elemento) {
    cpf = elemento.value;
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return alert("cpf invalido");

    // Elimina CPFs invalidos conhecidos    
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return alert("cpf invalido");
    // Valida 1o digito 
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return alert("cpf invalido");
    // Valida 2o digito 
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return alert("cpf invalido");
}

function limparCamposClientes()
{
      let nome = document.getElementById("nome").value = "";
      let cpf = document.getElementById("cpf").value = "";
      let tel = document.getElementById("telefone").value = "";
      let email = document.getElementById("email").value = "";
      let endereco = document.getElementById("endereco").value = "";
}

produtoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let codigo = document.getElementById("codigo").value;
    let nome = document.getElementById("nomeProduto").value;
    let qtd = document.getElementById("qtd").value;
    let valor = document.getElementById("valor").value;
    let cat = document.getElementById("categoria").value;


    let data = {
        codigo,
        nome,
        qtd,
        valor,
        cat,
    };
    let vl = Object.values(data);
    let body = document.getElementById("products");
    let tr = document.createElement("tr");
    body.append(tr);

    vl.forEach(valor => {
        let td = document.createElement("td");
        tr.append(td);
        td.append(valor);
    });
       let products = JSON.parse(localStorage.getItem("products")) ?? [];
       products.push(data);

       let productsConvert = JSON.stringify(products);

       localStorage.setItem("products", productsConvert);

    alert("Cadastro realizado com sucesso");
    clearProducts();
    
});


function clearProducts()
{
     let codigo = document.getElementById("codigo").value = "";
     let nome = document.getElementById("nomeProduto").value = "";
     let qtd = document.getElementById("qtd").value = "";
     let valor = document.getElementById("valor").value = "";
     let cat = document.getElementById("categoria").value = "";
}


