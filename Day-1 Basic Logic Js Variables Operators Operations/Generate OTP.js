function generateOTP() {
    let otp = Math.floor(100000 + Math.random() * 900000);
    return otp;
}

console.log(generateOTP());
