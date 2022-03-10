const registrationmodel = require("./config");
const insert = async (props) => {
  //console.log(props.username + " " + props.email);
  let data = await registrationmodel.find({
    $or: [{ email: { $regex: props.email } }],
  });
  if (data.length == 0) {
    data = await registrationmodel.find({
      $or: [{ username: { $regex: props.username } }],
    });
    if (data.length == 0) {
      let data = new registrationmodel(props);
      let result = await data.save();
      result = result.toObject();
      delete result.password;
      console.log(result);
      return result;
    } else {
      let message = { key: "username already used" };
      return JSON.stringify(message);
    }
  } else {
    let message = { key: "already register" };
    return JSON.stringify(message);
  }
};
module.exports = insert;
