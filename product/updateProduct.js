const productmodal = require("./config");
const updateProduct = async (props, reqbody) => {
  //console.log(props)
  let data = await productmodal.find({
    $or: [props],
  });
  if (data.length != 0) {
    let data = await productmodal.updateOne(props, { $set: reqbody });
    if (data.modifiedCount > 0) {
      let message = { key: "data updated" };
      return JSON.stringify(message);
    }else{
      let message = { key: "Modification on data doen not performed as all the data is same" };
      return JSON.stringify(message);
    }
  } else {
    let message = { key: "No product with the given id" };
    return JSON.stringify(message);
  }
};
module.exports = updateProduct;
