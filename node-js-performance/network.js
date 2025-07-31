import express from 'express';


const app = express();

app.get('/',(request,response) => {
    setTimeout(() => {
        let payload = new Array(10000000)
            .fill('xxx')
            .map(c => c.toString())
            .reduce((a,b) => a + b)
        response.send(payload);
        },
        2000
    )
});

app.listen(8080,() => {
    console.log('Express based server started on http://localhost:8080')
    }
)