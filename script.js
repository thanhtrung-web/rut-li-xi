let isSpinning = false;

// ===== CẤU HÌNH QUÀ =====
const gifts = [
    { name: "5k", quantity: 10 },
    { name: "10k", quantity: 2 },
    { name: "2k", quantity: 30 },
    { name: "1 ly soda", quantity: 5 },
    { name: "1 phần mứt chanh dây ", quantity: 10 },
    { name: "1 phần mứt tắc ", quantity: 10 }
];

// ===== LẤY KHO QUÀ =====
let giftPool = JSON.parse(localStorage.getItem("giftPool"));

if (!giftPool) {
    giftPool = [];
    gifts.forEach(gift => {
        for (let i = 0; i < gift.quantity; i++) {
            giftPool.push(gift.name);
        }
    });
    localStorage.setItem("giftPool", JSON.stringify(giftPool));
}

// ===== RANDOM + TRỪ QUÀ =====
function randomGift() {
    if (giftPool.length === 0) return null;

    const index = Math.floor(Math.random() * giftPool.length);
    const result = giftPool[index];

    giftPool.splice(index, 1);
    localStorage.setItem("giftPool", JSON.stringify(giftPool));

    return result;
}

// ===== RÚT LÌ XÌ =====
function spin() {
    if (isSpinning) return;
    isSpinning = true;

    const resultBox = document.getElementById("result");
    const button = document.querySelector("button");

    if (giftPool.length === 0) {
        resultBox.innerText = "🎁 Hết quà rồi!";
        button.disabled = true;
        return;
    }

    resultBox.innerText = "⏳ Đang rút lì xì...";
    button.disabled = true;

    setTimeout(() => {
        const result = randomGift();

        resultBox.innerText = `🧧 Bạn trúng: ${result}  `;//(còn ${giftPool.length} lượt)

        button.disabled = false;
        isSpinning = false;
    }, 1500);
}


//localStorage.removeItem("giftPool");
//location.reload();