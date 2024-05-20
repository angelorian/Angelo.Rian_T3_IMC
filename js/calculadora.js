const CalcularImc = () => {
  const pesoElement = document.getElementById("peso");
  const alturaElement = document.getElementById("altura");
  const idadeElement = document.querySelector('input[name="idade"]:checked');
  const generoElement = document.querySelector('input[name="genero"]:checked');

  if (!pesoElement || !alturaElement || !idadeElement || !generoElement) {
    alert("Alguns elementos não foram encontrados!");
    return;
  }

  const peso = parseFloat(pesoElement.value);
  const altura = parseFloat(alturaElement.value.replace(",", "."));
  const idade = idadeElement.value;
  const genero = generoElement.value;
  const imc = peso / (altura * altura);

  console.log("O valor do IMC é:", imc); // Adicionando o print do IMC

  if (!idade || isNaN(altura) || isNaN(peso) || !genero) {
    alert("Há campos vazios!");
  } else {
    const { figura, mensagem } = RecomandacoesImc(idade, genero, imc);

    const saidasDiv = document.querySelector('.container-main-calculadora-principal-saidas');
    saidasDiv.innerHTML = `
      <h3>Seu IMC é: ${imc.toFixed(2)}</h3> <!-- Adicionando o valor do IMC -->
      <img src="../IMG/${figura}" alt="Figura">
      <h3>Recomendações: </h3>
      <p>${mensagem}</p>
    `;
  }
};

const RecomandacoesImc = (idade, genero, imc) => {
  let figura = "";
  let mensagem = "";

  if (idade === "crianca") {
    if (genero === "masculino") {
      if (imc < 16.1) {
        figura = "../img/abaixo_do_peso_crianca.png";
        mensagem = "Abaixo do peso para meninos crianças";
      } else if (imc >= 16.1 && imc < 18.8) {
        figura = "../img/peso_normal_crianca.png";
        mensagem = "Peso normal para meninos crianças";
      } else if (imc >= 18.8 && imc < 21.4) {
        figura = "../img/sobrepeso_crianca.png";
        mensagem = "Acima do peso para meninos crianças";
      } else {
        figura = "../img/obesidade_crianca.png";
        mensagem = "Obesidade para meninos crianças";
      }
    }
    else if (genero === "feminino") {
      if (imc < 16.3) {
        figura = "../img/abaixo_do_peso_crianca.png";
        mensagem = "Abaixo do peso para meninas crianças";
      } else if (imc >= 16.3 && imc < 19.1) {
        figura = "../img/peso_normal_crianca.png";
        mensagem = "Peso normal para meninas crianças";
      } else if (imc >= 19.2 && imc < 21.7) {
        figura = "../img/sobrepeso_crianca.png";
        mensagem = "Acima do peso para meninas crianças";
      } else {
        figura = "../img/obesidade_crianca.png";
        mensagem = "Obesidade para meninas crianças";
      }
    }
  }
  else if (idade === "adolescente") {
    if (genero === "masculino") {
      if (imc < 18.5) {
        figura = "../img/abaixo_do_peso_crianca.png";
        mensagem = "Abaixo do peso para meninos adolescentes";
      } else if (imc >= 18.5 && imc < 21.9) {
        figura = "../img/peso_normal_crianca.png";
        mensagem = "Peso normal para meninos adolescentes";
      } else if (imc >= 21.9 && imc < 25.9) {
        figura = "../img/sobrepeso_crianca.png";
        mensagem = "Acima do peso para meninos adolescentes";
      } else {
        figura = "../img/obesidade_crianca.png";
        mensagem = "Obesidade para meninos adolescentes";
      }
    }
    else if (genero === "feminino") {
      if (imc < 18.9) {
        figura = "../img/abaixo_do_peso_crianca.png";
        mensagem = "Abaixo do peso para meninas adolescentes";
      } else if (imc >= 18.9 && imc < 23) {
        figura = "../img/peso_normal_crianca.png";
        mensagem = "Peso normal para meninas adolescentes";
      } else if (imc >= 23 && imc < 27.7) {
        figura = "../img/sobrepeso_crianca.png";
        mensagem = "Acima do peso para meninas adolescentes";
      } else {
        figura = "../img/obesidade_crianca.png";
        mensagem = "Obesidade para meninas adolescentes";
      }
    }
  }
  else if (idade === "adulto") {
    if (genero === "masculino") {
      if (imc < 18.5) {
        figura = "../img/abaixo_do_peso_masculino.png";
        mensagem = "Abaixo do peso para homens adultos";
      } else if (imc >= 18.5 && imc < 24.9) {
        figura = "../img/peso_normal_masculino.png";
        mensagem = "Peso normal para homens adultos";
      } else if (imc >= 24.9 && imc < 29.9) {
        figura = "../img/sobrepeso_masculino.png";
        mensagem = "Acima do peso para homens adultos";
      } else if (imc >= 29.9 && imc < 34.9) {
        figura = "../img/obesidade_grau_I_masculino.png";
        mensagem = "Obesidade Grau I para homens adultos";
      } else if (imc >= 34.9 && imc < 39.9) {
        figura = "../img/obesidade_grau_II_masculina.png";
        mensagem = "Obesidade Grau II para homens adultos";
      } else {
        figura = "../img/obesidade_grau_III_masculina.png";
        mensagem = "Obesidade Grau III para homens adultos";
      }
    } else if (genero === "feminino") {
      if (imc < 18.5) {
        figura = "../img/abaixo_do_peso_feminino.png";
        mensagem = "Abaixo do peso para mulheres adultas";
      } else if (imc >= 18.5 && imc < 24.9) {
        figura = "../img/peso_normal_feminino.png";
        mensagem = "Peso normal para mulheres adultas";
      } else if (imc >= 24.9 && imc < 29.9) {
        figura = "../img/sobrepeso_feminino.png";
        mensagem = "Acima do peso para mulheres adultas";
      } else if (imc >= 29.9 && imc < 34.9) {
        figura = "../img/obesidade_grau_I_feminina.png";
        mensagem = "Obesidade Grau I para mulheres adultas";
      } else if (imc >= 34.9 && imc < 39.9) {
        figura = "../img/obesidade_grau_II_feminina.png";
        mensagem = "Obesidade Grau II para mulheres adultas";
      } else {
        figura = "../img/obesidade_grau_III_feminina.png";
        mensagem = "Obesidade Grau III para mulheres adultas";
      }
    }
  } else if (idade === "idoso") {
    if (genero === "masculino") {
      if (imc < 22) {
        figura = "../img/abaixo_do_peso_masculino.png";
        mensagem = "Abaixo do peso para homens idosos";
      } else if (imc >= 22 && imc < 27) {
        figura = "../img/peso_normal_masculino.png";
        mensagem = "Peso normal para homens idosos";
      } else if (imc >= 27 && imc < 30) {
        figura = "../img/sobrepeso_masculino.png";
        mensagem = "Acima do peso para homens idosos";
      } else {
        figura = "../img/obesidade_grau_I_masculino.png";
        mensagem = "Obesidade grau I para homens idosos";
      }
    } else if (genero === "feminino") {
      if (imc < 22) {
        figura = "../img/abaixo_do_peso_feminino.png";
        mensagem = "Abaixo do peso para mulheres idosas";
      } else if (imc >= 22 && imc < 27) {
        figura = "../img/peso_normal_feminino.png";
        mensagem = "Peso normal para mulheres idosas";
      } else if (imc >= 27 && imc < 30) {
        figura = "../img/sobrepeso_feminino.png";
        mensagem = "Acima do peso para mulheres idosas";
      } else {
        figura = "../img/obesidade_grau_I_feminina.png";
        mensagem = "Obesidade grau I para mulheres idosas";
      }
    }
  }
  return { figura, mensagem };
};

const formatarInputAltura = (input) => {
  let valor = input.value.replace(/[^\d,]/g, "");

  if (valor.includes(",")) {
    valor = valor.substring(0, 1) + valor.substring(1).replace(",", "");
    valor = valor.substring(0, 1) + "," + valor.substring(1);
  } else {
    if (valor.length > 1) {
      valor = valor.substring(0, 1) + "," + valor.substring(1);
    }
  }

  input.value = valor;
};
