const mongoose = require('mongoose');

const config = require('./config').mongo;

const dbUrl = config.url();
const dbOption = config.mongoOptions;
mongoose.connect(dbUrl, dbOption, (err) => {
    if(!err) {
      console.log('数据库连接成功')
    } else {
      console.log(err)
    }
});

exports.mongoose = mongoose;