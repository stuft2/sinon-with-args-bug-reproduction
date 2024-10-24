import 'sinon'

declare module 'sinon' {
    interface SinonStub {
        onConstructor (ctor: new (...args: any[]) => any): SinonStub
    }
}
