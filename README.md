<h1 align="center"> Currency Converter </h1>

<p align="center"> Essa aplicação exibe a conversão das moedas Dólar Canadense, Peso Argentino e Libra Esterlina para Real Brasileiro de acordo com a cotação cambial. É possível, também, visualizar a taxa de variação por porcentagem. Os valores são atualizados automáticamente a cada 3 minutos.
</p></br>
<p align="center">
Angular: 17.1.2 | Node: 20.11.0 | NPM: 9.4.0
</p>
</br>
</br>
<h2 align="center"> Como rodar a aplicação </h2> 

### Clone o repositório:
No terminal, ese o comando `git clone https://github.com/nilocypriano/currency-converter`

### Instale as dependências:
Na pasta raiz do projeto, use o comando `npm install`

### Execute a aplicação:
Use o comando `ng serve`
</br></br>
<h2 align="center"> Composição da aplicação</h2>
</br>

## API

Utiliza-se o QuotationService para realizar o método GET na API https://economia.awesomeapi.com.br/last/CAD-BRL,ARS-BRL,GBP-BRL
</br>
Para mais informações sobre a API, acesse: https://docs.awesomeapi.com.br/api-de-moedas


## Pages

### CurrencyConverter

Página exibida logo ao rodar aplicação. Essa página é responsável por receber e distribuir os dados referentes a cotação recebidos da API.</br></br>
![image](https://github.com/nilocypriano/currency-converter/assets/62026241/dc88a4c6-637f-4498-ab22-b3e497914c6d)
</br>
## Components

### Header
A aplicação conta com um header componentizado disponível para ser utilizado globalmente. Tem o posicionamento fixo como comportamento padrão. A logo inserida é uma imagem no formato SVG. </br> </br>
![image](https://github.com/nilocypriano/currency-converter/assets/62026241/20165896-69a6-410f-a5a2-18820fb7402d)

### CurrencyCard
Agrupa os componentes CurrencyCardHeader, CurrencyCardContent e CurrencyCardFooter. Distribui dados de cotação de acordo com a necessidade dos componentes filhos.</br> </br>
![image](https://github.com/nilocypriano/currency-converter/assets/62026241/d78c7eaf-053f-4c1a-9ff0-857a4e5532c3)

### CurrencyCardHeader

Exibe o nome da moeda a ser convertida. Para formatação, utiliza-se do pipe CurrencyNamePipe. </br> </br>
![image](https://github.com/nilocypriano/currency-converter/assets/62026241/4170df23-43b6-4fc5-839b-cc2f1ee79d04)

### CurrencyCardContent

Exibe o valor da moeda do contexto convertido em Real Brasileiro. A cor da fonte muda de acordo com o valor. A mudança é realizada através da diretiva CurrencyContent, que contém o input 
fontColor com o qual é feito um Hostbinding. </br> </br>
![image](https://github.com/nilocypriano/currency-converter/assets/62026241/2db2fd3b-42e2-45e9-a149-02f8fca0488d)

##### Vermelho (#DD4B4B)
Valores menores ou igual a R$1,00
##### Azul (#3684CB)
Valores maiores que R$1,00 e menores ou igual a R$5,00
##### Verde (#3C7649)
Valores maiores que R$5,00

### CurrencyCardFooter
Exibe detalhes da cotação. Atualmente, como comportamento padrão, exibe o valor de variação em porcentagem e a hora de atualização.  </br></br>
![image](https://github.com/nilocypriano/currency-converter/assets/62026241/b7428901-a3a1-4743-bdb1-07f93d99b8ab)


### GenericError
Exibido quando ocorre algum erro na aplicação. Possui template padrão com mensagem e botão pré-definidas e personalizáveis através de inputs e outputs. É possível inserir um template customizado através da projeção de conteúdo. </br></br>
![image](https://github.com/nilocypriano/currency-converter/assets/62026241/fd1669b4-dab0-4e9f-962e-0e6dcd9fc803) 
  
