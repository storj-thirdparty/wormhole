<style scoped>
	#app {
		background: white;
		font-family: 'Inter', sans-serif;
	}
	.tardigrade-logo {
		width: 156px;
		height: 21.19px;
	}
	.about-tardigrade {
		font-weight: bold;
		font-size: 16px;
		color: #0068DC;
	}
	@media (max-width: 575.98px) {
		.about-tardigrade {
			font-size: 14px;
		}
	}
</style>

<template>
	<div id="app">

		<div class="container-fluid">
			<div class="row my-3">
				<div class="col text-left">
					<a href="https://tardigrade.io/">
						<img src="@/assets/tardigrade.svg" class="tardigrade-logo" alt="Tardigrade Logo">
					</a>
				</div>
				<div class="col text-right">
					<a class="about-tardigrade" href="https://tardigrade.io/">About Tardigrade</a>
				</div>
			</div>
		</div>

		<router-view></router-view>

	</div>
</template>
