module.exports = {
  auth: '',
  mongo: {
      name: 'pn',
      host: 'localhost',
      port: 27017,
      username: 'grb',
      password: '123456',
      url: function() {
          return ['mongodb://',
              this.username, ':',
              this.password, '@',
              this.host, ':', this.port, '/', this.name, '?authSource=pn'].join('');
      }
  },
  mongoOptions: {
      server: {
          poolSize: 1,
          socketOptions: {
              auto_reconnect: true
          }
      }
  },
  log: {
      isOpenningHTTP: true,
      isOpenningNode: true,
      openBae: false
  }
}