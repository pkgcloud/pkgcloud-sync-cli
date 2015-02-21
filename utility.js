exports.collect = function(val, memo) {
	memo.push(val);
	return memo;
};

exports.parseConfig = function(program, target) {

	var config = {
		provider: program[target + 'Type']
	};

	switch (config.provider) {
		case 'amazon':
			config.keyId = program[target + 'Key'];
			config.key = program[target + 'Secret'];
			break;
		case 'rackspace':
			config.username = program[target + 'Key'];
			config.apiKey = program[target + 'Secret'];
			break;
        case 'openstack':
            config.username = program[target + 'Key'];
            config.password = program[target + 'Secret'];
            break;
        case 'hp':
            config.username = program[target + 'Key'];
            config.apiKey = program[target + 'Secret'];
            break;
        case 'google':
            config.projectId = program[target + 'Key'];
            config.keyFilename = program[target + 'Secret'];
            break;
	}

	if (program[target + 'Region']) {
		config.region = program[target + 'Region'];
	}

	return config;
};