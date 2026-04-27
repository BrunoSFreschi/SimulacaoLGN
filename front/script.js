const ctx = document.getElementById('lgnChart').getContext('2d');
let lgnChart;

// Configuração inicial do gráfico
function initChart() {
    if (lgnChart) lgnChart.destroy();
    
    lgnChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: 'Média Acumulada',
                    data: [],
                    borderColor: '#3498db',
                    borderWidth: 2,
                    fill: false,
                    pointRadius: 0 // Remove pontos para melhorar performance
                },
                {
                    label: 'Valor Esperado (0.5)',
                    data: [],
                    borderColor: '#e74c3c',
                    borderDash: [5, 5],
                    fill: false,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { min: 0, max: 1 },
                x: { title: { display: true, text: 'Tentativas' } }
            },
            animation: false // Desativa animações nativas para ganho de performance em tempo real
        }
    });
}

async function runSimulation() {
    const trials = parseInt(document.getElementById('trialsInput').value);
    if (isNaN(trials) || trials <= 0) return alert("Insira um número válido.");

    initChart();
    document.getElementById('startButton').disabled = true;

    let sum = 0;
    const batchSize = trials > 1000 ? Math.floor(trials / 100) : 1; // Atualiza o gráfico em lotes para performance

    for (let i = 1; i <= trials; i++) {
        const result = Math.random() > 0.5 ? 1 : 0; // Simula Cara ou Coroa
        sum += result;
        const currentAverage = sum / i;

        // Adiciona dados à estrutura do gráfico
        lgnChart.data.labels.push(i);
        lgnChart.data.datasets[0].data.push(currentAverage);
        lgnChart.data.datasets[1].data.push(0.5);

        // Atualiza o gráfico apenas em intervalos para não travar o browser
        if (i % batchSize === 0 || i === trials) {
            lgnChart.update();
            // Pequena pausa para criar o efeito de "tempo real" visual
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }
    
    document.getElementById('startButton').disabled = false;
}

document.getElementById('startButton').addEventListener('click', runSimulation);
document.getElementById('resetButton').addEventListener('click', () => {
    location.reload(); // Forma simples de resetar tudo
});

// Inicializa o gráfico vazio ao carregar
initChart();