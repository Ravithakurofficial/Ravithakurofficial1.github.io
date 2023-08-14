console.log("enter in web");

let res = document.getElementById('resumeCardContainer');
res.addEventListener('click', resumehandler);

function resumehandler() {
    console.log("click");

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'resume-page.html', true);

    xhr.onload = function () {
        if (xhr.status === 200) { // Check if the request was successful
            let resContent = xhr.responseText; // Get the response text
            let chng = document.getElementById('changecon');
            chng.innerHTML = resContent; // Update the element's content
        }
    };

    xhr.send();
}
