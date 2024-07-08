/// <reference types="cypress" />

describe('Xác thực chức năng tìm kiếm sản phẩm trên website Amazon', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.com/ref=nav_bb_logo');
    })

    // Tìm kiếm sản phẩm trên website
    it('Tìm kiếm sản phẩm trên website', () => {
        cy.get('#twotabsearchtextbox').then(() => {
            const product = ['Laptop', 'SmartPhone', 'Notebook'];

            for (var i = 0; i < product.length; i++) {
                cy.get('#twotabsearchtextbox').type(product[i]); // Nhập từ khóa tìm kiếm
                cy.get('#nav-search-submit-button').click(); // Nhấn nút tìm kiếm
                cy.get('[data-component-type="s-result-info-bar"]').should('contain', product[i]); // Kiểm tra trong thanh thông báo tìm kiếm có sản phẩm hay không
                cy.go('back'); // Quay lại trang trước
            }
        });
    });

    // Tìm kiếm theo danh mục sản phẩm
    it('Tìm kiếm theo danh mục sản phẩm', () => {
        cy.get('#searchDropdownBox').then(() => {
            const category = ['Computers', 'Amazon Resale'];

            for (var i = 0; i < category.length; i++) {
                cy.get('#searchDropdownBox').select(category[i], { force: true }); // Chọn danh mục sản phẩm
                cy.get('#nav-search-submit-button').click(); // Nhấn nút tìm kiếm
                cy.go('back'); // Quay lại trang trước
            }
        });
    });

    // Lọc sản phẩm theo giá: Thấp đến cao
    it('Lọc sản phẩm theo giá: Thấp đến cao', () => {
        cy.get('#twotabsearchtextbox').then(() => {
            const product = ['Laptop', 'Smartphone'];
            for (var i = 0; i < product.length; i++) {
                cy.get('#twotabsearchtextbox').type(product[i]); // Nhập từ khóa tìm kiếm
                cy.get('#nav-search-submit-button').click(); // Nhấn nút tìm kiếm
                cy.get('[data-component-type="s-result-info-bar"]').should('contain', product[i]); // Kiểm tra trong thanh thông báo tìm kiếm có sản phẩm hay không

                cy.get('#s-result-sort-select').select('Price: Low to High', { force: true }); // Chọn lọc giá từ thấp đến cao
                cy.get('.a-dropdown-prompt').should('contain', 'Price: Low to High'); // Kiểm tra xem đã chọn đúng lọc giá hay chưa
                cy.go('back'); // Quay lại trang trước
                cy.go('back'); // Quay lại trang trước
            }
        });
    });

    // Lọc sản phẩm theo giá: Cao đến thấp
    it('Lọc sản phẩm theo giá: Cao đến thấp', () => {
        cy.get('#twotabsearchtextbox').then(() => {
            const product = ['Caderno', 'Smartphone'];
            for (var i = 0; i < product.length; i++) {
                cy.get('#twotabsearchtextbox').type(product[i]); // Nhập từ khóa tìm kiếm
                cy.get('#nav-search-submit-button').click(); // Nhấn nút tìm kiếm
                cy.get('[data-component-type="s-result-info-bar"]').should('contain', product[i]); // Kiểm tra trong thanh thông báo tìm kiếm có sản phẩm hay không

                cy.get('#s-result-sort-select').select('Price: High to Low', { force: true }); // Chọn lọc giá từ cao đến thấp
                cy.get('.a-dropdown-prompt').should('contain', 'Price: High to Low'); // Kiểm tra xem đã chọn đúng lọc giá hay chưa
                cy.go('back'); // Quay lại trang trước
                cy.go('back'); // Quay lại trang trước
            }
        });
    });

    // Lọc sản phẩm theo đánh giá trung bình của khách hàng
    it('Lọc sản phẩm theo đánh giá trung bình của khách hàng', () => {
        cy.get('#twotabsearchtextbox').then(() => {
            const product = ['Caderno', 'Smartphone'];
            for (var i = 0; i < product.length; i++) {
                cy.get('#twotabsearchtextbox').type(product[i]); // Nhập từ khóa tìm kiếm
                cy.get('#nav-search-submit-button').click(); // Nhấn nút tìm kiếm
                cy.get('[data-component-type="s-result-info-bar"]').should('contain', product[i]); // Kiểm tra trong thanh thông báo tìm kiếm có sản phẩm hay không

                cy.get('#s-result-sort-select').select('Avg. Customer Review', { force: true }); // Chọn lọc đánh giá trung bình
                cy.get('.a-dropdown-prompt').should('contain', 'Avg. Customer Review'); // Kiểm tra xem đã chọn đúng lọc đánh giá hay chưa
                cy.go('back'); // Quay lại trang trước
                cy.go('back'); // Quay lại trang trước
            }
        });

    });

});
