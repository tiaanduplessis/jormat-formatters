const formatters = require('./')

test('should be defined', () => {
  expect(formatters).toBeDefined()
})

test('should have formatters', () => {
  expect(Array.isArray(formatters.bytes)).toBe(true)
})
