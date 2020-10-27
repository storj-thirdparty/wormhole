<style scoped>
#app {
	position: relative;
	top: 0;
	width: 1440px;

	font-family: sans-serif;

	display: block;
	margin: 0 auto;

	background: white;

	font-family: 'Inter', sans-serif;
}

.tardigrade-logo {
	position: absolute;
	width: 156px;
	height: 21.19px;

	left: 29px;
	top: 22px;
}

.about-tardigrade {
	position: absolute;
	width: 212px;
	height: 48px;
	left: 1228px;
	top: 22px;

	font-weight: bold;
	font-size: 16px;
	line-height: 134.09%;

	text-align: center;

	color: #0068DC;

	text-decoration: none;
}
</style>

<template>
	<div id="app">

		<img src="@/assets/tardigrade.svg" class="tardigrade-logo" alt="Tardigrade">

		<a class="about-tardigrade" href="#">About Tardigrade</a>

		<router-view></router-view>

	</div>
</template>
