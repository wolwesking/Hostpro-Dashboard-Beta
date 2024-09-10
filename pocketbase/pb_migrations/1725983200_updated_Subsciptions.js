/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("13juwawoe6lxtj8")

  // remove
  collection.schema.removeField("gwcxwbd3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8gyvjivk",
    "name": "service",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "basic"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("13juwawoe6lxtj8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gwcxwbd3",
    "name": "dashpass",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("8gyvjivk")

  return dao.saveCollection(collection)
})
