# Random Quote Generator

A simple, elegant web application that displays random quotes with their authors. Users can generate new quotes with a click and share their favorite quotes directly to Twitter/X.

![Random Quote Generator Screenshot](https://via.placeholder.com/600x400?text=Random+Quote+Generator)

## Demo

Check out the live demo: [Random Quote Generator](https://vadimgg.github.io/quote-generator/)

## Features

- Display random quotes from a local collection
- Show the quote author (or "Unknown" if not available)
- Special styling for longer quotes
- Share quotes directly to Twitter/X with a single click
- Smooth loading transitions between quotes
- Fully responsive design

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Twitter/X Web Intent API

## How It Works

The application loads with a random quote displayed. Users can:
- Click the "New Quote" button to display another random quote
- Click the Twitter/X icon to share the current quote on their Twitter/X account

The JavaScript handles:
- Selecting random quotes from a predefined collection
- Adjusting text styling based on quote length
- Creating properly formatted Twitter/X share links
- Managing loading states for a smooth user experience

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/random-quote-generator.git
   ```

2. Navigate to the project directory:
   ```
   cd random-quote-generator
   ```

3. Open `index.html` in your browser to run the application locally.

## Project Structure

```
random-quote-generator/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # Main JavaScript file
├── quotes.js           # Contains the localQuotes array
└── README.md           # Project documentation
```

## Customization

To add or modify quotes, edit the `localQuotes` array in `quotes.js`:

```javascript
const localQuotes = [
  { text: "Your quote text here", author: "Author Name" },
  // Add more quotes as needed
];
```

## Browser Compatibility

- Chrome
- Firefox
- Safari
- Edge
- Opera

## License

This project is licensed under the MIT License - see the LICENSE file for details.
