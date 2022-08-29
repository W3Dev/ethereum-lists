const fetch = require('sync-fetch');

const CHAINLIST_URL = "https://chainid.network/chains_mini.json";

function ListChains(filters = {}) {
    const data = fetch(CHAINLIST_URL).json()
    return data
}

module.exports = ListChains