const KEY = 'magicEmail'

export const setMagicEmail = (email: string) => localStorage.setItem(KEY, email)

export const getMagicEmail = () => localStorage.getItem(KEY)

export const clearMagicEmail = () => localStorage.removeItem(KEY)
