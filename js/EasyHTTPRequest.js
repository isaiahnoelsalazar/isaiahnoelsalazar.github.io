class EasyHTTPRequest {
    constructor (url, method){
        this.url = url;
        this.method = method;
        this.request = new XMLHttpRequest();
    }
    execute ({userFunction=null, formData=null} = {}){
        let run = true;
        this.request.open(this.method, this.url, true);
        this.request.onreadystatechange = () => {
            if (this.request.readyState === 4 && this.request.status === 200){
                if (run){
                    if (userFunction){
                        userFunction();
                    }
                    run = false;
                }
            }
        };
        this.request.send(formData || null);
    }
}