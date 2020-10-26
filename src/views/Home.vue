<template>
	<div>

		<div v-if="apiKey">
			<div class="form-label-group">
			  <input type="text" id="satellite" class="form-control" placeholder="Sattelite" required="" autofocus="" autocomplete="off" v-model="satelliteAddress" disabled>

			  <label for="satellite">Satellite</label>
			</div>

			<div class="form-label-group">
			  <input type="text" id="api-key" class="form-control" placeholder="API Key" required="" autofocus="" autocomplete="off" v-model="apiKey" disabled data-browsing-ignore>

			  <label for="api-key">API Key</label>
			</div>

			<a class="btn btn-lg btn-success btn-block" href="#" v-if="!showVideo" v-on:click="showVideo = true">Quickstart Video</a>

			<iframe v-if="showVideo" width="100%" height="200" src="https://www.youtube.com/embed/2I5LGL792hY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

			<a v-if="showVideo" class="btn btn-lg btn-danger btn-block" href="#" v-on:click="showVideo = false">Close</a>
		</div>

		<div v-else>

			<div class="form-label-group">
			  <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="" autocomplete="off" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAkCAYAAADo6zjiAAAAAXNSR0IArs4c6QAAAbNJREFUWAntV8FqwkAQnaymUkpChB7tKSfxWCie/Yb+gbdeCqGf0YsQ+hU95QNyDoWCF/HkqdeiIaEUqyZ1ArvodrOHxanQOiCzO28y781skKwFW3scPV1/febP69XqarNeNTB2KGs07U3Ttt/Ozp3bh/u7V7muheQf6ftLUWyYDB5yz1ijuPAub2QRDDunJsdGkAO55KYYjl0OUu1VXOzQZ64Tr+IiPXedGI79bQHdbheCIAD0dUY6gV6vB67rAvo6IxVgWVbFy71KBKkAFaEc2xPQarXA931ot9tyHphiPwpJgSbfe54Hw+EQHMfZ/msVEEURjMfjCjbFeG2dFxPo9/sVOSYzxmAwGIjnTDFRQLMQAjQ5pJAQkCQJ5HlekeERxHEsiE0xUUCzEO9AmqYQhiF0Oh2Yz+ewWCzEY6aYKKBZCAGYs1wuYTabKdNNMWWxnaA4gp3Yry5JBZRlWTXDvaozUgGTyQSyLAP0dbb3DtQlmcan0yngT2ekE9ARc+z4AvC7nauh9iouhpcGamJeX8XF8MaClwaeROWRA7nk+tUnyzGvZrKg0/40gdME/t8EvgG0/NOS6v9NHQAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
			  <label for="inputEmail">Email address</label>
			</div>

			<button v-bind:disabled="!validEmail" v-on:click="signUp" class="btn btn-lg btn-primary btn-block" type="submit">Next</button>

		</div>

	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'Home',
	data: () => ({
	  email: '',
	  apiKey: null,
	  satelliteAddress: null,
	  showVideo: false
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
