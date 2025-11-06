import {Database} from "@nozbe/watermelondb"
import sqlite from "@nozbe/watermelondb/adapters/sqlite";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite" 
import SQLCipher from "react-native-sqlcipher-storage";

SQLCipher.enablePromise(true);

async function getSQLCipherInstance(key: string) {
  const sqlcipher = await SQLCipher.openDatabase({
    name: "haj.db",
    key: key,
    location: "default",
  })
  return sqlcipher;
}

async function setUpDatabase(key="") 
{
  const sqlcipherInstance = await getSQLCipherInstance(key);
  
  
}