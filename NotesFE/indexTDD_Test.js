let expect = Chai.expect;

describe('MyFunctions', function() {
    describe('#doSomething', function() {
        it('should concatenate the two parameters', function() {
            let x = doSomething('Hello', 5);
            expect(x).to.equal('Hello5');
        });

        it('should throw an error if first parameter is not a string', function() {
            expect(function() {
                doSomething(5, 5);
            }).to.throw(Error);
        });
    });
});