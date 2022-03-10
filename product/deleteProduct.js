const productmodal = require("./config");
const deleteProduct = async (props) => {
  console.log(props);
  let data = await productmodal.deleteOne(props);
  if (data.deletedCount != 0) {
    let message = { key: "product deleted" };
    return JSON.stringify(message);
  }
};
module.exports = deleteProduct;
