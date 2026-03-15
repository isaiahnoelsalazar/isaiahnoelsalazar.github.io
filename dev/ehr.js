new EasyHTTPRequest("https://openweb.fwh.is/dev/api-proxy.php", "GET").execute({
    userFunction: () => {
        console.log("Request successful!");
    }
});

fetch("https://openweb.fwh.is/dev/api-proxy.php")
.then(response => response.text())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error("Request failed:", error);
});

fetch("https://openweb.fwh.is/dev/api-proxy.php", {
    method: "POST",
    body: new FormData()
})
.then(response => response.text())
.then(data => {
    console.log(data);
})
.catch(error => console.error(error));