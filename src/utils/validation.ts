

class ValidateService {
    checkForSpecialChar (inputString: String):Boolean {
        const specialCharacters = '[`!@#$%^&*()_+-=[]{};\':"\\|,.<>/?~]/';
    
        return specialCharacters.split('').some(specChar => inputString.includes(specChar))
    }
    
    usernameValidate (username: String):string {
        if (username.length < 4) return 'The username should be longer'
        if (this.checkForSpecialChar(username)) return 'The username must not contain special characters'
    
        return ''
    }
    
    passwordValidate (password: String):string {
        const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    
        if (!password.match(regExPassword)) return 'Password must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter'
    
        return ''
    }
    
    passwordsEquality (password: String, passwordRepeat:String):string {
        if (password !== passwordRepeat) return 'Password mismatch'
    
        return ''
    }
    
    phoneValidate (phoneNumber: String):string {
        const phoneValid = '+7 (111) 111 11-11'
        if (phoneNumber.length !== phoneValid.length) return 'Invalid phone number'
    
        return ''
    }
    
    emailValidate (email: String):string {
        const emailValidReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email.match(emailValidReg)) return ''
        return 'Invalid email'
    }
}

export default new ValidateService();