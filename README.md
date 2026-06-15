# Investment Calculator

A modern, interactive web application to calculate and visualize investment growth over time with compound interest.

## Features

- **Dynamic Investment Calculations**: Calculate investment growth based on initial investment, annual contributions, expected return rate, and investment duration
- **Compound Interest**: Automatically computes year-by-year interest earnings and cumulative totals
- **Currency Formatting**: All monetary values are formatted as USD with proper thousands separators
- **Real-time Updates**: Results update instantly as you modify input values
- **Clean UI**: Simple and intuitive interface for entering investment parameters

## Technologies Used

- **React**: UI framework for building interactive components
- **Vite**: Fast build tool and development server
- **JavaScript (ES6+)**: Core logic and calculations
- **CSS**: Styling

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Grid/
│   │   │   └── Grid.jsx           # Results table with formatted currency display
│   │   ├── Header/
│   │   │   └── Header.jsx         # Application header
│   │   └── InputGroup/
│   │       └── InputGroup.jsx     # Investment parameter input form
│   ├── util/
│   │   ├── investment.js          # Core calculation logic and currency formatter
│   │   ├── inputFields.js         # Input field configuration
│   │   └── theadHeadData.js       # Table header labels
│   ├── App.jsx                    # Main application component
│   ├── index.jsx                  # React entry point
│   └── index.css                  # Global styles
├── public/                        # Static assets
├── package.json                   # Project dependencies
├── vite.config.js                 # Vite configuration
└── index.html                     # HTML entry point
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd investment-calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal)

## Usage

1. Enter your **Initial Investment** amount
2. Enter your **Annual Investment** (amount added each year)
3. Enter your **Expected Return** (annual return rate in percentage)
4. Enter your **Duration** (number of years to invest)

The results table will display:
- **Year**: Investment year (1 through duration)
- **Investment Value**: Total portfolio value at end of year
- **Interest (Year)**: Interest earned in that specific year
- **Total Interest**: Cumulative interest earned to date
- **Invested Capital**: Total amount of money you've invested to date

All values are rounded to the nearest dollar and formatted with thousands separators.

## How It Works

The calculator uses the compound interest formula to compute year-by-year investment growth:

1. **Interest for Year**: Current investment value × (return rate / 100)
2. **New Investment Value**: Previous value + interest + annual investment
3. **Cumulative Totals**: Total interest and invested capital accumulate over time

### Example

With inputs:
- Initial Investment: $15,000
- Annual Investment: $900
- Expected Return: 5.5%
- Duration: 10 years

Year 1 results:
- Investment Value: $16,725
- Interest (Year): $825
- Total Interest: $825
- Invested Capital: $15,900

## Development

### Available Scripts

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Input Validation

The calculator validates all inputs to ensure:
- All fields are filled
- Values are valid numbers
- Duration is positive (greater than 0)
- Returns empty results if validation fails

## Browser Compatibility

Works on all modern browsers that support ES6+ JavaScript and React 18+.

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest improvements
- Submit pull requests

## Support

For issues or questions, please open an issue in the repository.
