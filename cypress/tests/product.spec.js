describe('Products', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.com/ref=nav_bb_logo');
    });

    // Test case: Truy cập vào trang sản phẩm sau khi tìm kiếm sản phẩm
    // it('Truy cập vào trang sản phẩm sau khi tìm kiếm sản phẩm', () => {
    //     // Truy cập vào trang tìm kiếm
    //     cy.get('#twotabsearchtextbox').then(() => {
    //         // Danh sách các sản phẩm cần tìm kiếm
    //         const products = ['laptop', 'smartphone', 'TV']

    //         // Lặp qua mỗi sản phẩm trong danh sách
    //         products.forEach(product => {
    //             // Nhập sản phẩm vào trường tìm kiếm
    //             cy.get('#twotabsearchtextbox').type(product);
    //             // Nhấn nút tìm kiếm
    //             cy.get('#nav-search-submit-button').click();
    //             // Kiểm tra kết quả tìm kiếm có chứa sản phẩm được tìm
    //             cy.get('[data-component-type="s-result-info-bar"]').should('contain', product);
    //             // Lấy thông tin về sản phẩm đầu tiên trong kết quả tìm kiếm
    //             cy.get("div[data-index='3']").find('h2').as('productTitle');
    //             // Lấy giá của sản phẩm đầu tiên trong kết quả tìm kiếm
    //             cy.get("div[data-index='3'] .a-price .a-price-symbol").siblings().invoke('text').then((price) => {
    //                 // Lấy tiêu đề của sản phẩm đầu tiên trong kết quả tìm kiếm
    //                 cy.get('@productTitle').invoke('text').then((productTitleContent) => {
    //                     // Click vào sản phẩm đầu tiên để truy cập vào trang chi tiết sản phẩm
    //                     cy.get('@productTitle').find('a').click();
    //                     // Kiểm tra tiêu đề trang chi tiết sản phẩm có chứa tiêu đề của sản phẩm
    //                     cy.get('#productTitle').invoke('text').should('contain', productTitleContent);
    //                     // Kiểm tra giá trên trang chi tiết sản phẩm có khớp với giá trong kết quả tìm kiếm
    //                     cy.get("#corePrice_feature_div .a-price .a-price-symbol").siblings().invoke('text').should('contain', price);
    //                 })
    //             })
    //             // Quay lại trang tìm kiếm
    //             cy.go('back');
    //             cy.go('back');
    //         })
    //     })
    // });

    // Truy cập vào trang sản phẩm sau khi lọc theo một danh mục
    it('Truy cập vào trang sản phẩm sau khi lọc theo một danh mục', () => {
        // Truy cập vào trang tìm kiếm
        cy.get('#searchDropdownBox').then(() => {
            // Lấy danh sách danh mục sản phẩm
            const category = ['Computers', 'Amazon Resale'];

            // Lặp qua mỗi danh mục
            for (var i = 0; i < category.length; i++) {
                // Chọn danh mục sản phẩm
                cy.get('#searchDropdownBox').select(category[i], { force: true });
                cy.get('#nav-search-submit-button').click();
                cy.get('#nav-search-label-id').should('contain', category[i]);

                // Lấy thông tin về sản phẩm đầu tiên trên trang
                cy.get("ol[class='a-carousel'] > li").first().as('productTitle');
                cy.get("ol[class='a-carousel'] > li .a-price .a-price-symbol").first().siblings().invoke('text').then((price) => {
                    cy.log(price);
                    cy.get('@productTitle').find('.a-truncate-cut').invoke('text').then((productTitleContent) => {
                        const splitIndex = productTitleContent.indexOf('.');
                        const trimmedTitle = productTitleContent.substring(20, splitIndex).trim();
                        // Click vào sản phẩm đầu tiên
                        cy.get('@productTitle').find('a').click();
                        // Kiểm tra tiêu đề sản phẩm
                        cy.get('#productTitle').invoke('text').should('include', trimmedTitle);
                        // Kiểm tra giá sản phẩm
                        cy.log(cy.get("#corePrice_feature_div .a-price .a-offscreen").invoke('text'))
                        cy.get("#corePrice_feature_div .a-price .a-offscreen").invoke('text').should('contain', price);
                        // cy.get('.a-box-inner').as('priceBox').then(() => {
                        //     // Kiểm tra giá sản phẩm
                        //     cy.get('@priceBox').find("#corePrice_feature_div .a-price .a-price-symbol").then(() => {
                        //         cy.get("#corePrice_feature_div .a-price .a-price-symbol").siblings().invoke('text').should('contain', price);
                        //     })
                        // });
                    })
                });
                // Quay lại trang trước
                cy.go('back');
                cy.go('back');
            }
        });
    });

    // // Cần tạo một trường hợp khác để tìm kiếm sách vì giá trên trang sản phẩm được hiển thị khác với các sản phẩm khác
    // it('Truy cập đến sách', () => {
    //     cy.get('#searchDropdownBox').then(() => {
    //         const category = ['Books'];

    //         for (var i = 0; i < category.length; i++) {
    //             cy.get('#searchDropdownBox').select(category[i], { force: true });
    //             cy.get('#nav-search-submit-button').click();
    //             cy.get('#s-refinements').should('contain', category[i]);
    //             cy.get("ol[class='a-carousel'] > li").first().as('productTitle');
    //             cy.get("ol[class='a-carousel'] > li .a-price .a-price-symbol").first().siblings().invoke('text').then((price) => {
    //                 cy.get('@productTitle').find('.a-truncate-cut').invoke('text').then((productTitleContent) => {
    //                     const splitIndex = productTitleContent.indexOf('.');
    //                     const trimmedTitle = productTitleContent.substring(20, splitIndex).trim();
    //                     cy.get('@productTitle').find('a').click();
    //                     cy.get('#productTitle').invoke('text').should('include', trimmedTitle);
    //                     cy.get('.a-box-inner').as('priceBox').then(() => {
    //                         cy.get('@priceBox').find("#price").then(() => {
    //                             cy.get("#price").invoke('text').should('contain', price);
    //                         })

    //                     });
    //                 })
    //             });
    //             cy.go('back');
    //             cy.go('back');
    //         }
    //     });
    // })
});