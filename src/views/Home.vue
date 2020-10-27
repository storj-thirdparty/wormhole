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

				<a v-on:click="signUp" class="button" href="#" v-bind:disabled="!validEmail">Get 1 TB Free Cloud Storage</a>
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
	}
}

</script>
