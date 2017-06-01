module.exports = (wallaby) => {

  var path = require('path');
  process.env.NODE_PATH += path.delimiter + path.join(wallaby.projectCacheDir, 'lib');

  return {
    files: [
      '!lib/**/node_modules',
      'lib/my.core/**/*.ts',
      '!lib/my.core/**/*.spec.ts',                        
      'lib/my.domain/**/*.ts',
      '!lib/my.domain/**/*.spec.ts'      
    ],
    tests: [
      'lib/my.core/**/*.spec.ts',      
      'lib/my.domain/**/*.spec.ts'
    ],
    debug: true,
    env: {
      type: 'node',
      runner: 'node'
    }
  };
};
