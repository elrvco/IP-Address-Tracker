# IP Address Tracker

This is a **React-based** IP Address Tracker application that allows users to search for detailed geographical information about an IP address. The app fetches data from the `ipapi.co` API and displays the results on a map using the **Leaflet.js** library. Users can input an IP address and view the corresponding location on the map along with details like the city, region, timezone, and language.

## Features

- **IP Address Lookup:** Fetches geographical data for any IP address.
- **Map Integration:** Displays the location on an interactive map using **Leaflet.js**.
- **Responsive Design:** The app is fully responsive and works well on both desktop and mobile devices.
- **IP Details:** Provides details such as:
  - IP Address
  - City
  - Region
  - ZIP code
  - Timezone
  - Language
  
## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Leaflet.js**: Open-source JavaScript library for interactive maps.
- **ipapi.co**: API to fetch geolocation data for IP addresses.
- **CSS**: For styling and responsiveness.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine. You can download them [here](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/elrvco/IP-Address-Tracker.git

2. Navigate to the project folder:
    ```bash
    cd IP-Address-Tracker

3. Install the necessary dependencies:
    ```bash
    npm install

4. Start the development server:
    ```bash
    npm start

5. Open the browser and go to:
    http://localhost:3000

## Usage

1. Enter an IP address in the search bar (e.g., 8.8.8.8).
2. Click the Search button.
3. The app will fetch the data and display:
    - A map showing the location.
    - Information about the IP address such as city, region, timezone, and ISP.

**Note**: Click the search button without entering anything in the input field to get information about your device's IP address.



## Project Structure
```bash
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Map.js           # Leaflet map component
│   │   ├── ipInfoContainer.js  # Component to display IP details
│   ├── App.js               # Main App component
│   ├── App.css              # Global styles
│   ├── index.js             # App entry point
│   └── index.css            # Basic styling for index
└── package.json
```

## API Used
 The app uses the ipapi.co API to retrieve data about the IP address, including latitude, longitude, city, region, and more. No API key is required.

 ### API Endpoint
 https://ipapi.co/${userInput}/json/




