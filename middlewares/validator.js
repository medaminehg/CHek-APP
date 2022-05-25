const { check, validationResult } = require("express-validator")


exports.registerRules = () => [
    check(`fullName`, `this filed is required`).notEmpty(),
    check(`email`, `this is not a valid email`).isEmail(),
    check(`phone`, `this filed is required`).notEmpty(),
    check(`phone`, `this is not a valid phone`).isLength({ min: 8 }),
    check(`password`, `this is not a valid password`).isLength({ min: 6, max: 20 }),
]


exports.validator = (req, res, next) => {
    const errors = validationResult(req)
    errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() })
}