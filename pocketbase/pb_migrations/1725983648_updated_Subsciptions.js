/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("13juwawoe6lxtj8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4oa8jhch",
    "name": "Owner",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("13juwawoe6lxtj8")

  // remove
  collection.schema.removeField("4oa8jhch")

  return dao.saveCollection(collection)
})
