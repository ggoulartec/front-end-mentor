function calculaIdade() {
  // Obter os valores dos campos de entrada
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  // Verificar se os campos foram preenchidos
  if (!day || !month || !year) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Validar o dia
  if (day < 1 || day > 31) {
    setError("day", "must be a valid day");
    return;
  } else {
    removeError("day");
  }

  // Validar o mês
  if (month < 1 || month > 12) {
    setError("month", "must be a valid month");
    return;
  } else {
    removeError("month");
  }

  // Validar o ano
  if (year < 1900 || year > 2024) {
    setError("year", "must be a valid year");
    return;
  } else {
    removeError("year");
  }

  // Criar a data de nascimento
  const birthdate = new Date(year, month - 1, day);

  // Obter a data atual
  const currentDate = new Date();

  // Calcular a diferença em milissegundos
  const difference = currentDate - birthdate;

  // Converter a diferença em anos, meses e dias
  const ageDate = new Date(difference);
  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1; // Subtrair 1 para ajustar o dia

  // Atualizar o resultado na página
  document.getElementById(
    "result"
  ).textContent = `${years} years ${months} months ${days} days`;
}

function setError(field, message) {
  const input = document.getElementById(field);
  input.classList.add("error");
  alert(`O campo "${field}" ${message}`);
}

function removeError(field) {
  const input = document.getElementById(field);
  input.classList.remove("error");
}
