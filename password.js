function generateRandomPassword(length) {
    // combo of all characters and special characters
  const allCharacters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+{[]}|;:'\",./<>?";

  const randomPass = [];
  for (let i = 0; i < length; i++) {
    randomPass.push(
      allCharacters[Math.floor(Math.random() * allCharacters.length)]
    );
  }

  return randomPass.join("");
}

const passwordLength = 8;
const password = generateRandomPassword(passwordLength);

console.log(password);
