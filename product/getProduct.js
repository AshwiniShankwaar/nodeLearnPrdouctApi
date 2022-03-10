const productmodal = require("./config");
const getproduct = async () => {
  let data = await productmodal.find();
  return data;
};
module.exports = getproduct;
