<style scoped>
.tada {
	position: absolute;
	width: 40px;
	height: 41px;
	left: 702px;
	top: 70px;
}

.title {
	position: absolute;
	width: 506px;
	height: 80px;
	left: 467px;
	top: 122px;

	font-weight: bold;
	font-size: 33px;
	line-height: 43px;

	text-align: center;
	letter-spacing: -0.100741px;

	color: #252525;
}

.description {
	position: absolute;
	width: 454px;
	height: 105px;
	left: 489px;
	top: 243px;

	font-weight: normal;
	font-size: 18px;
	line-height: 30px;

	text-align: center;
	letter-spacing: -0.100741px;

	color: rgba(37, 37, 37, 0.7);
}

.video {
	position: absolute;
	width: 464px;
	height: 262px;
	left: 490px;
	top: 333px;

	filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));

	border-radius: 6px;
}

.satellite-label {
	position: absolute;
	width: 196px;
	height: 22px;
	left: 487px;
	top: 635px;

	font-weight: bold;
	font-size: 16px;
	line-height: 134.09%;

	color: #354049;
}

#satellite {
	position: absolute;
	width: 465px;
	height: 48px;
	left: 488px;
	top: 664px;

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

.satellite-copy {
	position: absolute;
	width: 66px;
	height: 30px;
	left: 877px;
	top: 673px;

	background: #FFFFFF;
	border: 1px solid #0068DC;
	box-sizing: border-box;
	border-radius: 4px;

	font-weight: bold;
	font-size: 14px;
	line-height: 17px;
	text-align: center;
	text-decoration: none;

	color: #0068DC;
	cursor: grab;
}

.api-key-label {
	position: absolute;
	width: 196px;
	height: 22px;
	left: 487px;
	top: 734px;

	font-weight: bold;
	font-size: 16px;
	line-height: 134.09%;

	color: #354049;
}

#api-key {
	position: absolute;
	width: 465px;
	height: 48px;
	left: 488px;
	top: 763px;

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

.api-key-copy {
	position: absolute;
	width: 66px;
	height: 30px;
	left: 877px;
	top: 772px;

	background: #FFFFFF;
	border: 1px solid #0068DC;
	box-sizing: border-box;
	border-radius: 4px;

	font-weight: bold;
	font-size: 14px;
	line-height: 17px;
	text-align: center;
	text-decoration: none;

	color: #0068DC;
	cursor: grab;
}
</style>

<template>
	<div>

		<img class="tada" src="@/assets/tada.svg">

		<h1 class="title">Congratulations!<br>You received 1 TB Free Storage</h1>

		<p class="description">Watch the quick start video to see how easy it is to start using your free cloud storage.</p>

		<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/UgJw-_7mOpI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

		<label class="satellite-label" for="satellite">Satellite</label>
		<input type="text" id="satellite" class="form-control" placeholder="Sattelite" autocomplete="off" v-model="satelliteAddress" disabled>
		<button v-on:click="copySatelliteAddress" class="satellite-copy">Copy</button>

		<label class="api-key-label" for="api-key">API Key</label>
		<input type="text" id="api-key" class="form-control fs-exclude" placeholder="API Key" autocomplete="off" v-model="apiKey" disabled>
		<button v-on:click="copyApiKey" class="api-key-copy">Copy</button>

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
