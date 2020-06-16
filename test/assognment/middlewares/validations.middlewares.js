const joi = require('joi');

const validationOptions = {
    abortEarly: false,
  };

const appointmentsSchema = joi.object({
    specialty: joi.string().required(),
    date: joi.date().timestamp().required(),
    minScore: joi.number().min(0).required()
});

const insertAppointmentsSchema = joi.object({
    name: joi.string().required(),
    date: joi.date().timestamp().required()
});

const validateAppointmentsSchema = (req, res, next) => {
    const validationResult = joi.validate(req.query, appointmentsSchema, validationOptions);
    validationResult.error ? res.status(400).send(validationResult.error.message) : next();
};

const validateInsertAppointmentsSchema = (req, res, next) => {
    const validationResult = joi.validate(req.body, insertAppointmentsSchema, validationOptions);
    validationResult.error ? res.status(400).send(validationResult.error.message) : next();
};

module.exports = {
    validateAppointmentsSchema,
    validateInsertAppointmentsSchema
}