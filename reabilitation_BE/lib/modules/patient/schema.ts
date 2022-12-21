import * as mongoose from 'mongoose';
import visitSchema from './visitSchema';

const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  rank: {
    type: String,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  visits: {
    type: Array,
    default: [visitSchema]
  },
  birthday: {
    type: Date,
    default: Date.now,
    validate: {
      validator: function (params: string | Date) {
        return new Date(params);
      },
      message: 'Incorrect birthday'
    }
  },
  email: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum : ['Male','Famele'],
    required: false,
    default: 'Male'
  },
});

export default mongoose.model('patients', schema);