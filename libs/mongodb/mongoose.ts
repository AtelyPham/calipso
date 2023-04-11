import mongoose, { Mongoose } from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;

let conn: Mongoose;

async function connect() {
  if (!conn) {
    conn = await mongoose
      .connect(uri, {
        bufferCommands: false,
      })
      .then(mongoose => {
        return mongoose;
      });
  }

  return conn;
}

async function disconnect() {
  if (!conn) {
    return;
  }
  await conn.disconnect();
}

const db = { connect, disconnect };

export default db;
