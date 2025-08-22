function createBlobAndSend() {
    // Mock CSV data
    const csvData = "Name,Age,Location\nAlice,30,New York\nBob,25,Los Angeles";
    
    // Create a blob from the CSV data
    const blob = new Blob([csvData], { type: 'text/csv' });
    
    // Create a URL for the blob
    const blobUrl = URL.createObjectURL(blob);
    
    // Open the receiver page and send the blob URL
    window.open(`receiver.html?blobUrl=${encodeURIComponent(blobUrl)}`, '_blank');
}

// Add event listener to the send button
document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('sendButton');
    sendButton.addEventListener('click', async () => {
        console.log('Sending blob data...');
        const csvContent = "Name,Age\nJohn,30\nJane,25";
        const blob = new Blob([csvContent], { type: 'text/csv' });

        // Open the receiver page in a new tab or window
        const receiverWindow = window.open('http://localhost:8001/receiver.html?expectedOrigin='+window.location.origin, '_blank');
        
        //sleep with await promise for 1s
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Receiver window opened:', receiverWindow);

        // Use FileReader to read the blob content
        const reader = new FileReader();
        reader.onload = function () {
            console.log('Blob content read successfully:', reader.result);
            const base64Data = reader.result.split(',')[1]; // Extract Base64 content

            // Send the Base64 data to the receiver page using postMessage
            receiverWindow.postMessage({ blobData: base64Data }, 'http://localhost:8001');
            console.log('Blob data sent to receiver:', base64Data);
        };
        reader.readAsDataURL(blob);
    });
});