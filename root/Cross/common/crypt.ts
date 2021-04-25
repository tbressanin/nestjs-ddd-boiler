import { createCipheriv, randomBytes } from 'crypto';

const iv = randomBytes(16);

const cipher = createCipheriv('aes-256-ctr', 'saude-id-key', iv);

const textToEncrypt = 'saude-text-encrypt';

export const encryptedText = Buffer.concat([
    cipher.update(textToEncrypt),
    cipher.final(),
])