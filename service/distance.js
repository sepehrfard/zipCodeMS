var request = require('request');

const apiK = '2pVtZQitdzfAbqw9EudhkwC0aYSWXg8SvrPPlpYE0By1GbuTgkxW6rRbcO0vban6';
const apiURL = 'https://www.zipcodeapi.com/rest/';

var distance = {
    find: function (req, res, next) {
        request(apiURL + apiK + '/distance.json/' +
            req.params.zipcode1 + '/' +
            req.params.zipcode2 + '/mile',
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    response = JSON.parse(body)
                    res.send(response);
                } else {
                    console.log(response.statusCode + response.body)
                    res.send({ distance: -1 })
                };
            })
    }
}
module.exports = distance;