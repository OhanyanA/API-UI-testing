class commonPages {

    static clickBtn(btn) {
        cy.get(btn).click()
    };

    static fillInField(field, value) {
        cy.get(field)
            .type(value)
    };
}

export default commonPages