const auth = require('http-auth');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { check, validationResult } = require('express-validator');

const router = express.Router();
const Registration = mongoose.model('Registration');
const basic = auth.basic({
    file: path.join(__dirname, '../users.htpasswd'),
});

router.get('/', (req, res) => {
    res.render('form', { title: 'Registration form' });
});

router.post('/', [
        check('fname')
        .isLength({ min: 1 })
        .withMessage('Please enter a first name'),
        check('lname')
        .isLength({ min: 1 })
        .withMessage('Please enter a last name'),
        check('gender')
        .isLength({ min: 1 })
        .withMessage('Please enter a gender'),
        check('birthday')
        .isLength({ min: 1 })
        .withMessage('Please enter a date'),
        check('sin')
        .isLength({ min: 1 })
        .withMessage('Please enter a S.I.N'),
        check('healthC')
        .isLength({ min: 1 })
        .withMessage('Please enter a health card number'),
        check('physician')
        .isLength({ min: 1 })
        .withMessage('Please enter your family physician name'),
        check('phone')
        .isLength({ min: 1 })
        .withMessage('Please enter a phone number'),
        check('email')
        .isLength({ min: 1 })
        .withMessage('Please enter an email'),
        check('address')
        .isLength({ min: 1 })
        .withMessage('Please enter a street address'),
        check('city')
        .isLength({ min: 1 })
        .withMessage('Please enter a city'),
        check('province')
        .isLength({ min: 1 })
        .withMessage('Please enter a province'),
        check('vstatus')
        .isLength({ min: 1 })
        .withMessage('Please choose a vaccine status'),
    ],
    (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            const registration = new Registration(req.body);
            registration.save()
                .then(() => { res.send('Thank you for your registration!'); })
                .catch((err) => {
                    console.log(err);
                    res.send('Sorry! Something went wrong.');
                });
        } else {
            res.render('form', {
                title: 'Registration form',
                errors: errors.array(),
                data: req.body,
            });
        }
    });

router.get('/registrations', basic.check((req, res) => {
    Registration.find()
        .then((registrations) => {
            res.render('index', { title: 'Listing registrations', registrations });
        })
        .catch((err) => {
            console.log(err);
            res.send('Sorry! Something went wrong.');
        });
}));

module.exports = router;