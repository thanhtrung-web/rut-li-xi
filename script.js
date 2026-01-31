// Danh sách quà + tỉ lệ (%)
const gifts = [
    { name: "Lì Xì 2k", rate: 50},
    { name: "Lì Xì 5k", rate: 10 },
    { name: "Lì Xì 10k", rate: 5 },
    { name: "Lì Xì 20k", rate: 2 },
    { name: "1 ly soda", rate: 3 },
    { name: "1 phần mứt chanh dây ", rate: 10 },
    { name: "1 phần mứt mức tắc ", rate: 10 },
    { name: "Voucher giảm 5k tổng đơn", rate: 5 },
    { name: "Voucher giảm 7k tổng đơn", rate: 5}
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

