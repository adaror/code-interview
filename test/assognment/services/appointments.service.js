const logger = require('winston');
const db = require('../../providers/providers.json');

function checkForAviability(dates, desireDate) {
    for (let i=0; i < dates.length; i++) {
        if (desireDate > dates[i].from && desireDate < dates[i].to) {
            return true;
        }
    }

    return false;
}

function searchForAppointments(specialty, date, minScore) {

    const result = db.filter((provider) => {
        return provider.specialties.includes(specialty) && provider.score >= minScore && checkForAviability(provider.availableDates, date);
    });

    if (result && result.length > 0) {
        return result.map((provider) => {
            return provider.name
        });
    }

    return result;
}

function checkForAppointment(name, date) {

    const isAvialble = db.filter((provider) => {
        return provider.name === name && checkForAviability(provider.availableDates, date)})

    return isAvialble && isAvialble.length > 0;
}

module.exports = {
    searchForAppointments,
    checkForAppointment
}