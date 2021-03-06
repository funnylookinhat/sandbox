module.exports = {
	config : {
		camera : {
			x : -400
		}
	},
	objects : {
		sphere : {
			object: require("../demos/Spheres"),
			properties: {
				count : 50,
				dispersion : 120,
				radius : 10
			}
		},
		controls : {
			object: require("../components/cameras/Controls"),
		},
		grid : {
			object: require("../demos/Grid"),
		},
		stats : {
			object: require("../components/utils/Stats")
		}
	}
};