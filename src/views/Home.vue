<style scoped>
	.email {
		width: 100%;
		height: 48px;
		border: 1px solid rgba(56, 75, 101, 0.4);
		box-sizing: border-box;
		border-radius: 6px;
		font-family: Inter;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		color: rgba(27, 37, 51, 0.8);
		padding: 10px 15px;
		margin-bottom: 16px;
	}

	::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #AFB7C1;
	}
	:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
	   color:    #AFB7C1;
	   opacity:  1;
	}
	::-moz-placeholder { /* Mozilla Firefox 19+ */
	   color:    #AFB7C1;
	   opacity:  1;
	}
	:-ms-input-placeholder { /* Internet Explorer 10-11 */
	   color:    #AFB7C1;
	}
	::-ms-input-placeholder { /* Microsoft Edge */
	   color:    #AFB7C1;
	}
	::placeholder { /* Most modern browsers support this now. */
	   color:    #AFB7C1;
	}

	.button {
		width: 100%;
		padding: 14px 0;
		background: #0068DC;
		border-radius: 6px;
		font-weight: bold;
		font-size: 16px;
		line-height: 19px;
		text-align: center;
		text-decoration: none;
		color: #FFFFFF;
		margin-bottom: 16px;
		transition: all 100ms ease-in-out;
	}
	.button:hover {
		background: #0059d0;
	}
</style>

<template>
	<div class="container">
		<div class="row justify-content-center text-center">
			<div class="col-12 col-sm-11 col-md-8 col-lg-6 col-xl-5">

				<div v-if="!apiKey">
					<Hero></Hero>

					<input v-model="email" type="email" class="form-control email" placeholder="Enter your email address" v-on:keyup.enter="signUp">
					<a v-on:click="signUp" class="btn btn-primary button" href="#">Get 1TB Free Cloud Storage</a>

					<GetFileZilla></GetFileZilla>
				</div>

				<div v-else>
					<Keys v-bind:apiKey="apiKey" v-bind:satelliteAddress="satelliteAddress"></Keys>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

import Hero from '../components/Hero.vue';
import GetFileZilla from '../components/GetFileZilla.vue';
import Keys from '../components/Keys.vue';

async function getNearestSatellite() {
	const { data } = await axios.get('https://api.ipstack.com/check?access_key=5dd8fea718f2696702ad78adbc9faeab');

	const satellites = {
		'us-central-1.tardigrade.io': [41.2619, -95.8608],
		'europe-west-1.tardigrade.io': [50.8274, 4.348],
		'asia-east-1.tardigrade.io': [25.0478, 121.5318]
	};

	function distance(lat1, lon1, lat2, lon2, unit) {
		if ((lat1 == lat2) && (lon1 == lon2)) {
				return 0;
		} else {
			var radlat1 = Math.PI * lat1/180;
			var radlat2 = Math.PI * lat2/180;
			var theta = lon1-lon2;
			var radtheta = Math.PI * theta/180;
			var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
			if (dist > 1) {
				dist = 1;
			}
			dist = Math.acos(dist);
			dist = dist * 180/Math.PI;
			dist = dist * 60 * 1.1515;
			if (unit=="K") { dist = dist * 1.609344 }
			if (unit=="N") { dist = dist * 0.8684 }
			return dist;
		}
	}

	let nearestSatellite;
	let nearestSatelliteDistance = Infinity;

	for(const satellite in satellites) {
		const [ lat, lon ] = satellites[satellite];

		const dist = distance(data.latitude, data.longitude, lat, lon);

		if(dist < nearestSatelliteDistance) {
			nearestSatellite = satellite;
			nearestSatelliteDistance = dist;
		}
	}

	return nearestSatellite;
};

export default {
	name: 'Home',
	data: () => ({
		email: '',
		apiKey: null,
		satelliteAddress: null
	}),
	computed: {
		validEmail() {
			const re = /\S+@\S+\.\S+/;
			return re.test(this.email);
		}
	},
	methods: {
		async signUp() {
			if(!this.validEmail)
				return;

			const { data } = await axios.post('/api/sign-up', {
				email: this.email,
				satellite: await getNearestSatellite()
			});

			this.apiKey = data.apiKey;
			this.satelliteAddress = data.satelliteAddress;
		}
	},
	components: {
		Hero,
		GetFileZilla,
		Keys
	},
	async created() {


		console.log('nearest satellite is', nearestSatellite, 'at', nearestSatelliteDistance, 'miles');
	}
}

</script>
