/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("13juwawoe6lxtj8")

  // remove
  collection.schema.removeField("id9envdh")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("13juwawoe6lxtj8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "id9envdh",
    "name": "Receipt_url",
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

  return dao.saveCollection(collection)
})
