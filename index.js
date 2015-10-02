exports.isMonitoringModule = true;
exports.hasCron = true;
exports.snapshotData = false;

var osUtils = require('os-utils');

// Get amount of cpu's and cpuUsage in percents
var cpu = function(callback) {
	var cpuData = {
		cpuCount: osUtils.cpuCount()
	};

	osUtils.cpuUsage(function(percentage){
		cpuData.cpuUsage = percentage * 100; // CPU usage in percents

		callback(null, cpuData)
	});
}

// Get data to executeCron
exports.executeCron = function (callback) {
	cpu(function(err, data){
		if(err)
			callback(err);
		else
			callback(null, data);
	});
}