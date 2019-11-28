const NodeMediaServer = require('node-media-server');

const config = {
	rtmp: {
		port: 1935,
		chunk_size: 60000,
		gop_gache: true,
		ping: 60,
		ping_timeout: 30
	},
	http: {
		port: 8000,
		allow_origin: '*'
	}
};

var nms = new NodeMediaServer(config);
nms.run();