<template>
	<button class="language" title="Deutsch" @click="selectLanguage('de')">
		German
	</button>
	<button class="language" title="English" @click="selectLanguage('en')">
		English
	</button>
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
.language {
	cursor: pointer;
}
</style>
