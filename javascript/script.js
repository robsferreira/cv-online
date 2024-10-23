// Obter o ano atual
const currentYear = new Date().getFullYear();
// seleciona o elemento do rodapé
const footer = document.querySelector('footer p');
// atualliza o conteúdo do rodapé com o ano atual
footer.innerHTML = `&copy; ${currentYear} Robson Ferreira. Todos os direitos reservados.`;