
import { test, expect } from "lib/Fixtures/fixturesPage_";
import { LoginPage } from "@pages/login.page";
import { registerUser } from "@datafactory/register";

test("login without page object", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await page.locator('[data-test="nav-sign-in"]').click();
  await page
    .locator('[data-test="email"]')
    .fill("customer@practicesoftwaretesting.com");
  await page.locator('[data-test="password"]').fill("welcome01");
  await page.locator('[data-test="login-submit"]').click();
  await expect(page.locator('[data-test="nav-menu"]')).toContainText(
    "Jane Doe"
  );
  await expect(page.locator('[data-test="page-title"]')).toContainText(
    "My account"
  );
});

test("Login with newly registerd user", async ({ page }) => {
  const email = `Automation${Date.now()}@test101.com`;
  const password = "sunShine2025!";
  await registerUser(email, password);
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(email, password);

  await expect(page.getByTestId("nav-menu")).toContainText("test101 User101");
  await expect(page.getByTestId("page-title")).toContainText("My account");
});

test("Login with fixture", async ({ page , loginPage}) => {
  const email = `Automation${Date.now()}@test101.com`;
  const password = "sunShine2025!";
  await registerUser(email, password);
  await loginPage.goto();
  await loginPage.login(email, password);

  await expect(page.getByTestId("nav-menu")).toContainText("test101 User101");
  await expect(page.getByTestId("page-title")).toContainText("My account");
});
