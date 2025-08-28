import jwt from "jsonwebtoken";
import {request, Router} from "express";
import {getAll} from "./user/model.js";
import {register} from "./connect.js";

const router = Router();

router.post('/', async (request, response) => {
        try {
            const {id} = getAll();
            register(id, (users) => {
                const user = users.find(
                    (u) =>
                        u.username === request.body.username &&
                        u.password === request.body.password
                );

                if (user) {
                    const payload = {...user};
                    delete payload.password;
                    const token = jwt.sign(payload, 'secret');
                    response.json({token});
                } else {
                    response.status(401).json('unauthorized');
                }

            })
        } catch (e) {
            console.log(`Error due to ${e}`)
            response.status(401).json('unauthorized');
        }
    }
);