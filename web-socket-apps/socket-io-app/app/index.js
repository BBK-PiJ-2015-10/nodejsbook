import {Router} from 'express';
import checkAuth from "./check-auth.js";

export default function init(logoutWebsocket) {

    const router = Router();

    router.get('/', (request, response) => {
        response.render('login');
    });

    router.post('/login', (request, response) => {
        const user = request.body.username;
        const pw = request.body.password;

        // you are able to do request.session thanks to "cookie-session": "^2.1.1",
        if (user === 'heidi' && pw === 'test') {
            request.session.user = 'heidi';
        } else if (user === 'ale' && pw === 'test') {
            request.session.user = 'ale';
        }

        response.redirect('/chat');

    });

// checkAuth is injected as a type of intersector
    router.get('/chat', checkAuth, (request, response) => {
        response.render('chat', {user: request.session.user});
    });

    router.get('/logout', (request, response) => {
        logoutWebsocket(request.session.user);
        delete request.session.user;
        response.redirect('/');
    });

    return router;

}
//export { router};