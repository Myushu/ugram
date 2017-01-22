const service = require('../services/sample-service');

module.exports = function(app) {

    // Very simple GET.
    app.get('/', (req, res) => {
        return res.send(service.getSample());
    });

    // GET returning a JSON model.
    app.get('/:value', (req, res) => {
       return res.send(service.getParametrizedSample(req.params.value));
    });

    // POST uploading a value in s3.
    // Creates a hello_world.txt file with the content of the body
    app.post('/create', (req, res) => {
        const response = service.uploadSample(req.params.body).then(function(data) {
            return res.send('Upload successful');
        }).catch(function(err) {
            console.log(err);
            res.status(500).send('An error occured');
        });
    });
}
