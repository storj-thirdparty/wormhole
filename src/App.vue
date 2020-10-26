<style scoped>
	#app {
		position: absolute;
		top: 0;
		width: 1440px;
		height: 1145px;

		font-family: sans-serif;

		display: block;
		margin: 0 auto;

		background: rgb(247, 248, 251);

		font-family: 'Roboto', sans-serif;
	}

	.tardigrade-logo {
		position: absolute;
		width: 156px;
		height: 21.19px;
		left: 29px;
		top: 22px;
	}
</style>

<template>
	<div id="app">

		<img src="@/assets/tardigrade.svg" class="tardigrade-logo" alt="Tardigrade">

		<router-view></router-view>

	</div>
</template>
