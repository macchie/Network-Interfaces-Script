'use strict';
const scriptRunner = require('./script-runner.js');

module.exports = class NetworkInterface {
	constructor (interfacesFilePath, readScriptPath, writeScriptPath) {
		this.interfacesFilePath = interfacesFilePath;
		this.readScriptPath = readScriptPath;
		this.writeScriptPath = writeScriptPath;
	}

	currentConfig (interfaceName) {
		return scriptRunner.read(this.interfacesFilePath, this.readScriptPath, interfaceName);
	}

	setConfig (interfaceName, settings) {
		return scriptRunner.write(this.interfacesFilePath, this.writeScriptPath, interfaceName, settings);
	}
}