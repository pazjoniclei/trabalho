var notas = [];
var media_turma; //media do alunos
var media_semestre = 6;
var alunos_acima_media = 0; //quantidade alunos acima da media
var percentual_ap; //percentual de aprovados
var percentual_rp; //percentual de nao aprovados
var satisfacao = [0,0,0,0,0,0];

function initAlunos() {
    for (i = 0; i < 6; i++) {
        let nota = Math.floor(Math.random()*11);
        let n_satisfacao = Math.floor(Math.random()*5);
        notas.push(nota);    
        let s;
        console.log("n_satisfacao: "+n_satisfacao)
        if (n_satisfacao == 0) {
            satisfacao[0] += 1; //muito_ruim++
        } else if (n_satisfacao == 1) {
            satisfacao[1] += 1 //ruim++;
        } else if (n_satisfacao == 2) {
            satisfacao[2] += 1 //regular++;
        } else if (n_satisfacao == 3) {
            satisfacao[3] += 1 //bom++;
        } else {
            satisfacao[4] += 1 //muito_bom++;
        }

        if (nota >= media_semestre) {
            alunos_acima_media++;
        }
    }  
    media_turma = (parseInt(notas[0])+parseInt(notas[1])+parseInt(notas[2])+parseInt(notas[3])+parseInt(notas[4])) / 6;
    media_turma = media_turma.toFixed(2);
    percentual_ap = (alunos_acima_media/6) * 100;
    percentual_ap = percentual_ap.toFixed(2);
    percentual_rp = 100 - percentual_ap;
    percentual_rp = percentual_rp.toFixed(2);

    console.log("notas: "+ notas);
    console.log("media_turma: "+ media_turma);
    console.log("qtd alunos_acima_media: "+ alunos_acima_media);
    console.log("percentual_ap: "+ percentual_ap+"%");
    console.log("percentual_rp: "+ percentual_rp+"%");
    console.log("satisfacao:" + satisfacao);

    grafico_satisfacao(satisfacao);
    grafico_media_alunos(media_turma);
    grafico_percentual_aprovacao(percentual_ap, percentual_rp);
}

function grafico_satisfacao(satisfacao) {
    //gera o grafico de satisfacao
    var ctx = document.getElementById('gr_satisfacao');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Muito ruim', 'Ruim', 'Regular','Bom' , 'Muito Bom'],
            datasets: [{
                label: 'Níveis de satisfação',
                data: satisfacao,
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

function grafico_media_alunos(media_alunos) {
    //gera o grafico 2
    var ctx = document.getElementById('gr_media_alunos');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Média da Turma', 'Média da Escola'],
            datasets: [{
                label: 'Média da classe',
                data: [media_alunos,6],
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

function grafico_percentual_aprovacao(ap, rp) {
    //gera o grafico 3
    var ctx = document.getElementById('gr_percentual_aprovacao');
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['Reprovados', 'Aprovados'],
            datasets: [{
                label: 'Percentual de Aprovação',
                data: [rp, ap],
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