<template>
	<span title="Deutsch" @click="selectLanguage('de')">German</span>
	<span title="English" @click="selectLanguage('en')">English</span>
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
