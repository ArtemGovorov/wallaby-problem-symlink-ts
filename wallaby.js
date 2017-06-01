module.exports = (wallaby) => {

  var path = require('path');
  process.env.NODE_PATH += path.delimiter + path.join(wallaby.projectCacheDir, 'lib');

  return {
    files: [
      '!lib/**/node_modules/**',
      'lib/**/*.ts',
      '!lib/**/*.spec.ts'      
    ],
    tests: [
      '!lib/**/node_modules/**',
      'lib/**/*.spec.ts'
    ],
    debug: true,
    env: {
      type: 'node',
      runner: 'node'
    }
  };
};
