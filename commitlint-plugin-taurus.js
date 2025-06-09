const TAURUS_REGEX = /^TAURUS-\d+$/;
 
module.exports = {
  rules: {
    'taurus-ticket-format': ({ ticket }) =>
      TAURUS_REGEX.test(ticket)
        ? [true]
        : [false, 'Header must start with TAURUS-<number>: <message>'],
  },
};
