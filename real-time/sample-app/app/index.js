import {Router} from 'express';
import checkAuth from "./check-auth.js";


const router = Router();

router.get('/', (request, response) => {
    response.render('login');
});

router.post('/login', (request, response) => {
    const user = request.body.username;
    const pw = request.body.password;

    // you are able to do request.session thanks to "cookie-session": "^2.1.1",
    if (user === 'u1' && pw === 'test') {
        request.session.user = 'u1';
    } else if (user === 'u2' && pw === 'test') {
        request.session.user = 'u2';
    }

    response.redirect('/chat');

});

// checkAuth is injected as a type of intersector
router.get('/chat',checkAuth, (request, response) => {
    response.render('chat', {user: request.session.user});
});

router.get('/logout', (request, response) => {
    delete request.session.user;
    response.redirect('/');
});

export { router};