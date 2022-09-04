import App from "@/App.vue";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import i18n from "@/locales/i18n";

describe("App Internationalization", () => {
	let germanLanguage;

	beforeEach(() => {
		render(App, { global: { plugins: [i18n] } });
		germanLanguage = screen.queryByTitle("Deutsch");
		// reset to english before each test
		i18n.global.locale = "en";
	});

	it('should have locale "en"', async () => {
		i18n.global.locale;
		expect(i18n.global.locale).toBe("en");
	});
	it('should change locale to "de"', async () => {
		await userEvent.click(germanLanguage);

		expect(i18n.global.locale).toBe("de");
	});
});
