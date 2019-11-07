total_alunos = 10;

var aluno_0 = {
    id: 0,
    nivel_satisfacao: '',
    nota: 0,
}

var aluno_1 = {
    id: 1,
    nivel_satisfacao: '',
    nota: 0,
}

var aluno_3 = {
    id: 3,
    nivel_satisfacao: '',
    nota: 0,
}

var aluno_4 = {
    id: 4,
    nivel_satisfacao: '',
    nota: 0,
}

var aluno_5 = {
    id: 5,
    nivel_satisfacao: '',
    nota: 0,
}

var aluno_6 = {
    id: 6,
    nivel_satisfacao: '',
    nota: 0,
}

var nivel_satisfacao = ['muito ruim', 'ruim', 'bom', 'regular', 'muito bom'];

function initAlunos() {
    //array de alunos
        //id_aluno
        //nivel_satisfacao > muito ruim, ruim, bom, regular, muito bom
        //nota_1

    //inicia o aluno
    for (i = 0; i < total_alunos; i++) {
        //sorteia um numero entre 0 e 4 > posicao do array 'nivel_satisfacao'
        let n_satisfacao = Math.floor(Math.random() * 4);

        aluno = 'aluno_'+i;

        //atribuir o nivel_satisfacao
        aluno.nivel_satisfacao = nivel_satisfacao[n_satisfacao];

        //aluno.nota = Math.floor(Math.random() * 10);
    }


}

function geraGrafico() {
    grafico1();
    grafico2();
    grafico3();
}

function grafico1() {
    //gera o grafico 1
    var ctx = document.getElementById('grafico_1');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 2, 5, 7, 9, 12],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    //fim gera o grafico 1
}

function grafico2() {
    //gera o grafico 2
    var ctx = document.getElementById('grafico_2');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [1, 2, 3, 4, 5, 6],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    //fim gera o grafico 2
}

function grafico3() {
    //gera o grafico 3
    var ctx = document.getElementById('grafico_3');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [6, 5, 4, 3, 2, 1],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    //fim gera o grafico 3
}