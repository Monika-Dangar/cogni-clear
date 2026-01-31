/**
 * MONGODB / MONGOOSE SCHEMAS
 * 
 * This file serves as the schema definition for your backend database.
 * Use these definitions when setting up your Node.js/Express server.
 */

/*
import mongoose from 'mongoose';

// --- USER SCHEMA ---
const UserSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true,
    trim: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true
  },
  passwordHash: { 
    type: String, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// --- DECISION SCHEMA ---
const DecisionSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
    index: true // Indexed for faster queries by user
  },
  title: { 
    type: String, 
    required: true 
  },
  description: String,
  context: String,
  optionsConsidered: [String],
  emotions: [{
    type: String,
    enum: ['Anxious', 'Excited', 'Confused', 'Confident', 'Pressure', 'Neutral']
  }],
  status: {
    type: String,
    enum: ['DRAFT', 'ANALYZED', 'COMPLETED'],
    default: 'ANALYZED'
  },
  // Deeply nested analysis object
  analysis: {
    summary: String,
    biases: [{
      name: String,
      description: String,
      probability: Number,
      mitigation: String
    }],
    blindSpots: [String],
    alternativePerspectives: [String],
    simulations: [{
      scenario: String,
      outcome: String,
      riskLevel: { type: String, enum: ['Low', 'Medium', 'High'] }
    }],
    clarityScore: Number,
    relatedTags: [String]
  },
  // Outcome tracking
  outcome: String,
  outcomeDate: Date,
  outcomeAnalysis: {
    causalReflection: String,
    biasValidation: String,
    learningPoint: String,
    updatedClarityScore: Number
  },
  tags: [String],
  dateCreated: { 
    type: Date, 
    default: Date.now 
  }
});

export const User = mongoose.model('User', UserSchema);
export const Decision = mongoose.model('Decision', DecisionSchema);
*/

// Mock exports to prevent runtime errors in frontend-only environment
export const Schemas = {
    note: "Uncomment the code above when running in a Node.js environment."
};