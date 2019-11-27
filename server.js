/* eslint-disable */
const configurations = require("./configuration_properties.json");
const fs = require("fs");
const https = require("https");
const http = require("http");
const handler = require("serve-handler"),
    {
        enableSecureMode
    } = configurations.serverSettings,
    {
        portNumber
    } = configurations.serverSettings,
    key = fs.readFileSync("./SSL/certs/server.key"),
    certificate = fs.readFileSync("./SSL/certs/server.cert");

function api(request, response) {
    var body = "";
    request.on('data', function (data) {
        body += data;
        if (request.method == 'POST') {
            fs.writeFile('./configuration_properties.json', body, err => {
                if (err) {
                    console.log('Error', err)
                } else {}
            })
        } else {

        }
    });
}
if (enableSecureMode) {
    // Run application in HTTPS
    const server = https.createServer({
        "key": key,
        "cert": certificate
    }, (request, response) => {
        api(request, response);
        return handler(request, response);
    });
    server.listen(portNumber, () => {
        console.log("Running at https://localhost:" + portNumber);
    });
} else {
    // Run application in HTTP
    const server = http.createServer((request, response) => {
        api(request, response);
        return handler(request, response);
    });
    server.listen(portNumber, () => {
        console.log("Running at http://localhost:" + portNumber);
    });
}