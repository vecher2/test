const assert = require('assert');

describe('Page opening', function () {

    it('get title', function(){
        browser.url('/'); //open baseUrl + string passed in .url() function
        let title = browser.getTitle(); //get page title and assign it to the "title" variable
        assert.equal(title, 'Bug Tracker', 'Title is incorrect'); //compare that "title" variable equals to "Bug Tracker" and error-message if not
    })

    it('get header title', function(){
        let title = browser.getTitle(); //get page title and assign it to the "title" variable
        assert.equal(title, 'Bug Tracker', 'Title is incorrect'); //compare that "title" variable equals to "Bug Tracker" and error-message if not
    })

});