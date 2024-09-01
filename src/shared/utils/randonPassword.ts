export const randomPassword = (length: number = 12): string => {
    const caracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?[]{}|';
    let pass = '';
    for (let i = 0; i < length; i++) {
        const idxRandom = Math.floor(Math.random() * caracters.length);
        pass += caracters[idxRandom];
    }
    return pass;
}