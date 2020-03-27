const app = require('./app');

const porta = process.env.PORT || 3333;

console.log(porta);
app.listen(porta);