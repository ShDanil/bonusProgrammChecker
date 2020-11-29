const { Schema, model } = require("mongoose");

// необходимо добавить имя пользователя, фамилию, телефон, название компании.
const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  serialNumbers: [{ type: Number, unique: true }],
});

module.exports = model("User", schema);
