import crypto from "crypto-browserify";

export default function cryptoFunction(passcode) {
  const hash = crypto
    .createHash(process.env.NEXT_PUBLIC_ALGORITHM_CRYPTO)
    .update(passcode)
    .digest("hex");
  return hash;
}