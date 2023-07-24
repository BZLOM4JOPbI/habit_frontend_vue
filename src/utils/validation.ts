const checkForSpecialChar = (inputString: String):Boolean => {
    const specialCharacters = '[`!@#$%^&*()_+-=[]{};\':"\\|,.<>/?~]/';

    return specialCharacters.split('').some(specChar => inputString.includes(specChar))
};


export const usernameValidate = (username: String):string => {
    if (username.length < 4) return 'The username should be longer'
    if (checkForSpecialChar(username)) return 'The username must not contain special characters'

    return ''
};

export const passwordValidate = (password: String):string => {
    const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!password.match(regExPassword)) return 'Password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter'

    return ''
};

export const passwordsEquality = (password: String, passwordRepeat:String):string => {
    if (password !== passwordRepeat) return 'Password mismatch'

    return ''
}

export const phoneValidate = (phoneNumber: String):string => {
    const phoneExample = '+7 (111) 111 11-11'
    if (phoneNumber.length !== phoneExample.length) return 'Invalid phone number'

    return ''
};