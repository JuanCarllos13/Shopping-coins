module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src'],
					alias: {
						'@assets': './src/assets',
						'@Components': './src/Components',
						'@Routes': './src/Routes',
						'@Screens': './src/Screens',
						'@Storage': './src/Storage',
						'@Theme': './src/Theme',
						'@Utils': './src/Utils',
						'@Service': './src/Service',
						'@Contexts': './src/Contexts',
						'@Database': './src/Database',
					},
				},
			],
		],
	}
}
