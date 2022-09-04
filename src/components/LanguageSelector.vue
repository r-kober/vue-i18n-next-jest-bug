<template>
	<img
		src="https://flagcdn.com/de.svg"
		width="24"
		title="Deutsch"
		alt="German"
		class="me-1"
		@click="selectLanguage('de')" />
	<img
		src="https://flagcdn.com/gb.svg"
		width="24"
		alt="English"
		title="English"
		@click="selectLanguage('en')" />
</template>

<script>
export default {
	name: "LanguageSelector",
	methods: {
		selectLanguage(language) {
			console.log(`change language to ${language}`);
			this.$i18n.locale = language;
			console.log(`i18n.locale = ${this.$i18n.locale}`);
		},
	},
};
</script>

<style scoped>
img {
	cursor: pointer;
}
</style>
