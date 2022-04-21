const express = require("express");
const res = require("express/lib/response");
const app = express();
const mongo = require("mongodb");
const mongoose = require("mongoose");
const ProdutoModel = require("./produtoModel.js");
const path = require('path');
const port = 3000;

const DbString = "mongodb://127.0.0.1:27017";

app.get("/listar", () => {
    res.sendFile(path.join(__dirname + "/static/x.html"));
})

app.get("/cadastrar", () => {
    res.sendFile(path.join(__dirname + "/static/x.html"));
})

app.get("/atualizar", () => {
    res.sendFile(path.join(__dirname + "/static/x.html"));
})

mongoose.connect(DbString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

);app.get("/v1/estoque", async (req, res) => {
    const foods = await ProdutoModel.find({});

  try {
    res.send(foods);
  } catch (error) {
    res.status(500).send(error);
  }
})

app.post("/v1/estoque", async (req, res) => {
    const Produto = new ProdutoModel(request.body);

    try {
      await food.save();
      res.send(food);
    } catch (error) {
      res.status(500).send(error);
    }    
})

app.put("/v1/estoque", async (req, res) => {
    try {
        await ProdutoModel.findByIdAndUpdate(request.params.id, request.body);
        await ProdutoModel.save();
        res.send(food);
      } catch (error) {
        res.status(500).send(error);
      }
})

app.delete("/v1/estoque/:id", async (req, res) => {
    try {
        const food = await ProdutoModel.findByIdAndDelete(request.params.id);
    
        if (!food) res.status(404).send("No item found");
        res.status(200).send();
      } catch (error) {
        res.status(500).send(error);
      }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})