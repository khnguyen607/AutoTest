describe('Products', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.com/ref=nav_bb_logo');
    });

    // Test case: Truy cập vào trang sản phẩm sau khi tìm kiếm sản phẩm
    it('Truy cập vào trang sản phẩm sau khi tìm kiếm sản phẩm', () => {
        // Truy cập vào trang tìm kiếm
        cy.get('#twotabsearchtextbox').then(() => {
            // Danh sách các sản phẩm cần tìm kiếm
            const products = ['laptop', 'smartphone']

            // Lặp qua mỗi sản phẩm trong danh sách
            products.forEach(product => {
                // Nhập sản phẩm vào trường tìm kiếm
                cy.get('#twotabsearchtextbox').type(product);
                // Nhấn nút tìm kiếm
                cy.get('#nav-search-submit-button').click();
                // Mô phỏng thao tác vuốt lên và xuống để kiểm tra có lăn chuột được hay không
                cy.get('div[data-index="3"]').first().trigger('mouseover').trigger('mousedown').trigger('mousemove', { clientY: 100 }).trigger('mousemove', { clientY: -100 }).trigger('mouseup');
                // Kiểm tra kết quả tìm kiếm có chứa sản phẩm được tìm
                cy.get('[data-component-type="s-result-info-bar"]').should('contain', product);
                // Lấy thông tin về sản phẩm đầu tiên trong kết quả tìm kiếm
                cy.get("div[data-index='3']").find('h2').as('productTitle');
                // Lấy giá của sản phẩm đầu tiên trong kết quả tìm kiếm
                cy.get("div[data-index='3'] .a-price .a-price-symbol").siblings().invoke('text').then((price) => {
                    // Lấy tiêu đề của sản phẩm đầu tiên trong kết quả tìm kiếm
                    cy.get('@productTitle').invoke('text').then((productTitleContent) => {
                        // Click vào sản phẩm đầu tiên để truy cập vào trang chi tiết sản phẩm
                        cy.get('@productTitle').find('a').click();
                        // Kiểm tra tiêu đề trang chi tiết sản phẩm có chứa tiêu đề của sản phẩm
                        cy.get('#productTitle').invoke('text').should('contain', productTitleContent);
                        // Kiểm tra giá trên trang chi tiết sản phẩm có khớp với giá trong kết quả tìm kiếm
                        cy.get("#corePrice_feature_div .a-price .a-price-symbol").siblings().invoke('text').should('contain', price);
                    })
                })
                // Quay lại trang tìm kiếm
                cy.go('back');
                cy.go('back');
            })
        })
    });

});