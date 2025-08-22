# HTML Blob Transfer Project

This project demonstrates a simple mechanism for transferring data between two HTML pages using blobs. The sender page creates a mock CSV file, generates a blob from it, and sends the blob URL to the receiver page, which then fetches and displays the blob content.

## Project Structure

```
html-blob-transfer
├── sender.html        # HTML structure for the sender page
├── receiver.html      # HTML structure for the receiver page
├── scripts
│   ├── sender.js      # JavaScript logic for the sender page
│   └── receiver.js    # JavaScript logic for the receiver page
├── styles
│   ├── sender.css     # CSS styles for the sender page
│   └── receiver.css   # CSS styles for the receiver page
└── README.md          # Project documentation
```

## Setup Instructions

1. **Clone the Repository**: 
   Clone this repository to your local machine using:
   ```
   git clone <repository-url>
   ```

2. **Open the Project**: 
   Navigate to the project directory.

3. **Open Sender Page**: 
   Open `sender.html` in your web browser.

4. **Send Data**: 
   Click the "Send" button to create a mock CSV blob and open the receiver page.

5. **View Received Data**: 
   The receiver page will display the content of the blob sent from the sender page.

## Usage

- The sender page generates a mock CSV file and creates a blob URL.
- The blob URL is passed to the receiver page, which fetches and displays the CSV content.

## License

This project is licensed under the MIT License.