var logging = require('./logging'),
	pkg = require('./package.json'),
	program = require('commander'),
	Sync = require('pkgcloud-sync').Sync,
	utility = require('./utility');

program
	.version(pkg.version)
	.option('--source-type [type]', 'Source Container Type')
	.option('--source-key [key]', 'Source Container Key (or username)')
	.option('--source-secret [secret]', 'Source Container Secret (or API key)')
	.option('--source-region [region]', 'Source Container Region')
	.option('--destination-type [type]', 'Destination Container Type')
	.option('--destination-key [key]', 'Destination Container Key (or username)')
	.option('--destination-secret [secret]', 'Destination Container Secret (or API key)')
	.option('--destination-region [region]', 'Destination Container Region')
	.option('--container-suffix  [suffix]', 'Optional Suffix for Container Names')
	.option('-c --container [name]', 'Container name', utility.collect, [])
	.option('-l --log-level [level]', 'Log Level (defaults to debug)')
	.option('--enable-source-logging', 'Log Source Client (for debugging only)')
	.option('--enable-destination-logging', 'Log Destination Client (for debugging only)')
	.parse(process.argv);

// initialize our logging
var log = logging.getLogger(program.logLevel || 'debug');

try {
	var sync = new Sync({
		source: utility.parseConfig(program, 'source'),
		destination: utility.parseConfig(program, 'destination'),
		containers: program.container,
		containerSuffix: program.containerSuffix || '',
		enableDestinationClientLogging: program.enableDestinationLogging,
		enableSourceClientLogging: program.enableSourceLogging
	});

	sync.on('log::*', logging.logFunction);
}
catch (e) {
	program.help();
	process.exit(0);
}

sync.run(function(err) {
	if (err) {
		log.error(err);
	}
	process.exit(err ? 1 : 0);
});