const db = require('../db');

const logController = {};

logController.getAllLog = async (req, res, next) => {
  try {
    // later with API key, the condition should check id = API key
    // join with instance table

    // Extension: when the client selected an instance from the dropdown menu
    // select api_key according to the instance_id selected
    // if api_key matches with api_key from user input
    // display query logs
    // else return an error message
    const { label } = req.body;
    const logQuery = `SELECT l.id, l.operation, l.query_name, l.log, l.raw, l.depth, l.latency, l.timestamp
      FROM log l JOIN instance i ON l.api_key = i.api_key
      WHERE label = '${label}'`;
    const clientLog = await db.query(logQuery);
    res.locals.allLog = clientLog.rows;
    return next();
  } catch (err) {
    return next(err);
  }
};

/*
logController.getSuspiciousLog = async (req, res, next) => {
  try {
    const { apiKey } = req.body;
    const suspiciousQuery = `SELECT id, depth, latency FROM Log where api_key = '${apiKey}'`;
    const suspiciousLog = await db.query(suspiciousQuery);
    res.locals.suspiciousLog = clientLog.rows;
    return next();
  } catch(err) {
    return next(err);
  }
}
*/

module.exports = logController;
