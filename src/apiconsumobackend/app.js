// Para executar a aplicacao execute o seguinte comando
// node --env-file=.env app.js

require('dotenv').config();
const express = require('express');
const axios = require('axios');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');

registerInstrumentations({
    instrumentations: [
      getNodeAutoInstrumentations({
        // load custom configuration for http instrumentation
        '@opentelemetry/instrumentation-http': {
        },
      }),
    ],
  });
  

const PORT = parseInt(process.env.PORT || '8080');
const app = express();

app.get('/mensagem-geral', (req, res) => {
  console.log('');
  console.log('Gerada saudacao em /mensagem-geral...');
  res.send("Olá, mundo! Esta é uma mensagem de teste. Use quando puder OpenTelemetry!");
});

app.get('/mensagem-consumobackend', async (req, res) => {
  try {
    console.log('');
    console.log('******** Gerada saudacao em /mensagem-consumobackend... ********');

    const response = await axios.get(process.env.URL_API_TESTES);
    console.log('');
    console.log('Payload retornado pela API de Testes:');
    console.log(response.data);

    res.send(`Ola!!! A resposta foi: ${response.data}`);
  } catch (error) {
    console.error('Erro ao chamar a API de Testes:', error.message);
    res.status(500).send('Erro ao chamar a API de Testes.');
  }
});

app.listen(PORT, () => {
  console.log(`Esperando requisicoes em http://localhost:${PORT}`);
});