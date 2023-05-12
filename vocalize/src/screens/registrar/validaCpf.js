function isValidCpf(cpf) {
    // Remover caracteres não numéricos do CPF
    cpf = cpf.replace(/\D/g, '');
  
    // Verificar se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }
  
    // Verificar se todos os dígitos são iguais (ex: 111.111.111-11)
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }
  
    // Verificar o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = sum % 11;
    let digit = remainder < 2 ? 0 : 11 - remainder;
    if (digit !== parseInt(cpf.charAt(9))) {
      return false;
    }
  
    // Verificar o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = sum % 11;
    digit = remainder < 2 ? 0 : 11 - remainder;
    if (digit !== parseInt(cpf.charAt(10))) {
      return false;
    }
  
    return true;
}

export default isValidCpf;