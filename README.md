# Convert 💱

Conversor de moedas simples que converte valores em **Dólar Americano (USD)**, **Euro (EUR)** e **Libra Esterlina (GBP)** para **Reais (BRL)**.

Projeto desenvolvido com HTML, CSS e JavaScript puro (vanilla JS), sem dependências ou frameworks.

## ✨ Funcionalidades

- Conversão de USD, EUR e GBP para Real Brasileiro
- Exibição da cotação atual da moeda selecionada
- Validação de entrada, aceitando apenas valores numéricos
- Formatação automática dos valores no padrão brasileiro (R$ 0,00) via `Intl`/`toLocaleString`

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript (vanilla)

## 📁 Estrutura

```
convert/
└── convert-template/
    ├── img/            # Imagens e ícones (logo, background, SVGs)
    ├── index.html      # Estrutura da página
    ├── styles.css      # Estilos
    └── scripts.js      # Lógica de conversão
```

## 🚀 Como usar

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Abra o arquivo [convert-template/index.html](convert-template/index.html) no navegador.
3. Informe o valor, selecione a moeda e clique em **Converter em reais**.

> Não é necessário instalar dependências nem rodar servidor — basta abrir o HTML.

## 💵 Cotações

As cotações são definidas manualmente no arquivo [convert-template/scripts.js](convert-template/scripts.js) e precisam ser atualizadas conforme o câmbio do dia:

```js
const USD = 4.99
const EUR = 5.89
const GBP = 6.78
```

## 📄 Licença

Projeto de uso livre para fins educacionais.
