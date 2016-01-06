function ItemManager() {
    var cache = {
        padlock_key: {
            label: 'key',
            description: 'Small simple brass key.',
            canPick: true
        },
        item: {
            label: 'item',
            canPick: true
        },
        padlock: {
            label: 'padlock',
            description: 'Very simple but sturdy padlock.'
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