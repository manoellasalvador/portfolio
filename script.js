document.getElementById('form-contato').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (nome === '') {
    alert('Por favor, preencha o nome.');
    return;
  }

  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, insira um e-mail válido.');
    return;
  }

  alert('Mensagem enviada com sucesso!');
});

document.getElementById('botao-enviar').addEventListener('click', function() {
  this.style.backgroundColor = '#27ae60';
  setTimeout(() => {
    this.style.backgroundColor = '#2980b9';
  }, 500);
});
