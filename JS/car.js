document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.querySelector('.cart-items-list');
    const subtotalText = document.getElementById('cart-subtotal');

    function renderCart() {
        let items = JSON.parse(localStorage.getItem('cartItems')) || [];
        
        if (items.length === 0) {
            cartContainer.innerHTML = '<div style="text-align:center; padding:100px;">你的購物車是空的 🛹</div>';
            if (subtotalText) subtotalText.innerText = "NT$0";
            return;
        }

        let total = 0;
        let html = items.map((item, index) => {
            let itemTotal = item.price * item.qty;
            total += itemTotal;
            return `
                <div class="cart-item" style="display:flex; align-items:center; justify-content:space-between; padding:20px; border-bottom:1px solid #ddd;">
                    <div style="display:flex; align-items:center; gap:20px; flex:2;">
                        <img src="${item.img}" width="80" style="border:1px solid #333;">
                        <div>
                            <p><b>${item.name}</b></p>
                            <p style="color:#888;">#${item.id}</p>
                        </div>
                    </div>
                    <div class="quantity-control" style="flex:1; display:flex; align-items:center; gap:10px;">
                        <button onclick="changeQty(${index}, -1)" style="padding:5px 10px; cursor:pointer;">-</button>
                        <span>${item.qty}</span>
                        <button onclick="changeQty(${index}, 1)" style="padding:5px 10px; cursor:pointer;">+</button>
                    </div>
                    <div style="flex:1; text-align:right;">NT$${itemTotal.toLocaleString()}</div>
                    <button onclick="delItem(${index})" style="background:none; border:none; color:red; cursor:pointer; margin-left:20px;">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            `;
        }).join('');

        cartContainer.innerHTML = html;
        if (subtotalText) subtotalText.innerText = "NT$" + total.toLocaleString();
    }

    // 全域函數供 HTML 點擊調用
    window.changeQty = (index, delta) => {
        let items = JSON.parse(localStorage.getItem('cartItems'));
        if (items[index].qty + delta > 0) {
            items[index].qty += delta;
            localStorage.setItem('cartItems', JSON.stringify(items));
            renderCart();
        }
    };

    window.delItem = (index) => {
        if(confirm("確定要刪除這件商品嗎？")) {
            let items = JSON.parse(localStorage.getItem('cartItems'));
            items.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(items));
            renderCart();
        }
    };

    renderCart();
});