const express = require("express");
const register = require("./auth/register");
const loginApi = require("./auth/login");
const deleteAccount = require("./auth/deleteAccount");
const addProduct = require("./product/addProduct");
const getproduct = require("./product/getProduct");
const searchProduct = require("./product/searchProduct");
const updateproduct = require("./product/updateProduct");
const deleteproduct = require("./product/deleteProduct");
const getproductData = require("./product/getproductData");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  console.log(req.body);
  let result = await register(req.body);
  res.send(result);
  // console.log(result);
});
app.post("/login", async (req, res) => {
  //console.log(req.body);
  let result = await loginApi(req.body);
  res.send(result);
});
app.delete("/deleteAccount/:_id", async (req, res) => {
  //console.log(req.params);
  let result = await deleteAccount(req.params);
  res.send(result);
});
app.post("/addproduct", async (req, res) => {
  //console.log(req.body);
  let result = await addProduct(req.body);
  res.send(result);
});
app.get("/searchproduct/:key", async (req, res) => {
  //console.log(req.body);
  let result = await searchProduct(req.params.key);
  res.send(result);
});
app.put("/updateproduct/:_id", async (req, res) => {
  //console.log(req.body);
  let result = await updateproduct(req.params, req.body);
  res.send(result);
});
app.delete("/deleteproduct/:_id", async (req, res) => {
  //console.log(req.body);
  let result = await deleteproduct(req.params);
  res.send(result);
});
app.get("/getproducts", async (req, res) => {
  //console.log(req.body);
  let result = await getproduct();
  res.send(result);
});
app.get("/getproductData/:_id",async(req,res)=>{
  let data = await getproductData(req.params);
  res.send(data);
});
app.listen(4500);
