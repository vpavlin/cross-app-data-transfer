window.addEventListener('message', (event) => {
    // Verify the origin of the sender
    const url = new URL(window.location.href);

    // Create a URLSearchParams object from the query string
    const params = new URLSearchParams(url.search);

    // Access a specific parameter
    const expectedOrigin = params.get('expectedOrigin');
    
    if (event.origin !== expectedOrigin) {
        document.getElementById('status').textContent = 'Expected origin: ' + expectedOrigin +', but received ' + event.origin;
        console.error('Origin not allowed:', event.origin);
        return;
    }

    const { blobData } = event.data;
    console.log(event.data)
    if (blobData) {
        // Decode the Base64 data
        const decodedData = atob(blobData);

        // Display the decoded content
        const table = document.getElementById('blobContent');
        const rows = decodedData.split('\n');
        const headers = rows[0].split(',');
        const headerRow = document.getElementById('tableHeader');

        // Create table header
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });

        // Create table body
        const tbody = document.getElementById('tableBody');
        for (let i = 1; i < rows.length; i++) {
            const cells = rows[i].split(',');
            const tr = document.createElement('tr');

            cells.forEach(cellText => {
                const td = document.createElement('td');
                td.textContent = cellText;
                tr.appendChild(td);
            });

            tbody.appendChild(tr);
            }
    } else {
        console.error('Blob data not found in message.');
    }
});