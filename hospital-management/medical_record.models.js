import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
  name: {
  type: String,
  required: true
  },
  dateOfBirth: {
    type: String,
    required: true
  },
  bloodGroup: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  conatactDetails: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ["M" , "F" , "O"],
    required: true
  },
  medications: {
    type: String,
    required: true
  },
  medicalHistory: {
    type:String,
    required:true
  }
},
 {timestamps: true}
);

export const MedicalRecord = mongoose.model("MedicalRecord" , medicalRecordSchema);