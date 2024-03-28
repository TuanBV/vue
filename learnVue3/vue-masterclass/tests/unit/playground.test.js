import { describe, it, expect } from 'vitest'
import { eventOrOdd, multiply } from '@/playground'

describe('basic math', () => {
  it('adds two numbers', () => {
    expect(1 + 1).toBe(2)
  })

  describe('evenOrOdd', () => {
    describe('when number is even', () => {
      it('indicates the number is even', () => {
        expect(eventOrOdd(4)).toBe('Even')
      })
    })

    describe('when number is odd', () => {
      it('indicates the number is even', () => {
        expect(eventOrOdd(5)).toBe('Odd')
      })
    })

    describe('multiply', () => {
      it('multiplies two numbers together', () => {
        expect(multiply(2, 3)).toBe(6)
      })
    })
  })
})
