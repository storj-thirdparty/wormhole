<style scoped>
	.title {
		font-weight: bold;
		font-size: 29px;
		line-height: 43px;
		text-align: center;
		color: #252525;
	}

	.video {
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
		border: 1px solid #adb4be;
		border-radius: 6px;
	}

	input {
		height: 48px;
		font-size: 16px;
		padding: 10px 15px;
		border: 1px solid #adb4be;
		color: #474e59;
		border-radius: 6px;
		background: #fafafa !important;
		cursor: text;
	}

	.label {
		font-weight: bold;
		font-size: 16px;
		color: #354049;
	}

	.copy {
		background: #FFFFFF;
		border: 1px solid #0068DC;
		border-radius: 4px;
		font-weight: bold;
		font-size: 14px;
		text-align: center;
		color: #0068DC;
		cursor: pointer;
		position: absolute;
		bottom: 8px;
		right: 26px;
		padding: 4px 14px;
		line-height: 1.6;
		transition: all 100ms ease-in-out;
	}
	.copy:hover {
		background: #0068DC;
		color: #fff;
	}
</style>

<template>
	<div>

		<img class="tada" src="@/assets/tada.svg" alt="Tada Emoji">
		<h1 class="title">Congratulations!<br>You received 1 TB Free Storage</h1>
		<p class="description">Watch the quick start video to see how easy it is to start using your free cloud storage.</p>

		<div class="video embed-responsive embed-responsive-16by9 my-4">
			<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/UgJw-_7mOpI" frameborder="0" allowfullscreen></iframe>
		</div>

		<div class="row mb-3">
			<div class="col text-left">
				<label class="label" for="satellite">Satellite</label>
				<input type="text" id="satellite" class="form-control" placeholder="Sattelite" autocomplete="off" v-model="satelliteAddress" disabled>
				<button v-on:click="copySatelliteAddress" class="copy">Copy</button>
			</div>
		</div>

		<div class="row mb-3">
			<div class="col text-left">
				<label class="label" for="api-key">API Key</label>
				<input type="text" id="api-key" class="form-control fs-exclude" placeholder="API Key" autocomplete="off" v-model="apiKey" disabled>
				<button v-on:click="copyApiKey" class="copy">Copy</button>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	props: [
		'apiKey',
		'satelliteAddress'
	],
	methods: {
		copySatelliteAddress() {
			window.navigator.clipboard.writeText(this.satelliteAddress);
		},
		copyApiKey() {
			window.navigator.clipboard.writeText(this.apiKey);
		}
	}
}
</script>
