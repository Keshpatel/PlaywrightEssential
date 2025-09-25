import { LoginPage } from "@pages/login.page";
import { test as baseTest } from "@playwright/test";

// Type Annotation
type MyPages = {
  loginPage: LoginPage;
};

export const test = baseTest.extend<MyPages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect } from "@playwright/test";
