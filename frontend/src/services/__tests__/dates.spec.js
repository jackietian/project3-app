import { getCurrentDate, getMonth } from '../dates'

describe('test dates functions', () => {
    it('test getCurrentDate', () => {
        const result = getCurrentDate()
        expect(result.toLocaleString()).toBe(new Date().toLocaleString())
    })

    it('test getMonth', () => {
        const date = new Date()
        const month = getMonth(date)
        expect(month).toBe(date.getMonth())
    })
})
