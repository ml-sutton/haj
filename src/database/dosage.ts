export class Dosage extends Realm.Object<Dosage> {
  _id!: Realm.BSON.ObjectId;
  medicationName!: string;
  medicationType!: 'hormone' | 'blocker';
  dosageAmount!: number;
  dosageUnit!: 'mg' | 'ml' ;
  route!: 'oral' | 'injection' | 'transdermal' | 'sublingual' | 'other';
  isActive!: boolean;
  notes?: string;

  static schema: Realm.ObjectSchema = {
    name: "Dosage",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      id: "string",
      userId: "string",
      medicationName: "string",
      medicationType: "string",
      dosageAmount: "double",
      dosageUnit: "string",
      route: "string",
      isActive: "bool",
      notes: "string?",
    },
  };
}