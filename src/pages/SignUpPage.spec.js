import SignUpPage from "./SignUpPage.vue";
import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { rest } from "msw";
import i18n from "../locales/i18n";
import en from "../locales/en.json";
import de from "../locales/de.json";
import LanguageSelector from "../components/LanguageSelector.vue";

let acceptLanguageHeader;
const server = setupServer(
	rest.post("/api/1.0/users", async (req, res, ctx) => {
		acceptLanguageHeader = req.headers.get("Accept-Language");
		return res(ctx.status(200));
	})
);

beforeAll(() => server.listen());

beforeEach(() => {
	server.resetHandlers();
});

afterAll(() => server.close());

describe("Sign Up Page", () => {
	describe.only("Internationalization", () => {
		let germanLanguage, username, email, password, passwordRepeat, button;

		const setup = () => {
			const app = {
				components: { SignUpPage, LanguageSelector },
				template: `
      <SignUpPage />
      <LanguageSelector />
    `,
			};
			render(app, { global: { plugins: [i18n] } });

			germanLanguage = screen.queryByTitle("Deutsch");
			username = screen.queryByLabelText(en.username);
			email = screen.queryByLabelText(en.email);
			password = screen.queryByLabelText(en.password);
			passwordRepeat = screen.queryByLabelText(en.passwordRepeat);
			button = screen.queryByRole("button", { name: en.signUp });
		};

		beforeEach(() => {
			i18n.global.locale = "en";
		});

		it("sends accept-language having en to backend for sign up request", async () => {
			setup();
			await userEvent.type(username, "user1");
			await userEvent.type(email, "user1@mail.com");
			await userEvent.type(password, "P4ssword");
			await userEvent.type(passwordRepeat, "P4ssword");

			await userEvent.click(button);

			await screen.findByText(en.accountActivationNotification);
			expect(acceptLanguageHeader).toBe("en");
		});
		it("sends accept-language having de after that language is selected", async () => {
			setup();
			await userEvent.click(germanLanguage);
			await userEvent.type(username, "user1");
			await userEvent.type(email, "user1@mail.com");
			await userEvent.type(password, "P4ssword");
			await userEvent.type(passwordRepeat, "P4ssword");

			await userEvent.click(button);

			await screen.findByText(de.accountActivationNotification);
			expect(acceptLanguageHeader).toBe("de");
		});
	});
});
