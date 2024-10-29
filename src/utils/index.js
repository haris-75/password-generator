import { clsx } from "clsx";
import { toast } from 'react-toastify';
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function generatePass(length = 8, options) {
    // Define character sets
    const chars = {
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };

    // Create character pool based on options
    let charPool = '';
    if (options?.uppercase) charPool += chars.uppercase;
    if (options?.lowercase) charPool += chars.lowercase;
    if (options?.numbers) charPool += chars.numbers;
    if (options?.symbols) charPool += chars.symbols;

    // If no options selected, default to lowercase
    if (charPool === '') charPool = chars.lowercase;

    // Generate random string
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        result += charPool[randomIndex];
    }

    return result;
}

export function copyToClipboard(text) {
  toast('Password Copied to clipboard')
  navigator.clipboard.writeText(text);
}

export function calculatePasswordStrength(password) {
    let strength = 0;
    
    if (password.length > 8) {
        strength++;
    }
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        strength++;
    }
    
    if (/\d/.test(password)) {
        strength++;
    }

    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        strength++;
    }
    
    return strength;
}