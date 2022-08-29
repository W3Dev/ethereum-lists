const chainApi = require('./api/chains')

module.exports = class Explorer{
    chainLists = []
    constructor(){
        this.chainLists = chainApi()
    }
    list(filters = {}){
        if (filters.sortBy) {
            const sortByQuery = filters.sortBy;
            const sortBy = sortByQuery.replace("-","")

            let sortedData
            if (sortByQuery.startsWith("-")) {
                sortedData = this.chainLists.sort(function (a, b) {
                    return b[sortBy] - a[sortBy];
                });
            } else {
                sortedData = this.chainLists.sort(function (a, b) {
                    return a[sortBy] - b[sortBy];
                });
            }
            return sortedData.map(e => e[sortBy])
        }
        return this.chainLists
    }
    search(query = ''){
        return this.chainLists.filter(item => {
            return item.name.toLowerCase().includes(query.toLowerCase()) || (item.title && item.title.toLowerCase().includes(query.toLowerCase()))
        })
    }
}