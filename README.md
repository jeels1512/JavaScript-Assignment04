Nature & History Explorer
This is a simple web project that dynamically displays natural and historical places using data fetched from a JSON file hosted on GitHub.
Features
    •    Fetches place data from an external JSON file.
    •    Displays each place with an image, name, location, and year built.
    •    Handles errors in case the data fails to load.
    •    Responsive design using CSS.
    Technologies Used
    •    HTML
    •    CSS
    •    JavaScript (Fetch API)
    Project Structure
project-folder/
│-- index.html
│-- css/
│   ├── style.css
│-- js/
│   ├── script.js
How It Works
    1    The script.js file fetches JSON data from a GitHub repository.
    2    The fetched data is passed to the displayPlaces function, which dynamically creates and appends cards for each place.
    3    Each card contains an image, name, location, and year built.
    4    If an error occurs while fetching data, an error message is displayed.
Setup Instructions
    1    Clone or download the repository.
    2    Ensure that you have a local web server running (or simply open index.html in a browser).
    3    Make sure the file paths in index.html correctly point to your CSS and JavaScript files.
    4    Open index.html in a browser to see the list of places displayed.
Example JSON Data
[
    {
      "name": "Sunset Lake",
      "location": "Utah, USA",
      "yearBuilt": "Natural",
      "image": "https://picsum.photos/id/1018/800/500"
    },
    {
      "name": "Ancient Forest",
      "location": "British Columbia, Canada",
      "yearBuilt": "Prehistoric",
      "image": "https://picsum.photos/id/1020/800/500"
    }
]
Live Preview
