const express = require('express');
const { handleContactForm } = require('../../controllers/register/contactController'); // Import your controller

const router = express.Router();

router.post('/', handleContactForm); // Endpoint for Google Sign-In

module.exports = router;