# Etherium Lists

Curated Ethereum Lists from Javascript Library

## Usage

```javascript
const explorer = new Explorer();

const allList = explorer.list();

// Sort the List by chainID
const sortedList = explorer.list({sortBy: 'chainId'});

// Reverse Sorted
const reverseSortedList = explorer.list({sortBy: '-chainId'});

// Search the chainlist by name
const searchList = explorer.search('eth');

console.log({allList, sortedList, searchList});
```

## Data Source

We are using following data sources in our package.

- [ethereum-lists/chains](https://github.com/ethereum-lists/chains)
- [@MyEtherWallet/ethereum-lists](https://github.com/MyEtherWallet/ethereum-lists)
