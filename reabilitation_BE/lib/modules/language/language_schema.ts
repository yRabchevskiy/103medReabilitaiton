import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const language_schema = new Schema({
  name: String,
  title: String,
  description: String,
  isDefault: Boolean,
});

export default mongoose.model('languages', language_schema);