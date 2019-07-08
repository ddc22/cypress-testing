let webShopLocal = "http://0.0.0.0:8081/";
let webShopTrunk = "http://10.11.1.165:39869/";
let webShop25 = "http://10.10.9.4:39869/";

describe("Is working webshop", function() {
  it("Visit the webshop instance local", function() {
    cy.visit(webShopLocal);
  });
});

describe("Is working webshop trunk", function() {
  it("Visit the webshop instance trunk", function() {
    cy.visit(webShopTrunk);
  });
});

describe("Is working webshop", function() {
  it("Visit the webshop instance 25", function() {
    cy.visit(webShop25);
  });
});
