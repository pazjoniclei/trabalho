gererNiveis = function(){
    let vetorNiveis = []
    let vetorValores = []


    let muitoBom = Math.floor(math.random()*100 + 1);
    vetorNiveis.push("Muito Bom");
    vetorValores.push(muitoBom);

    let Bom = Math.floor(math.random()*(100 - muitoBom) + 1);
    vetorNiveis.push(" Bom");
    vetorValores.push(bom);

    let regular = Math.floor(math.random()*(100 - muitoBom - Bom ));
    vetorNiveis.push(" Regular");
    vetorValores.push(regular);

    let ruim = Math.floor(math.random()*(100 - muitoBom - Bom ));
    vetorNiveis.push(" Ruim");
    vetorValores.push(ruim)

    let muitoRuim = 100 -  muitoBom - bom - regular - ruim + 1;
    vetorNiveis.push(" Muito Ruim")
    vetorValores.push(muitoRuim)

    return {vetorNiveis, vetorValores};



    }

      let avaliacaoGrafico1 = gererNiveis()
      console.log(avaliacaoGrafico1);


    var ctx = document.getElementById('grafico').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: avaliacaoGrafico1.vetorNiveis,
                labels: ['Muito bom', 'Bom', 'Regular','Ruim' , 'Muito Ruim'],
                datasets: [{
                    label: 'Satisfação dos Alunos',
                    //data: avaliacaoGrafico1.vetorValores,
                     data: [12, 12, 12, 12, 12, 12],
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
