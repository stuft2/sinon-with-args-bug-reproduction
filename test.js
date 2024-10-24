import { test } from 'node:test'
import * as assert from 'node:assert/strict'
import * as sinon from 'sinon'
import './index.js'

test ('the onConstructor behavior does not throw', (t) => {
    const stub = sinon.stub()
    assert.doesNotThrow(() => stub.onConstructor(Error).resolves(true))
})
