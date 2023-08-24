function TestaCPF(strCPF) {
  var Soma = 0;
  var Resto;
  var verificacao = false; // Corrigido o nome da variável para "verificacao"
  //tirando os pontos e o traço e atribuindo a uma variavel
  var strCPFClear = deMaskCPF(strCPF);
  console.log(strCPFClear);

  for (i = 1; i <= 9; i++) {
    Soma = Soma + parseInt(strCPFClear.substring(i - 1, i)) * (11 - i);
  }
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) {
    Resto = 0;
  }

  if (Resto !== parseInt(strCPFClear.substring(9, 10))) {
    verificacao = false;
  }

  Soma = 0;

  for (i = 1; i <= 10; i++) {
    Soma = Soma + parseInt(strCPFClear.substring(i - 1, i)) * (12 - i); // Corrigido o comentário para "de 10 até 2"
  }

  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) {
    Resto = 0;
  }

  if (Resto !== parseInt(strCPFClear.substring(10, 11))) {
    verificacao = false;
  }

  // Movido o retorno verdadeiro para dentro do último bloco de verificação
  if (Resto === parseInt(strCPFClear.substring(10, 11))) {
    verificacao = true;
  }

  return verificacao;
}


//inicio do formulario
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const cpfInput = document.querySelector("#cpf");
const submitButton = document.querySelector("#send");
const errorMessage = document.querySelector(".msg");
const resposta = document.querySelector(".respostaUsuario");

//BOTAO PARA
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  let nameValue = nameInput.value;
  let emailValue = emailInput.value;
  let cpfValue = cpfInput.value;


  var resultado = TestaCPF(cpfValue);
  console.log(resultado);

  if (resultado === true) {
    errorMessage.textContent = "Cadastrado com Sucesso!"
    errorMessage.classList = "acerto";

    //tempo na tela
    setTimeout(() => {
      errorMessage.textContent = "";
      errorMessage.classList = "";
    }, 100000);

  } else {
    errorMessage.textContent = "CPF Inválido! Por favor, insira um cpf válido!.";
    errorMessage.classList = "error"; //busca na classe error

    //tempo para a faixa error ficar em tela
    setTimeout(() => {
      errorMessage.textContent = "";
      errorMessage.classList = "";
      //deixando vazio o cpf
      cpfInput.value = "";
    }, 120000);
    return
  }

  ///tratamento de erro
  if (nameValue === "" || emailValue === "" || cpfValue === "") {
    errorMessage.textContent = "Por favor, preencha todos os campos!";
    errorMessage.classList = "error"; //busca na classe error

    //tempo para a faixa error ficar em tela
    setTimeout(() => {
      errorMessage.textContent = "";
      errorMessage.classList = "";
    }, 10000);
    return; //sai da função
  }

  //limpa todos os campos no final
  nameInput.value = "";
  emailInput.value = "";
  cpfInput.value = "";


  // if(TestaCPF(cpfValue)) 
});

//colocando . e - conforme as especificações
function maskCPF() {
  let strCPF = cpfInput.value;
  if (strCPF.length == 3 || strCPF.length == 7) cpfInput.value += ".";
  if (strCPF.length == 11) cpfInput.value += "-";
}
//retirando tudo que n seja apenas digitos
function deMaskCPF(cpf) {
  return cpf.replace(/\D/g, '');
}


cpfInput.addEventListener("input", function () {
  maskCPF();
});





    // nav bar
const navbarr = document.getElementById('navbar');
let scrolled = false;
window.onscroll = () => {
  if (window.scrollY > 100) {
    if (!scrolled) {
      navbarr.classList.add('scrolled');
      scrolled = true;
    }
  } else if (scrolled) {
    navbarr.classList.remove('scrolled');
    scrolled = false;
  }
}



const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  // Alterar o tema
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'escuro' ? 'claro' : 'escuro';
  document.documentElement.setAttribute('data-theme', newTheme);


  // Trocar a imagem do tema
  otherImgTheme();

});

//funcao que deixa padrao o tema claro primeiro
function setDefaultTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (!currentTheme) {
    document.documentElement.setAttribute('data-theme', 'claro'); // 'claro' é o tema padrão, você pode alterar para 'escuro' se preferir
    const imgThemeElement = document.getElementById("img-theme");
    const dayTheme = document.getElementById("img-theme-day");
    imgThemeElement.src = dayTheme.src;
  }
}

function otherImgTheme() {
  const imgTheme = document.documentElement.getAttribute('theme-img');
  const imgThemeElement = document.getElementById("img-theme");
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const nightTheme = document.getElementById("img-theme-night");
  const dayTheme = document.getElementById("img-theme-day");

  if (currentTheme === "escuro") {
    imgThemeElement.src = nightTheme.src;
  }
  if (currentTheme === "claro") {
    imgThemeElement.src = dayTheme.src;
  }

}


setDefaultTheme();

