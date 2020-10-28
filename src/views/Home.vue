<style scoped>
.signup {
	position: absolute;
	width: 454px;
	height: 114px;
	left: 489px;
	top: 459px;
}

.email {
	position: absolute;
	left: 0;
	top: 0;

	width: 454px;
	border: 1px solid rgba(56, 75, 101, 0.4);
	box-sizing: border-box;
	border-radius: 6px;

	font-family: Inter;
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 134.09%;
	/* or 21px */

	display: flex;
	align-items: center;

	color: rgba(27, 37, 51, 0.8);

	padding: 10px 15px;
}

.button {
	position: absolute;
	left: 0;
	top: 69px;

	width: 454px;

	padding: 15px 0;

	background: #0068DC;
	border-radius: 6px;

	font-weight: bold;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
	text-decoration: none;

	color: #FFFFFF;
}
</style>

<template>
	<div>

		<div v-if="!apiKey">
			<Hero></Hero>

			<div class="signup">
				<input v-model="email" type="email" class="email" placeholder="Enter your email address">

				<a v-on:click="signUp" class="button" href="#">Get 1 TB Free Cloud Storage</a>
			</div>

			<GetFileZilla></GetFileZilla>
		</div>

		<div v-else>
			<Keys v-bind:apiKey="apiKey" v-bind:satelliteAddress="satelliteAddress"></Keys>
		</div>

	</div>
</template>

<script>
import axios from 'axios';

import Hero from '../components/Hero.vue';
import GetFileZilla from '../components/GetFileZilla.vue';
import Keys from '../components/Keys.vue';

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
				email: this.email
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
		const { data } = await axios.get('http://api.ipstack.com/check?access_key=fd027f23eda5344acc1bfabce62b0436');

		const satellites = {
			'us-central-1': [41.2619, -95.8608],
			'europe-west-1': [50.8274, 4.348],
			'asia-east-1': [25.0478, 121.5318]
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

		console.log('nearest satellite is', nearestSatellite, 'at', nearestSatelliteDistance, 'miles');
	}
}

</script>
