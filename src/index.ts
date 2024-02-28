import express, {Express, Request, Response} from "express";
import { getAllMessages } from "./models/message";
import { initializeDatabase, sequelize } from "./database/db";

const port:Number = 3000;
const app:Express = express();

app.get("/",(req:Request,res:Response)=>{
    res.send("Express + TypeScript Server");
});

app.get("/api/messages",(req:Request,res:Response)=>{
    res.json(getAllMessages());
});

app.listen(port, async () => {
    await initializeDatabase();
    await sequelize.sync();
   
    console.log(`[server]: Server is running at http://localhost:${port}`);
  }); 