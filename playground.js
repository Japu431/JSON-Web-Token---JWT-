const jwt = require("jsonwebtoken");

const user = {
  id: "1",
  name: "Matheus",
  username: "zlPorraloska",
  password: "1234567",
};

const secret = "UDSAHJSAnodkjsajfjdsfnsdjkf";

function createToken() {
  const token = jwt.sign({ id: user.id, username: user.username }, secret, {
    expiresIn: 60,
  });

  console.log(token);
}

function testToken(token) {
  try {
    const validData = jwt.verify(token, secret);

    console.log(validData);
  } catch (err) {
    console.log(err);
  }
}
// createToken();

testToken(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6InpsUG9ycmFsb3NrYSIsImlhdCI6MTYxNjM2NjAzMywiZXhwIjoxNjE2MzY2MDkzfQ.-0xmFjlCXkGseAl0uGQU1waTxnIFVnssU71TyY0YF80"
);
