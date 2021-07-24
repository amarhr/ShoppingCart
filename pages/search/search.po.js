var helper = require('../../helper');

var SearchPage = function() {
    this.searchField = element(by.id('search-query'));

    this.searchButton = element(by.xpath("//button[@value='Search']"));
    this.searchItem = element(by.xpath("//li[2]//img"));

    this.addToCartButton = element(by.xpath("//div[text()='Add to cart']"));
    this.selectDeviceErorrText = element(by.css('.error-515'));
}

module.exports = SearchPage;
