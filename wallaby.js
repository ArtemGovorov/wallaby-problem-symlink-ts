module.exports = (wallaby) => {

  var compilerOptions = require('./tsconfig.json').compilerOptions; 
  return {
    files: [
      'lib/my.core/**/*.ts',
      '!lib/my.core/**/*.spec.ts',                        
      'lib/my.domain/**/*.ts',
      '!lib/my.domain/**/*.spec.ts'      
    ],
    tests: [
      'lib/my.core/**/*.spec.ts',      
      'lib/my.domain/**/*.spec.ts'
    ],
    compilers: {
      '**/*.ts': wallaby.compilers.typeScript(compilerOptions)
    },
    debug: true,
    env: {
      type: 'node',
      runner: 'node'
    },
    testFramework: 'mocha',
    workers: {
       recycle: true,
       initial: 0,
       regular: 1
     }

  };
};