# Simulação da Lei dos Grandes Números em C#

## Descrição

Este projeto é uma aplicação de console em C# que demonstra, de forma prática, a **Lei dos Grandes Números**.

A simulação consiste em lançar uma moeda virtual repetidamente e acompanhar a proporção de resultados (caras e coroas) ao longo do tempo. Conforme o número de tentativas aumenta, a proporção observada converge para o valor esperado teórico (50%).

---

## Objetivo

Demonstrar empiricamente que:

> À medida que o número de experimentos aumenta, a média dos resultados observados tende a se aproximar do valor esperado.

---

## Conceito Teórico

Considere uma variável aleatória ( X ) tal que:

* ( X = 1 ) para "cara"
* ( X = 0 ) para "coroa"

O valor esperado é:

[
E[X] = 0.5
]

A média amostral é definida por:

[
\bar{X}*n = \frac{1}{n} \sum*{i=1}^{n} X_i
]

A Lei dos Grandes Números estabelece que:

[
\bar{X}_n \to 0.5 \quad \text{quando } n \to \infty
]

---

## Funcionalidades

* Entrada dinâmica do número de tentativas
* Simulação de lançamentos de moeda
* Contagem acumulada de:

  * Caras
  * Coroas
* Cálculo da proporção de caras ao longo do processo
* Exibição progressiva dos resultados
* Opção de repetir a simulação sem encerrar a aplicação
* Validação de entrada do usuário

---

## Como executar

### Pré-requisitos

* .NET SDK instalado (recomendado .NET 6 ou superior)

### Passos

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acessar o diretório
cd seu-repositorio

# Executar o projeto
dotnet run
```

---

## Exemplo de execução

```
Digite o número de tentativas: 1000

Simulação iniciada...

Tentativa: 1 | Caras: 1 | Coroas: 0 | % Caras: 100.00%
Tentativa: 2 | Caras: 1 | Coroas: 1 | % Caras: 50.00%
...
Tentativa: 1000 | Caras: 503 | Coroas: 497 | % Caras: 50.30%

--- Resultado Final ---
Total de tentativas: 1000
Caras: 503
Coroas: 497
Proporção final de caras: 50.3000%

Deseja executar novamente? (S/N):
```

---

## Estrutura do código

O fluxo da aplicação segue os seguintes passos:

1. Leitura da entrada do usuário
2. Inicialização dos contadores
3. Execução da simulação com geração de números aleatórios
4. Atualização da média acumulada
5. Exibição de resultados intermediários
6. Exibição do resultado final
7. Controle de repetição via loop

---

## Limitações

* A simulação assume uma moeda justa (probabilidade de 50%)
* Não há persistência de dados
* A visualização é limitada ao console (sem gráficos)

---

## Possíveis melhorias

* Exportação dos resultados para CSV
* Geração de gráfico de convergência
* Execução de múltiplas simulações (Monte Carlo)
* Interface gráfica (desktop ou web)
* Separação em camadas (domínio, aplicação, apresentação)

---

## Licença

Este projeto pode ser utilizado para fins educacionais e de estudo. Ajuste a licença conforme necessário para seu repositório.
