import Realm from "realm";


export class User extends Realm.Object<User> {
  _id!: Realm.BSON.ObjectId;
  username!: string
  pronouns!: string
  static schema: Realm.ObjectSchema = {
    name: "User",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      username: "string",
      pronouns: "string",
    },
  };
}