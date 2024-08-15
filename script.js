const textInput = document.querySelector(".text-input");
const generateBtn = document.querySelector(".generate-qr-btn");
const qrCodeContainer = document.querySelector(".qr-container");
const qrCodeElement = document.querySelector(".qrcode");
const downloadBtn = document.querySelector(".download-btn");



if (generateBtn === null) {
    console.error("generateBtn not found in the DOM");
} else {
    generateBtn.addEventListener("click", generateQRCode);
}


textInput.addEventListener("keydown", (event) => event.key == "Enter" && generateQRCode());

downloadBtn.addEventListener("click", download);

function generateQRCode(){
    const txt = textInput.value.trim();

    if (!txt){
        alert("Please enter text to generate a QR code.");
        return;
    }

    const firstGen = qrCodeElement.innerHTML == "";
    qrCodeElement.innerHTML = "";
    qrCodeElement.style.height = "0";

    if (!firstGen){
        qrCodeContainer.style.height = "250px";
    }

    try {
        new QRCode(qrCodeElement, {
            text: txt,
            width: 250,
            height: 250,
        });
    } catch (error) {
        console.error("QR code generation failed:", error);
    }

    setTimeout(() => {
        qrCodeElement.style.height = "250px";
        downloadBtn.classList.remove("hidden");
        generateBtn.classList.add("mb-35");
        qrCodeContainer.classList.add("mb-35");
    });
}

function download(){
    const qrImg = document.querySelector(".qrcode img");
    const downloadLnk = document.createElement("a");
    downloadLnk.href = qrImg.src;
    downloadLnk.download = "qrcode.png";
    downloadLnk.click();
}

console.log("Input text:", txt);

