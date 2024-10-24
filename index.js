import * as sinon from 'sinon'

sinon.addBehavior('onConstructor', function (fake, Constructor) {
    fake.withArgs(sinon.match.instanceOf(Constructor))
})
