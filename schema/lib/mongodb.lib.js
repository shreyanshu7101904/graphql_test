var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
import 'babel-polyfill';

class MongoDB {
  async connect() {
    const mongodb_url = "mongodb://shreyanshu:7101904a@ds157723.mlab.com:57723/shreyanshu"
    const client = await MongoClient.connect(
      mongodb_url,
      { useNewUrlParser: true }
    )
    return client
  }


  async closeClient(client) {
    return client.close()
  }


  async addOne(db_name, collection_name, doc) {
    const client = await this.connect()
    const db = client.db(db_name)
    const collection = db.collection(collection_name)
    doc['ts_create'] = new Date().getTime()
    doc['ts_update'] = new Date().getTime()
    let response = await collection.insertOne(doc)
    await this.closeClient(client)
    response = response.ops[0]
    response['id'] = response._id
    return response
  }


  async updateOne(db_name, collection_name, new_values) {
    const client = await this.connect()
    const db = client.db(db_name)
    const collection = db.collection(collection_name)
    const id = new_values.id
    new_values['ts_update'] = new Date().getTime()
    delete new_values['id']
    let response = await collection.updateOne(
      {
        "_id": ObjectID(id)
      },
      {
        $set: new_values
      }
    )
    response = await this.findByID(db_name, collection_name, id)
    response['id'] = id
    return response
  }


  async search(db_name, collection_name, query, limit) {
    var options = {
          "limit": 50,
          "sort":"ts_create"
        };
    const client = await this.connect();
    const db = client.db(db_name);
    const collection = db.collection(collection_name);
    if (!query) {
      query = {}
    } else {
      if (query['id']) {
        query['_id'] = ObjectId(query['id'])
        delete query['id']
      }
    }
    const results = await collection.find({}, options).toArray()
    this.closeClient(client)
    for (let i = 0; i < results.length; i++){
      results[i].id = results[i]._id
    }
    return results
  }



  async findByID(db_name, collection_name, id) {
    const client = await this.connect();
    const db = client.db(db_name);
    const collection = db.collection(collection_name);
    let response = await collection.findOne(
      {
        "_id": ObjectID(id)
      }
    )
    response['id'] = id
    return response
  }
}

module.exports.mongodb = new MongoDB();
