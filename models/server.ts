import express, { Express } from "express";
import { ConnectDB } from "../database/config";
import gastoroutes from "../routes/gastos";

export class Server {
  app: Express;

  constructor() {
    this.app = express();

    this.DatabaseConnection();

    this.middlewares();

    this.routes();
  }

  async DatabaseConnection(): Promise<void> {
    await ConnectDB();
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes(): void {
    this.app.use("/gastos", gastoroutes);
  }
  listen(): void {
    this.app.listen(8080, () => {
      console.log("Server running en puerto 8080");
    });
  }
}
