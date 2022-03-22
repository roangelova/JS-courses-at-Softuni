import * as authService from '../services/authService.js';

export function authMiddleware(ctx, next) {
    let user = authService.getUser();

    if (user) {
        ctx.user = user;
    }

    next();

}