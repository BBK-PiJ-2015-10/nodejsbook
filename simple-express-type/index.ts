
import express, { Request, Response} from 'express';


const app = express();

app.get('/',(req: Request, res: Response): void => {
	res.send('Hello from express with typeScript');
});


app.listen(8080,(): void =>
	console.log('Express based server listening to http://localhost:8080'),
);


