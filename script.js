const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();  /*: A cada execução da função, a data e a hora atuais são obtidas criando um novo objeto Date chamado dateToday*/
    let hr = dateToday.getHours();/*obtem a hora atual*/
    let min = dateToday.getMinutes();/* msm coisa do de cima e do abaixo só q com minutos*/
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr; /*adiciona um zero a esquerda se a hr for menor que 10*/

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr; 
    minutos.textContent = min;
    segundos.textContent = s;
 /*: Essas linhas atualizam o conteúdo dos elementos HTML identificados anteriormente com os
  valores das variáveis hr, min e s, respectivamente. Isso atualiza a exibição do relógio digital
   na página web com os valores da hora atual.*/
})
