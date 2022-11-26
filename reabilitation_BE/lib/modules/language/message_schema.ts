import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;


// export interface IMessage {
//   keyId: String;  // IKey _id
//   languageId: String; // ILanguage _id
//   value: String;
// }
const message_schema = new Schema({
  keyId: String,
  languageId: String,
  value: String,
  isDefault: Boolean,
});

export default mongoose.model('messages', message_schema);