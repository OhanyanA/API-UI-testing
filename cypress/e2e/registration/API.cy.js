describe("Register in 'NopCommerce'", function () {
    it("Register in 'NopCommerce' via API", function () {
        cy.request({
            method: 'POST',
            url: 'https://demo.nopcommerce.com/register?returnurl=%2F',
            body: {
                "Name": "tester13",
                'Email': 'test013test@mail.com',
                'Password': '123456ar',
                '__RequestVerificationToke': 'CfDJ8KkhqTnOC_VCoY3JmzsAgL4Xaf39w5gL6cehjs13S4Y-ZugbBXr0feWcd05JFNxnROsgk6c7lBoupIkjyNnKjCz8A2lENdeyXMPxBTdrBhX2tovc-2R5Bqv9vkkfWiKrqlcFDNSSObnmbCSyrpyQaIM',
            },
            headers: {
                Authorization: 'Bearer uid_1c5246eee3_mdy6mzy6mze'
            }
        }).then((GET) => {
            expect(GET.status).to.eq(201)
        });
    });
})
