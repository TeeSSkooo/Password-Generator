import getCharset from './getCharses';

export default function generatePassword(
  charLength: number,
  options: {
    includeUppercase: boolean;
    includeLowercase: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
  }
) {
  let charset = getCharset(options);

  if (!charset) return '';

  let password = '';

  for (let i = 0; i < charLength; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}
