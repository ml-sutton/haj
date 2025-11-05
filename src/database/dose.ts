export class Dose extends Realm.Object<Dose> {
  _id!: Realm.BSON.ObjectId;
  scheduledTime: string;
  status: 'scheduled' | 'taken' | 'missed' | 'skipped';
  takenAt?: Date;
  notes?: string;
  createdAt: string;
  updatedAt: Date;
  static schema: Realm.ObjectSchema = {
    name: "Dose",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      dosageId: "string",
      userId: "string",
      scheduledTime: "date",
      status: "string",
      takenAt: "date?",
      notes: "string?",
      createdAt: "date",
      updatedAt: "date",
    },
  };
}