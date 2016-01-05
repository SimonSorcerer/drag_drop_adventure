function ItemManager() {
    var cache = {
        padlock_key: {
            label: 'key',
            canPick: true
        },
        item: {
            label: 'item',
            canPick: true
        },
        padlock: {
            label: 'padlock'
        },
        door: {
            label: 'door'
        },
        passport: {
            label: 'passport',
            canPick: true
        }
    };
    
    this.get = function (id) {
        if (cache[id]) {
            return cache[id];
        }
        
        throw 'Requested item does not exist in the item cache!';
    };
}

module.exports = {
    build: function () {
        return new ItemManager();
    }
};