new EasyHTTPRequest("https://isaiahnoelsalazar.pythonanywhere.com/", "GET").execute({
    userFunction: (response) => {
        console.log("Request successful!");
        console.log(response);
    }
});