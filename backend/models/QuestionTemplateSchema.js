import { Schema,model } from "mongoose";
import { QuestionTypeEnum ,QuestionDifficultyEnum } from "../types/index.js";
import { QuestionTemplateMetadataSchema } from "./index.js";

export const QuestionTemplateSchema = new Schema({
  type: {
    type: String,
    enum: Object.values(QuestionTypeEnum),
    required: true,
  },
  questionCount: {
    type: Number,
    required: true,
    min: 1,
  },
  marksPerQuestion: {
    type: Number,
    required: true,
    min: 0,
  },
  difficultyLevel: {
    type: String,
    enum: Object.values(QuestionDifficultyEnum),
    required: true,
  },
  customPrompt: {
    type: String,
  },
  metadata: {
    type: QuestionTemplateMetadataSchema,
    required: true,
  },
});

export const QuestionTemplate = model("QuestionTemplate", QuestionTemplateSchema)

