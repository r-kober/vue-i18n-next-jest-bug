<template>
	<div class="container">
		<div>{{ $t("test") }}</div>
		<LanguageSelector />
	</div>
</template>

<script>
import LanguageSelector from "./components/LanguageSelector.vue";
export default {
	name: "App",
	components: {
		LanguageSelector,
	},
};
</script>
