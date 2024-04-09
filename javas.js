const pullar = [500, 200, 100, 50, 20, 10, 5, 1];
const pulShekiller = [
    "500.png",
    "200.png",
    "100.png",
    "50.png",
    "20.png",
    "10.png",
    "5.png",
    "1.png",
];

function calculateMoney() {
    const inputAmount = document.getElementById("input-amount").value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    let remainingAmount = parseInt(inputAmount);

    for (let i = 0; i < pullar.length; i++) {
        const count = Math.floor(remainingAmount / pullar[i]);
        remainingAmount -= count * pullar[i];

        if (count > 0) {
            const moneyItem = document.createElement("div");
            moneyItem.classList.add("money-item");

            const image = document.createElement("img");
            image.src = `images/${pulShekiller[i]}`;
            moneyItem.appendChild(image);

            const text = document.createElement("p");
            text.textContent = `${count} x ${pullar[i]} AZN`;
            moneyItem.appendChild(text);

            resultDiv.appendChild(moneyItem);
        }
    }

    if (remainingAmount > 0) {
        const moneyItem = document.createElement("div");
        moneyItem.classList.add("money-item");
        
        const text = document.createElement("p");
        text.textContent = `Geri qalan miqdar: ${remainingAmount} AZN`;
        moneyItem.appendChild(text);
        
        resultDiv.appendChild(moneyItem);
        const totalAmountText = document.createElement("p");
        totalAmountText.textContent = `Ümumi məbləğ: ${totalAmount} AZN`;
        totalAmountDiv.appendChild(totalAmountText);
    }
}

