import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import DogDetails from './DogDetails';
import '@testing-library/jest-dom';


test('renders DogDetails correctly', () => {
  const mockDogs = [
    {
      name: "Whiskey",
      age: 5,
      src: "whiskey.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    }
  ];

  render(
    <MemoryRouter initialEntries={["/dogs/whiskey"]}>
      <DogDetails dogs={mockDogs} />
    </MemoryRouter>
  );

  // Add assertions here
});
