describe('Swipes', function () {
    jasmine.getFixtures().fixturesPath = 'fixtures/';

    var $swipes,
        spy;

    beforeEach(function () {
        loadFixtures('swipes.html');
        $swipes = $('.swipes');
    });

    it('should trigger a "swipe" event', function () {
        spy = spyOnEvent('.swipes', 'swipe');
        $swipes.trigger('swipe');
        expect(spy).toHaveBeenTriggered();
    });

    it('should originate from element "swipe" event is bound to', function () {
        spy = spyOnEvent('.swipes', 'swipe');
        $swipes.trigger('swipe');
        expect('swipe').toHaveBeenTriggeredOn('.swipes');
    });

});