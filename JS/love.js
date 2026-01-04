document.addEventListener('DOMContentLoaded', () => {
    const loveContainer = document.querySelector('.love-items-list');

    renderLove();

    function renderLove() {
        let loveItems = JSON.parse(localStorage.getItem('loveItems')) || [];
        const loveContainer = document.querySelector('.love-items-list');
        
        if (loveItems.length === 0) {
            loveContainer.innerHTML = '<p style="text-align:center; padding:50px;">目前沒有收藏的商品 ❤️</p>';
            return;
        }

        let htmlContent = '';
        loveItems.forEach((item, index) => {
            htmlContent += `
                <div class="cart-item">
                    <div class="love-product item-info">
                        <div class="cart-img-box"><img src="${item.img}"></div>
                        <span class="item-name">${item.name}</span>
                    </div>
                    <div class="love-subtotal">
                        NT$${item.price ? item.price.toLocaleString() : '---'}
                        <div style="margin-top:10px;">
                            <button class="btn-street" onclick="moveToCart(${index})" style="padding:5px 10px; font-size:12px;">加入購物車</button>
                        </div>
                    </div>
                    <button class="remove-btn" onclick="removeLove(${index})">✕</button>
                </div>
            `;
        });
        loveContainer.innerHTML = htmlContent;
    }

    window.removeLove = function(index) {
        let loveItems = JSON.parse(localStorage.getItem('loveItems'));
        loveItems.splice(index, 1); // 刪除該筆資料
        localStorage.setItem('loveItems', JSON.stringify(loveItems)); // 存回 LocalStorage
        
        renderLove(); //重新呼叫此函式
    };

    window.moveToCart = function(index) {
        let loveItems = JSON.parse(localStorage.getItem('loveItems')) || [];
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        
        let item = loveItems[index];
        // 檢查購物車是否已有該商品
        let cartIndex = cartItems.findIndex(c => c.id === item.id);
        if (cartIndex > -1) {
            cartItems[cartIndex].qty += 1;
        } else {
            item.qty = 1;
            cartItems.push(item);
        }
        
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert("已成功移至購物車 🛹");
    };
});