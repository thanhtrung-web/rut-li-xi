// Danh sách quà + tỉ lệ (%)
const gifts = [
    { name: "Lì Xì 2k", rate: 55 },
    { name: "Lì Xì 5k", rate: 30 },
    { name: "Lì Xì 10k", rate: 15 },
    { name: "Lì Xì 20k", rate: 4 },
    { name: "Lì Xì 50k", rate: 1 }
];

let isSpinning = false;

function randomGift() {
    const random = Math.random() * 100;
    let total = 0;

    for (let gift of gifts) {
        total += gift.rate;
        if (random < total) {
            return gift.name;
        }
    }
}

function spin() {
    if (isSpinning) return; // chặn spam click
    isSpinning = true;

    const resultBox = document.getElementById("result");
    const button = document.querySelector("button");

    resultBox.innerText = "⏳ Đang rút quà...";
    button.disabled = true;

    setTimeout(() => {
        const result = randomGift();
        resultBox.innerText = "🎉 Bạn trúng: " + result;
        button.disabled = false;
        isSpinning = false;
    }, 1500); // giả lập chờ 1.5s
}
