import {MongoClient} from "mongodb";

const url = 'mongodb://localhost:27017';
const dbName = 'users';
const usersCollectionName = 'users'

async function connect() {
    console.log('Requesting client')
    const client = await MongoClient.connect(url);
    console.log('Requesting db')
    const db = client.db(dbName);
    const usersCollection = db.collection(usersCollectionName);
    console.log(`User collection and db ready ${usersCollection} and ${db}`)
    return {
        client,
        usersCollection
    }
}

export async function getAll() {
    const {client, usersCollection} = await connect();
    const data = await usersCollection.find().toArray();
    client.close();
    return data;
}

export async function create(userData) {
    console.log('Will request client and connection')
    const {client, usersCollection} = await connect();
    console.log(`Received client and connection will insert ${userData}`)
    const userObject = typeof userData === 'string'
        ? { name: userData }
        : userData;
    await usersCollection.insertOne(userObject);
    client.close();
    return userData;
}

