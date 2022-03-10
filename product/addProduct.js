const productmodal = require("./config");
const addProduct = async (props) => {
  let data = await productmodal.find({
    $or: [{ Productname: { $regex: props.Productname },ProductCompany:{$regex:props.ProductCompany} }],
  });
  //console.log(data.length);
  //console.log(props);
  if (data.length == 0) {
    let data = new productmodal(props);
    let result = await data.save();
    //console.log(result);
    return result;
  } else {
    let message = { key: "data available" };
    return JSON.stringify(message);
  }
};
module.exports = addProduct;
