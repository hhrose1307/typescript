import * as express from 'express';

const app = express();


app.get('/', (req, res) => {
    res.send({ success: true });
});

interface CongParams {
    a: string;
    b: string;
}

app.get('/cong/:a/:b', (req, res) => {
    const params: CongParams = req.params;
    res.send({ success: true, result: +params.a + +params.b});
});

app.listen(3000, () => console.log('Server started.'));

