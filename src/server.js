const app = require('./app');

const porta = process.env.PORT || 3333;

console.log("iniciando os serviços na porta", porta);
app.listen(porta);