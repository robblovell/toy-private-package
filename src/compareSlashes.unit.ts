import {compareSlashes} from './compareSlashes'

describe('compareSlashes', () => {

    const oneSlash = '/A.md'
    const anotherOneSlash = '/b.md'
    const twoSlashes = '/a/B'
    const threeSlashes = '/B/a/c'

    test('Compares two with different number of slashes ', () => {
        expect(compareSlashes(oneSlash, twoSlashes)).toBe(-1)
        expect(compareSlashes(twoSlashes, oneSlash)).toBe(1)
        expect(compareSlashes(oneSlash, threeSlashes)).toBe(-1)
        expect(compareSlashes(threeSlashes, twoSlashes)).toBe(1)
    })

    test('Compares two with the same number of slashes', () => {
        expect(compareSlashes(oneSlash, anotherOneSlash)).toBe(0)
    })
})