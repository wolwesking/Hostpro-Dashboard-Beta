/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("13juwawoe6lxtj8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sd7yykkv",
    "name": "Payment_ID",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lchzbxf3",
    "name": "CustomerName",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h7uydi0e",
    "name": "CustomerEmail",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sfva5jcq",
    "name": "Amount",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8ahhwrp7",
    "name": "Valid",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8gyvjivk",
    "name": "Service",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "satisfactory_basic"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("13juwawoe6lxtj8")

  // remove
  collection.schema.removeField("sd7yykkv")

  // remove
  collection.schema.removeField("lchzbxf3")

  // remove
  collection.schema.removeField("h7uydi0e")

  // remove
  collection.schema.removeField("sfva5jcq")

  // remove
  collection.schema.removeField("id9envdh")

  // remove
  collection.schema.removeField("8ahhwrp7")

  // update
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
})
