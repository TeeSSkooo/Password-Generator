const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

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
