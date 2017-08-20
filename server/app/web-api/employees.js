const rek = require('rekuire');

const employeeApi = rek('employee-repo');
const errorHandling = rek('error-handling');
const baseUrl = '/api/employees';

const createRoutes = app => {
  // Create
  app.post(baseUrl, (req, res, next) => {
    employeeApi.create(req.body)
      .then(newEmployee => res.json(newEmployee))
      .catch((err) => errorHandling.requestErrorHandler(err, req, res));
  });

  // Find
  app.post(baseUrl +'/query', (req, res, next) => {
    employeeApi.find(req.body)
      .then(results => res.json(results))
      .catch((err) => errorHandling.requestErrorHandler(err, req, res));
  });
};

module.exports = {
  createRoutes: createRoutes
}