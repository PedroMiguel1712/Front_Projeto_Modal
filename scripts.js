const modal = document.getElementById('modal');
const btnCadastro = document.getElementById('btnCadastro');
const btnfechar = document.getElementById('btnfechar');
const formulario = document.getElementById('formulario');

btnCadastro.addEventListener('click', () => {
  modal.style.display = 'flex';
});

btnfechar.addEventListener('click', () => {
  modal.style.display = 'none';
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  // Salvando os dados no Local Storage
  localStorage.setItem('name', document.getElementById('name').value);
  localStorage.setItem('email', document.getElementById('email').value);
  localStorage.setItem('tel', document.getElementById('tel').value);
  localStorage.setItem('cpf', document.getElementById('cpf').value);

  alert('Seu cadastro foi realizado!');
  window.location.href = 'profile.html';

});


