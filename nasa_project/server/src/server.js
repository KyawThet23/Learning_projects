const http = require('http');
const app = require('./app.js')
const { loadPlanetsData } = require('./models/planets.model.js')
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const MONGO_URL = 'mongodb+srv://elwe:XmJXUqOSnaxg6bkJ@nasa.acpj58o.mongodb.net/nasa?retryWrites=true&w=majority&appName=NASA';

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function startServer(){
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
  });
}

startServer();