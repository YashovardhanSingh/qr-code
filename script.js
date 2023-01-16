const btn = document.querySelector("#submit");
const size = document.querySelector("#size");
const url = document.querySelector("#url");
const code = document.querySelector("#qrcode");

btn.addEventListener("click", () => {
  
  if (!url.value) {
    alert("Please Enter a URL");
    url.focus();
    return;
  }
  code.innerHTML = "";
  
  const options = {
    text: url.value,
    width: size.value,
    height: size.value,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H,
  }
  
  const qrcode = new QRCode("qrcode", options);
  setTimeout(() => {
    const src = code.querySelector('img').src;
    const save = document.createElement("a");
    save.text = "Save QR-Code";
    save.href = src;
    save.download = "qrcode.png";
    code.appendChild(save);
  }, 100);
})