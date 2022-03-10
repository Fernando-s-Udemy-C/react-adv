import { fireEvent, render, screen } from "@testing-library/react";
import { Navigation } from "./Navigation";

describe("Testing <Navigation />", () => {
	render(<Navigation />);

	it("asd", () => {
		const home = screen.getByRole("link", { name: /home/i });
		const about = screen.getByRole("link", { name: /about/i });
		const users = screen.getByRole("link", { name: /users/i });

		fireEvent.click(about);
		fireEvent.click(users);
		expect(home).toBeInTheDocument();
	});
});
