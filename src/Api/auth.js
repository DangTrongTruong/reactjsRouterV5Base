import { sendPost } from './axios';

export const register = (payload) => sendPost(`/auth/register`, payload);

export const login = (payload) => sendPost(`/auth/login`, payload);

export const logout = (payload) => sendPost(`/auth/logout`, payload);