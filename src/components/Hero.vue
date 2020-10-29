<style scoped>
.hero {
	position: absolute;
	width: 506px;
	height: 341px;
	left: 467px;
	top: 118px;
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
</style>

<template>
	<div class="hero">
		<img src="@/assets/filezilla.svg" class="filezilla-logo" alt="FileZilla">

		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="plus">
	<path d="M26.4255 13.0692C26.6634 13.0692 26.8563 13.2621 26.8563 13.5C26.8563 13.724 26.6854 13.908 26.467 13.9289L26.4255 13.9309H0.574406C0.336453 13.9309 0.143555 13.738 0.143555 13.5C0.143555 13.276 0.314427 13.092 0.532912 13.0711L0.574406 13.0692H26.4255Z" fill="#384761"/>
	<path d="M13.4999 0.143616C13.7239 0.143616 13.9079 0.314488 13.9288 0.532973L13.9308 0.574467V26.4255C13.9308 26.6635 13.7379 26.8564 13.4999 26.8564C13.276 26.8564 13.0919 26.6855 13.0711 26.467L13.0691 26.4255V0.574467C13.0691 0.336514 13.262 0.143616 13.4999 0.143616Z" fill="#384761"/>
	</svg>

		<img src="@/assets/tardigrade-2.svg" class="tardigrade-logo" alt="Tardigrade">

		<p class="tagline">Get 1 TB Free Cloud Storage<br>Try Tardigrade with FileZilla</p>

		<p class="description">Tardigrade is decentralized, end-to-end encrypted cloud storage. Enter your email to get 1 TB free cloud storage for 3 months, and start uploading data with FileZilla.</p>
	</div>
</template>
