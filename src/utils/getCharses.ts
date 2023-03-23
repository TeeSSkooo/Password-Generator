import { UPPERCASE, LOWERCASE, NUMBERS, SYMBOLS } from 'constants/password';

export default function getCharset(options: {
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}) {
  const { includeUppercase, includeLowercase, includeNumbers, includeSymbols } = options;
  let charset = '';

  if (includeUppercase) {
    charset += UPPERCASE;
  }

  if (includeLowercase) {
    charset += LOWERCASE;
  }

  if (includeNumbers) {
    charset += NUMBERS;
  }

  if (includeSymbols) {
    charset += SYMBOLS;
  }

  return charset;
}
