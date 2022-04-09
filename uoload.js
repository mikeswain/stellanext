const crypto = require("crypto");

function generateSignature(secret, expire) {
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(expire);
  return hmac.digest("hex");
}

// secret key
const secretKey = "6949e298cbb80f117994";
const publicKey = "996f1aebccfeb885bab9";

// define expiry (e.g. 120 seconds)
const expire = (Math.round(Date.now() / 1000) + 120).toString();
const signature = generateSignature(secretKey, expire);

console.log(`-F UPLOADCARE_PUB_KEY=${publicKey} -F expire=${expire} -F signature=${signature}`);
