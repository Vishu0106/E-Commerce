
export const isMailValid = (email) => {
    const emailRegex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
    return emailRegex.test(email);
}

export const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
}