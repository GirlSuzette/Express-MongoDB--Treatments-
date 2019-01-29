const { Router } = require('express');
const app = Router();

const Users = require('../controllers/users/users')
const Treatments = require('../controllers/Treatments/Treatments')
const Appointments = require('../controllers/Appointments/Appointments')



//User routes
app.get('/users', Users.index);
app.post('/users', Users.create);
app.get('/users/:userId/treatments', Users.findTreatmentsBy);
app.get('/users/:userId', Users.findBy);
app.put('/users/:userId', Users.updateBy);

// Treatments routes
app.get('/treatments', Treatments.index);
app.get('/treatments/:treatmentId/appointments', Treatments.findAppointmentsBy);
app.post('/treatments', Treatments.create);
app.get('/treatments/:treatmentId', Treatments.findBy);
app.put('/treatments/:treatmentId', Treatments.updateBy);

// Appointment routes
app.get('/appointments', Appointments.index);
app.get('/appointments/:appointmentId', Appointments.findBy);








module.exports = app;