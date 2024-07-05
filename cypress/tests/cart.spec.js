describe('Kiểm thử giao diện người dùng của giỏ hàng', () => {
    it('Biểu tượng giỏ hàng hiển thị đúng', () => {
        cy.visit('/');
        cy.get('.nav-cart-icon.nav-sprite').should('be.visible');
    });

    it('Giao diện trang giỏ hàng hiển thị đầy đủ các thành phần cần thiết', () => {
        addToCart();

        cy.get('[data-name="Active Items"]').should('be.visible'); // Kiểm tra xem danh sách sản phẩm đã hiển thị chưa
        cy.get('[data-name="Active Items"] .sc-badge-price').should('be.visible'); // Kiểm tra giá từng mặt hàng đã hiển thị chưa
        cy.get('[data-name="Subtotals"]').should('be.visible'); // Kiểm tra số lượng và giá tổng của giỏ hàng đã hiển thị chưa
        cy.get('input[name="proceedToRetailCheckout"]').should('be.visible'); // Kiểm tra xem nút đặt hàng đã hiển thị chưa
    });

    it('Thiết kế, nhãn và các nút giỏ hàng hiển thị đúng', () => {
        addToCart();

        // Kiểm tra vị trí phần body
        cy.get('.a-container.sc-background-dark').should('be.visible').then(($element) => {
            const position = $element.position();
            expect(position.top).to.be.closeTo(115, 20); // cách header
        });

        // Kiểm tra vị trí phần danh sách sản phẩm
        cy.get('#sc-cart-column').should('be.visible').then(($element) => {
            const position = $element.position();
            expect(position.top).to.be.closeTo(0, 5); // gần đỉnh của trang, khoảng cách lớn nhất là 5px
            expect(position.left).to.be.closeTo(0, 5); // Xem có nằm bên trái không
        });

        // Kiểm tra vị trí sản phẩm liên quan và nút đi đến thanh toán
        cy.get('#proceed-to-checkout-desktop-container').should('be.visible').then(($element) => {
            const position = $element.position();
            expect(position.top).to.be.closeTo(0, 5); // gần đỉnh của trang, khoảng cách lớn nhất là 5px
            expect(position.left).to.be.closeTo(1000, 400); // Xem có nằm bên phải không
        });

        // Kiểm tra vị trí phần tổng đơn hàng và nút đi đến thanh toán
        cy.get('#sc-buy-box').should('be.visible').then(($element) => {
            const position = $element.position();
            expect(position.top).to.be.closeTo(0, 5);
        });

        // Kiểm tra vị trí phần sản phẩm liên quan
        cy.get('#sc-rec-right').should('be.visible').then(($element) => {
            const position = $element.position();
            expect(position.top).to.be.closeTo(150, 30);
        });


    });

    it('Nút số lượng hiển thị đầy đủ và rõ ràng', () => {
        addToCart()
        cy.get('span.sc-action-quantity').should('be.visible');
        changeQuantity(1);
        changeQuantity(9);
    });

    it('Chọn số lượng tùy ý hiển thị và hoạt động đúng', () => {
        addToCart()
        cy.get('span.sc-action-quantity').should('be.visible');
        changeQuantity(10);
        cy.get('input[name="quantityBox"]').first().type('20').should('have.value', '20');
        cy.get('input[name="quantityBox"]').first().click();
        cy.get('.sc-update-link').first().click();
    });

    it('Các tùy chọn chỉnh sửa, xóa, lưu hiển thị đầy đủ', () => {
        addToCart();
        cy.get('.a-row.sc-action-links span[data-action="delete"]').should('be.visible');
        cy.get('.a-row.sc-action-links span[data-action="save-for-later"]').should('be.visible');
        cy.get('.a-row.sc-action-links span[data-action="compare"]').should('be.visible');
        cy.get('.a-row.sc-action-links span[data-action="share"]').should('be.visible');

        cy.get('.a-row.sc-action-links span[data-action="compare"]').first().click();
        cy.get('#a-popover-content-2').should('be.visible');
        cy.visit('/gp/cart/view.html');
    });

    it('Sản phẩm hiển thị đầy đủ thông tin và liên kết', () => {
        addToCart();
        cy.get('.a-link-normal.sc-product-link span').should('be.visible');
        cy.get('.a-link-normal.sc-product-link img').should('be.visible');
        cy.get('.sc-grid-content-tail message').should('be.visible');
    });

    it('Nút Tiếp theo và Hủy hiển thị đầy đủ và hoạt động đúng', () => {
        addToCart();
        cy.get('input[name="proceedToRetailCheckout"]').should('be.visible');
        cy.get('input[name="proceedToRetailCheckout"]').first().click();
    });

});

function addToCart() {
    cy.visit('/gp/cart/view.html');
    cy.get('a[href="/gp/cart/view.html?ref_=nav_cart"]').click();

    cy.get('input[name="submit.addToCart"]').first().click();
    cy.visit('/gp/cart/view.html');
    cy.get('input[name="submit.addToCart"]').first().click();
    cy.visit('/gp/cart/view.html');
}

function changeQuantity(quantity) {
    cy.get('span.sc-action-quantity').first().click();
    cy.get(`li[aria-labelledby="quantity_${quantity}"]`).first().click();
}
