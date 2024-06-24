// condição ? true : false simplifica o if e else

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'usuário vip' : 'usuário normal';
console.log(nivelUsuario);

// outra opção
const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

// if (pontuacaoUsuario >= 1000) {
//     console.log('usuário vip');
// } else {
//     console.log('usuário normal');
// }




