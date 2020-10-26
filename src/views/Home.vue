<style scoped>
/* left */
.hero {
	position: absolute;
	top: 159px;
	left: 181px;

	width: 507px;
}

.filezilla-logo {
	position: absolute;
	top: 0px;
	left: 135px;

	width: 72px;
}

.plus {
	position: absolute;
	left: 236.14px;
	top: 23.14px;
}

.tardigrade-logo {
	position: absolute;
	top: 9px;
	left: 293px;
}

.tagline {
	position: absolute;
	top: 115px;

	width: 100%;
	text-align: center;

	font-style: normal;
	font-weight: bold;
	font-size: 33px;
	line-height: 43px;

	text-align: center;
	letter-spacing: -0.100741px;
}

.description {
	position: absolute;
	top: 236px;

	width: 100%;
	text-align: center;

	font-style: normal;
	font-weight: 300;
	font-size: 18px;
	line-height: 26px;
}

.about-tardigrade {
	position: absolute;
	display: block;
	top: 347px;
	left: 148px;

	width: 212px;

	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 134.09%;
	text-align: center;
	text-decoration: none;

	color: #0068DC;

	border: 2px solid #0068DC;
	box-sizing: border-box;
	border-radius: 6px;

	text-align: center;

	padding: 10px 0;
}

/* right */
.signup {
	position: absolute;
	top: 0px;
	left: 869px;

	width: 571px;
	height: 748px;

	background: white;
}

.join {
	position: absolute;
	top: 72px;
	left: 54px;

	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 49px;

	letter-spacing: -0.100741px;
	text-transform: capitalize;

	color: #252525;
}

.join-tagline {
	position: absolute;
	top: 116px;
	left: 52px;

	width: 454px;

	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 30px;

	letter-spacing: -0.100741px;

	color: rgba(37, 37, 37, 0.7);
}
</style>

<template>
	<div>

		<div class="hero">
			<img src="@/assets/filezilla.svg" class="filezilla-logo" alt="FileZilla">


			<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="plus">
<path d="M26.4255 13.0692C26.6634 13.0692 26.8563 13.2621 26.8563 13.5C26.8563 13.724 26.6854 13.908 26.467 13.9289L26.4255 13.9309H0.574406C0.336453 13.9309 0.143555 13.738 0.143555 13.5C0.143555 13.276 0.314427 13.092 0.532912 13.0711L0.574406 13.0692H26.4255Z" fill="#384761"/>
<path d="M13.4999 0.143616C13.7239 0.143616 13.9079 0.314488 13.9288 0.532973L13.9308 0.574467V26.4255C13.9308 26.6635 13.7379 26.8564 13.4999 26.8564C13.276 26.8564 13.0919 26.6855 13.0711 26.467L13.0691 26.4255V0.574467C13.0691 0.336514 13.262 0.143616 13.4999 0.143616Z" fill="#384761"/>
</svg>

			<img src="@/assets/tardigrade-2.svg" class="tardigrade-logo" alt="Tardigrade">

			<p class="tagline">Use FileZilla with Tardigrade.<br>Get 1 TB Free.</p>

			<p class="description">Tardigrade is safer, faster, decentralized object storage at a fraction of the cost. Get 1 TB free when you join Tardigrade, and  start uploading data with FileZilla in just a few easy steps.</p>

			<a class="about-tardigrade" href="https://tardigrade.io">About Tardigrade</a>
		</div>

		<div class="signup">
			<h1 class="join">Join Tardigrade</h1>

			<p class="join-tagline">Get 1 TB free when you sign up, and get started with decentralized storage right away.</p>

			<div class="form-label-group">
			  <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAkCAYAAADo6zjiAAAAAXNSR0IArs4c6QAAAbNJREFUWAntV8FqwkAQnaymUkpChB7tKSfxWCie/Yb+gbdeCqGf0YsQ+hU95QNyDoWCF/HkqdeiIaEUqyZ1ArvodrOHxanQOiCzO28y781skKwFW3scPV1/febP69XqarNeNTB2KGs07U3Ttt/Ozp3bh/u7V7muheQf6ftLUWyYDB5yz1ijuPAub2QRDDunJsdGkAO55KYYjl0OUu1VXOzQZ64Tr+IiPXedGI79bQHdbheCIAD0dUY6gV6vB67rAvo6IxVgWVbFy71KBKkAFaEc2xPQarXA931ot9tyHphiPwpJgSbfe54Hw+EQHMfZ/msVEEURjMfjCjbFeG2dFxPo9/sVOSYzxmAwGIjnTDFRQLMQAjQ5pJAQkCQJ5HlekeERxHEsiE0xUUCzEO9AmqYQhiF0Oh2Yz+ewWCzEY6aYKKBZCAGYs1wuYTabKdNNMWWxnaA4gp3Yry5JBZRlWTXDvaozUgGTyQSyLAP0dbb3DtQlmcan0yngT2ekE9ARc+z4AvC7nauh9iouhpcGamJeX8XF8MaClwaeROWRA7nk+tUnyzGvZrKg0/40gdME/t8EvgG0/NOS6v9NHQAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
			  <label for="inputEmail">Email address</label>
			</div>

			<button v-bind:disabled="!validEmail" v-on:click="signUp" class="btn btn-lg btn-primary btn-block" type="submit">Next</button>
		</div>

		<!--<div class="form-signin" _lpchecked="1">
			<div class="text-center mb-4">
				<img class="mb-4" src="@/assets/logo.svg" alt="" width="72" height="72">
				<h1 class="h3 mb-3 font-weight-normal">Filezilla + Tardigrade</h1>
				<p>Secure and globally distributed cloud storage. <br/>
					Enter your email for free 1 TB storage and bandwidth.</p>
				</div>



				<p class="mt-5 mb-3 text-muted text-center">© 2020</p>
		</div>-->

		<!--<div v-if="apiKey">
			<div class="form-label-group">
			  <input type="text" id="satellite" class="form-control" placeholder="Sattelite" required="" autofocus="" autocomplete="off" v-model="satelliteAddress" disabled>

			  <label for="satellite">Satellite</label>
			</div>

			<div class="form-label-group">
			  <input type="text" id="api-key" class="form-control" placeholder="API Key" required="" autofocus="" autocomplete="off" v-model="apiKey" disabled>

			  <label for="api-key">API Key</label>
			</div>

			<a class="btn btn-lg btn-success btn-block" href="https://documentation.tardigrade.io/how-tos/set-up-filezilla-for-decentralized-file-transfer" target="_blank">Setup Guide</a>
		</div>

		<div v-else>



		</div>-->

	</div>

</template>

<script>
import axios from 'axios';

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
	}
}

</script>
