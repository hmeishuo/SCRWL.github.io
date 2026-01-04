let infoIndex = 0;
const infoTexts = document.querySelectorAll('.info-text');

function rotateInfo() {
    // 移除當前 active
    infoTexts[infoIndex].classList.remove('active');
    
    // 計算下一組索引
    infoIndex = (infoIndex + 1) % infoTexts.length;
    
    // 加上新 active
    infoTexts[infoIndex].classList.add('active');
}

// 每 3 秒執行一次切換
setInterval(rotateInfo, 3000);



document.addEventListener('DOMContentLoaded', () => {
    // 1. 抓取所有購物車與愛心按鈕
    const cartBtns = document.querySelectorAll('.add-to-cart-overlay');
    const loveBtns = document.querySelectorAll('.add-to-love-overlay');

    // 2. 加入購物車邏輯
    cartBtns.forEach(btn => {
        btn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            const card = this.closest('.card');
            
            const product = {
                id: card.dataset.id,      // 例如：n01, h01
                name: card.dataset.name,  // 例如：Thrasher T恤
                price: parseInt(card.dataset.price),
                img: card.querySelector('img').src,
                qty: 1
            };

            updateStorage('cartItems', product);
            alert(`🛹 ${product.name} 已成功加入購物車！`);
        };
    });

    // 3. 加入我的最愛邏輯
    loveBtns.forEach(btn => {
        btn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            const card = this.closest('.card');
            const product = {
                id: card.dataset.id,
                name: card.dataset.name,
                img: card.querySelector('img').src
            };

            updateStorage('loveItems', product);
            this.style.color = '#ff4d4d'; // 愛心變紅
            alert(`❤️ ${product.name} 已加入我的最愛！`);
        };
    });

    // 通用儲存 Function
    function updateStorage(key, newItem) {
        let list = JSON.parse(localStorage.getItem(key)) || [];
        const index = list.findIndex(item => item.id === newItem.id);

        if (index > -1) {
            // 如果是購物車且已存在，數量 +1
            if (key === 'cartItems') {
                list[index].qty = (list[index].qty || 1) + 1;
            }
        } else {
            // 沒出現過，新增進去
            list.push(newItem);
        }
        localStorage.setItem(key, JSON.stringify(list));
    }
});