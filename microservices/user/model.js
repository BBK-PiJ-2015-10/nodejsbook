import {MongoClient} from "mongodb";

const url = 'mongodb://mongodb:27017';
const dbName = 'users';
const usersCollectionName = 'users'

async function connect() {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const userCollection = db.collection(usersCollectionName);
    return {
        client,
        userCollection
    }
}

export async function getAll() {
    const {client, usersCollection} = await connect();
    const data = await usersCollection.find().toArray();
    client.close();
    return data;
}

export async function create(user) {
    const {client, usersCollection} = await connect();
    await usersCollection.insertOne(user);
    client.close();
    return user;
}

