




module.exports = function (request, response, next) {
  var startTime = +new Date();
  var stream = process.stdout;
  var url = request.url;
  var method = request.method;
  var duration = null;

  response.on('finish', function () {
    duration = +new Date() - startTime;
    var loadMessage = "\n The " + method + " request to: " + url + " took " + duration + " ms \n"
    stream.write(loadMessage);

  });

  next();
};