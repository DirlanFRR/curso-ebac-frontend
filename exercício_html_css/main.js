const form = document.getElementById('FormNumber');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const campoA = parseFloat(document.getElementById('campoA').value);
  const campoB = parseFloat(document.getElementById('campoB').value);
 
  if (campoB <= campoA) {
    const message = "O número B precisa ser maior que o número A.";
    document.getElementById("message").innerHTML = `<p style="color: red; ; font-size: 20px ">${message}</p>`;
   
  } else {
    const message = "Formulário válido!";
    document.getElementById("message").innerHTML = `<p style="color: green; ; font-size: 20px ">${message}</p>`;
   
  }
});