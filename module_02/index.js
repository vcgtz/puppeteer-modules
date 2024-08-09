class Module {
  moduleName = 'module_02';

  constructor() {}

  run() {
    console.log(this.moduleName);
    console.log(`Sabes que ahora estas ejecutando el ${this.moduleName}?`);
  }
}

module.exports = Module;
