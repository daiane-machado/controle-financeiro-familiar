// Passar a opção de conexão
import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
    host: string;
  }
  
  getConnectionOptions().then(options => {
    const newOptions = options as IOptions;
    newOptions.host = 'database'; // o nome dado ao service do banco de dados
    createConnection({
      ...options,
    });
  });


