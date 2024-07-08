import CryptoJS from "crypto-js";

export default function generatePass(input?: string): string {
  const inputValue = input || Math.random().toString();
  const hash = CryptoJS.SHA256(inputValue);
  const hashHex = hash.toString(CryptoJS.enc.Hex);
  const password = hashHex.substring(0, 8);

  return password;
}
