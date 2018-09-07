
$(function() {

    describe('RSS Feeds', function() {
        // this test makes sure that allFeeds is defined and not 0 length
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // here we make sure that the urls of each feed are legit
        it('urls not empty', function(){
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
                //should use regex here and make sure it has a https://*.\.com or something like that.
            }
        });

       // here we make sure that the names of all the feeds are legit
        it('names not empty', function(){
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });

    });
  
    describe('The menu', function(){

        //makes sure menu is hidden by defualts
        it('is hidden by defualt',function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        //when click menu icon menu appears/disappears
        it('is visiable when menu icon is clicked',function(){
           $('.menu-icon-link').trigger('click');
           expect($('body').hasClass('menu-hidden')).toBe(false);
           $('.menu-icon-link').trigger('click');
           expect($('body').hasClass('menu-hidden')).toBe(true);
       });
    });

    describe('Initial Entries', function(){
        //makes sure there is an entry in feed container. 
        beforeEach(function(done){
            loadFeed(0,function(){
                done();
            })
        });

        it('actually has at least a single entry', function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function(){
       //make sure new feed is different from old one.

        let oldFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeed = $('.feed').html();
                loadFeed(1, function(){
                    done()
                });
            });
        });

        it('should be different from old one', function(){
            expect($('.feed').html()).not.toBe(oldFeed);
        });

    });    
}());
