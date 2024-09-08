/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "13juwawoe6lxtj8",
    "created": "2024-09-07 15:44:10.335Z",
    "updated": "2024-09-07 15:44:10.335Z",
    "name": "Subsciptions",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("13juwawoe6lxtj8");

  return dao.deleteCollection(collection);
})
