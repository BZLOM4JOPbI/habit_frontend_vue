export interface UserSignUp {
    userName: string,
    email: string,
    phoneNumber: string,
    password: string,
    passwordRepeat: string,
}

export interface UserSignIn {
    email: string,
    phoneNumber: string,
    password: string,
}