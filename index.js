import https from 'https';

const getQueries = () => {
    var query = window.location.search.slice(1);
    var queries = {};
    if (!query) {
      return queries;
    }
  
    query.split('&').forEach((query) => {
      var [queryName, queryValue] = query.split('=');
      queries[queryName] = queryValue;
    });
  
    return queries;
}

const getPeerCertificateInfo = (hostname='') => {
    return new Promise((resolve, reject) => {
        // use ssl to connect
        const options = {
            headers: {
                'mode': 'no-cors'
            },
            hostname: hostname,
            port: 443,
            path: '/',
            method: 'GET',
            rejectUnauthorized: false
        };

        https.request(options, (res) => {
            resolve(res.socket.getPeerCertificate());
        }).on('error', (e) => {
            console.error(e);
            reject(null);
        }).end();
    });
};

// print certinfo to console
(async () => {
    const queries = getQueries();
    const certInfo = await getPeerCertificateInfo(queries["q"]);
    console.log(certInfo);
})();
