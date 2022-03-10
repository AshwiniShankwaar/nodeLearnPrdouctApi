const productmodal = require("./config");
const searchProduct = async (props) => {
  let data = await productmodal.find({
    $or: [
      { Productname: { $regex: props } },
      { ProductCatagory: { $regex: props } },
      { productCompany: { $regex: props } }
    ],
  });
  if (data.length == 0) {
    let message = { key: "no data" };
    return JSON.stringify(message);
  } else {
    return data;
  }
};
module.exports = searchProduct;
