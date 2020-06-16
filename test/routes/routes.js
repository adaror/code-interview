const appointmentsController = require('../controllers/appointments.controller');
const validationsMiddlewares = require('../middlewares/validations.middlewares');

module.exports = (app) => {
    app.get('/appointments',
        validationsMiddlewares.validateAppointmentsSchema,
        appointmentsController.getAppointments
    )

    app.post('/appointments',
    validationsMiddlewares.validateInsertAppointmentsSchema,
    appointmentsController.checkForAppointment
)
}