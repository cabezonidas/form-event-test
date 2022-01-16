import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './form';

test('submits form', async () => {
  console.log = jest.fn();
  render(<Form />);
  const inputElement = await screen.findByLabelText("Input 1");
  userEvent.type(inputElement, "new value");
  const submitElement = await screen.findByRole("button", { name: "Save" });
  userEvent.click(submitElement);
  expect(console.log).toHaveBeenCalledWith("new value");
});
