const logger = require('winston');
const appointmentsService = require('../services/appointments.service');

async function getAppointments(req, res) {
    try {
        const {specialty, date, minScore} = req.query;
        let minimumScore = parseFloat(minScore);
        const results = await appointmentsService.searchForAppointments(specialty, date, minimumScore)
        res.status(200).send(results);
    } catch (err) {
        logger.error(`error in getAppointments, msg: ${err.message} `,err);
        res.status(500).send(err.message);
    }
}

async function checkForAppointment(req, res) {
    try {
        const {name, date } = req.body;
        const results = await appointmentsService.checkForAppointment(name, date);

        if (!results) {
            res.status(400).send('not available');
            return;
        }

        res.status(200).send('ok');
    } catch (err) {
        logger.error(`error in getAppointments, msg: ${err.message} `,err);
        res.status(500).send(err.message);
    }
}

module.exports = {
    getAppointments,
    checkForAppointment
}