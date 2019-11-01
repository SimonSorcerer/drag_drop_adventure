function ClassHelper(initialState) {
    var classes = [];

    if (initialState) {
        classes = classes.concat(initialState);
    }

    this.add = function (className) {
        var ref = classes.indexOf(className);

        if (ref < 0) {
            classes.push(className);
        }
    }

    this.remove = function (className) {
        var ref = classes.indexOf(className);

        if (ref >= 0) {
            classes.splice(ref, 1);
        }
    }

    this.toString = function () {
        return classes.join(' ');
    }
}

export default {
    build: function (initialState) {
        return new ClassHelper(initialState);
    }
};
