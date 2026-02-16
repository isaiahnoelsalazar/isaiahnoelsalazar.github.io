class EasyHTTPRequest {
    constructor (url, method){
        this.url = url;
        this.method = method;
        this.request = new XMLHttpRequest();
    }
    execute (userFunction){
        this.request.open(this.method, this.url, true);
        this.request.onreadystatechange = userFunction;
        this.request.send();
    }
}