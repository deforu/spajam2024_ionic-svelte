import { CapacitorConfig } from '@capacitor/cli';

const appId = 'spajam2024.ionic.io';
const appName = 'spajam2024';
const server = process.argv.includes('-hmr')
	? {
			url: 'http://192.168.50.151:5173', // always have http:// in url
			cleartext: true
		}
	: {};
const webDir = 'build';

const config: CapacitorConfig = {
	appId,
	appName,
	webDir,
	server: {
    "url": "http://172.20.10.2:5173",
    "cleartext": true
  }
};

if (process.argv.includes('-hmr'))
	console.log('WARNING: running capacitor with livereload config', config);

export default config;
