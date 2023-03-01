import joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';

const joiPassword = joi.extend(joiPasswordExtendCore);

const schemaRegister = joi.object({
    email: joi.string()
        .email()
        .required(),

    password: joiPassword
        .string()
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .required(),
})

async function validateRegister(req, res, next) {
    const validation = schemaRegister.validate(req.body, { abortEarly: false });

    if (validation.error) {
        console.log(validation.error.message);
        return res.sendStatus(422);
    }

    next();
}

export { validateRegister };