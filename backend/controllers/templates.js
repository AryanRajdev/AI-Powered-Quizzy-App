import { Template, QuestionTemplate } from "../models/index.js";

export const createTemplate = async (req, res, next) => {
  try {
    const template = new Template(req.body);

    const savedTemplate = await template.save();

    return res.status(201).json({
      success: true,
      data: savedTemplate,
    });
  } catch (e) {
    const error = new Error("Failed to create template", {
      cause: e,
    });
    return next(error);
  }
};

export const getAllTemplates = async (req, res, next) => {
  try {
    const templates = await Template.find({});

    return res.status(200).json({ success: true, data: templates });
  } catch (e) {
    const error = new Error("Failed to fetch templates", {
      cause: e,
    });
    return next(error);
  }
};

export const getTemplateById = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!id) {
      const error = new Error("Template ID is required", {
        cause: new Error("Template ID is required"),
      });
      return next(error);
    }

    const template = await Template.findById(id);

    return res.status(200).json({ success: true, data: template });
  } catch (e) {
    const error = new Error("Failed to fetch template by ID", {
      cause: e,
    });
    return next(error);
  }
};

export const deleteTemplateById = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id) {
      const error = new Error("Template ID is required", {
        cause: new Error("Template ID is required"),
      });
      return next(error);
    }

    const template = await Template.findByIdAndDelete(id);

    return res.status(200).json({ success: true, data: template });
  } catch (e) {
    const error = new Error(`Failed to delete template by ID: ${id}`, {
      cause: e,
    });
    return next(error);
  }
};
