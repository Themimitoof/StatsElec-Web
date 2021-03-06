var bookshelf = require("../databaseConnector");

var Model = bookshelf.Model.extend({
    tableName: "counters",
    hasTimestamps: ["created_at", "updated_at"]
});

var Collection = bookshelf.Collection.extend({
    tableName: Model
});

module.exports = { Model, Collection };