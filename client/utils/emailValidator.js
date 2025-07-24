// utils/emailValidator.js
export default function validateEmails(rawEmails = []) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const uniqueSet = new Set();

    const valid = [];
    const invalid = [];

    rawEmails.forEach((emailRaw) => {
        const email = emailRaw.trim().toLowerCase();

        if (!email || uniqueSet.has(email)) return;

        uniqueSet.add(email);

        if (emailRegex.test(email)) {
            valid.push(email);
        } else {
            invalid.push(email);
        }
    });

    return { valid, invalid };
}
