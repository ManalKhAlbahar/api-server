'use strict';

module.exports = (req, res, next) => {
    let m = req.query.name;
    if (!m || m === '') {
        next(`invalid request.`)
    } else {
        next();
    }
}