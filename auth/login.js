const registrationmodel = require("./config");
const loginApi = async (props) => {
  let data = await registrationmodel.findOne({
    $or: [{ email: { $regex: props.email } }],
  });
  if (data.length != 0) {
    if (data.password == props.password) {
      data = data.toObject();
      delete data.password;
      return data;
    } else {
      let message = { key: "provide correct user password" };
      return JSON.stringify(message);
    }
  } else {
    let message = { key: "no user found with this email" };
    return JSON.stringify(message);
  }
};
module.exports = loginApi;
