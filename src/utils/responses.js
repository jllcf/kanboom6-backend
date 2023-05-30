const generalSuccess = (res, message, data) => {
  return res.status(200).json({ status: "success", message, data });
};

const generalError = (res, message, data) => {
  return res.status(400).json({ status: "error", message });
};

const loginSuccess = (res, message, token) => {
  return res.status(200).json({ status: "success", message, token });
};

const authError = (res, message) => {
  return res.status(401).json({ status: "error", message });
};

module.exports = { generalSuccess, generalError, loginSuccess, authError };
