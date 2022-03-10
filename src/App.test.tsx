import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing <App />", () => {
	it("should be displayed correctly", () => {
		render(<App />);
		const item = screen.getByRole("link", { name: /about/i });
		expect(item).toBeInTheDocument();
	});
});
