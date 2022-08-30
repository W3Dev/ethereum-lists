# Etherium Lists

Curated Ethereum Lists from Javascript Library

## Usage

```
const explorer = new Explorer()

const allList = explorer.list()

// Sort the List by chainID
const sortedList = explorer.list({ sortBy: 'chainId' })

// Reverse Sorted
const reverseSortedList = explorer.list({ sortBy: '-chainId' })

// Search the chainlist by name
const searchList = explorer.search('eth')

console.log({ allList, sortedList, searchList })
```
