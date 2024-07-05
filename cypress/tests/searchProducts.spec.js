/// <reference types="cypress" />

describe('Xác thực chức năng tìm kiếm sản phẩm trên website Amazon', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.com/ref=nav_bb_logo');
    })

    // Tìm kiếm sản phẩm trên website
    it('Tìm kiếm sản phẩm trên website', () => {
        cy.get('#twotabsearchtextbox').then(() => {
            const product = ['fone de ouvido', 'Mochila', 'Notebook'];

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
            const category = ['Alexa Skills', 'Beleza', 'Casa'];

            for (var i = 0; i < category.length; i++) {
                cy.get('#searchDropdownBox').select(category[i], { force: true }); // Chọn danh mục sản phẩm
                cy.get('#nav-search-submit-button').click(); // Nhấn nút tìm kiếm
                cy.get('#s-refinements').should('contain', category[i]); // Kiểm tra trong thanh thông báo tìm kiếm có danh mục hay không
                cy.go('back'); // Quay lại trang trước
            }
        });
    });

    // Lọc sản phẩm theo giá: Thấp đến cao
    it('Lọc sản phẩm theo giá: Thấp đến cao', () => {
        cy.get('#twotabsearchtextbox').then(() => {
            const product = ['Caderno', 'Smartphone'];
            for (var i = 0; i < product.length; i++) {
                cy.get('#twotabsearchtextbox').type(product[i]); // Nhập từ khóa tìm kiếm
                cy.get('#nav-search-submit-button').click(); // Nhấn nút tìm kiếm
                cy.get('[data-component-type="s-result-info-bar"]').should('contain', product[i]); // Kiểm tra trong thanh thông báo tìm kiếm có sản phẩm hay không

                cy.get('#s-result-sort-select').select('Preço: Do menor para o maior', { force: true }); // Chọn lọc giá từ thấp đến cao
                cy.get('.a-dropdown-prompt').should('contain', 'Preço: Do menor para o maior'); // Kiểm tra xem đã chọn đúng lọc giá hay chưa
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

                cy.get('#s-result-sort-select').select('Preço: Do maior para o menor', { force: true }); // Chọn lọc giá từ cao đến thấp
                cy.get('.a-dropdown-prompt').should('contain', 'Preço: Do maior para o menor'); // Kiểm tra xem đã chọn đúng lọc giá hay chưa
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

                cy.get('#s-result-sort-select').select('Méd. Avaliações de clientes', { force: true }); // Chọn lọc đánh giá trung bình
                cy.get('.a-dropdown-prompt').should('contain', 'Méd. Avaliações de clientes'); // Kiểm tra xem đã chọn đúng lọc đánh giá hay chưa
                cy.go('back'); // Quay lại trang trước
                cy.go('back'); // Quay lại trang trước
            }
        });

    });

});
