const path = require('path');
require('dotenv').config({
  path:
    process.env.NODE_ENV === 'production'
      ? path.resolve(__dirname, '../../.env')  // Higher-level `.env` for production
      : path.resolve(__dirname, '../.env'),    // Lower-level `.env` for development
});

const crypto = require('crypto');

// Ensure ENCRYPTION_KEY is loaded
if (!process.env.ENCRYPTION_KEY) {
  console.error("❌ ERROR: ENCRYPTION_KEY is missing!");
  process.exit(1);
}

// Set encryption key
const encryptionKey = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');

if (encryptionKey.length !== 32) {
  console.error("❌ ERROR: ENCRYPTION_KEY must be exactly 32 bytes for AES-256 encryption.");
  process.exit(1);
}

const ivLength = 16; // AES block size

// Encrypt function
function encrypt(text) {
  if (!text || typeof text !== 'string') {
    throw new Error('Input to encrypt must be a non-empty string.');
  }

  const iv = crypto.randomBytes(ivLength);
  const cipher = crypto.createCipheriv('aes-256-cbc', encryptionKey, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return `${iv.toString('hex')}:${encrypted}`;
}

// Decrypt function
function decrypt(encryptedText) {
  if (!encryptedText || typeof encryptedText !== 'string') {
    throw new Error('Input to decrypt must be a non-empty string.');
  }

  const parts = encryptedText.split(':');
  if (parts.length !== 2) {
    throw new Error('Invalid encrypted value format. Expected "iv:encryptedText".');
  }

  const [ivHex, encryptedHex] = parts;

  let iv, encryptedTextBuffer;

  try {
    iv = Buffer.from(ivHex, 'hex');
    encryptedTextBuffer = Buffer.from(encryptedHex, 'hex');
  } catch (err) {
    throw new Error('Failed to convert IV or encrypted text to buffer: ' + err.message);
  }

  try {
    const decipher = crypto.createDecipheriv('aes-256-cbc', encryptionKey, iv);
    let decrypted = decipher.update(encryptedTextBuffer, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch (err) {
    throw new Error('Decryption failed: ' + err.message);
  }
}

module.exports = { encrypt, decrypt };
