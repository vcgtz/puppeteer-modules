class Module {
  moduleName = 'module_03';

  constructor() {}

  run() {
    console.log(this.moduleName);
    console.log(`Pero mira, si eres tu otra vez pero ahora ejecutando el ${this.moduleName}!`);
  }
}

module.exports = Module;
