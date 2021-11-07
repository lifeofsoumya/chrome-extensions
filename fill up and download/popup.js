let saveFile = () => {
    	
    // Get the data from each element on the form.
    const taskname = document.getElementById('txtName');
    const url = document.getElementById('txturl');
    const msg = document.getElementById('msg');
    
    // This variable stores all the data.
    let data = 
        '\r Name: ' + taskname.value + ' \r\n ' +
        'URL: ' + url.value + ' \r\n ' +
        'Message: ' + msg.value;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}