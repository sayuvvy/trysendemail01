'use strict';

const emailview = (req, res, next) =>{
    res.render('email');
}

const sendemail = (req, res, next) =>{
    res.render('email');
}

module.exports = {emailview, sendemail}