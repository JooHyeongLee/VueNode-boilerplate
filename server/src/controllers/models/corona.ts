import { Schema, model, Document, Model } from 'mongoose';

declare interface Info extends Document{
  seq: number;
  country: string;
  action: string;
  date: Date;
}

// export interface MemberModel extends Model<Info> {};
const schema =  new Schema({
    seq: {type: Number, required: true},
    country: { type: String, required: true },
    action: { type: String, required: true },
    date: { type: Date, default: Date.now }
},{collection: 'corona'});

export class Corona {

  private _model: Model<Info>;
  
  constructor() {
    this._model = model<Info>('Corona', schema);
  }

  public get model(): Model<Info> {
      return this._model
  }
}


/* var MemberSchema = new Schema({
  email: {type: String},
  password: String
}, {collection: 'member'});

var Member = mongoose.model<Info>("Member", MemberSchema); */
// export {Member}
