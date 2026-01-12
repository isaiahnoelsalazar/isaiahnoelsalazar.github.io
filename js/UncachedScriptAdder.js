class UncachedScriptAdder {
    constructor (url){
        this.url = url;
        const script = document.createElement('script');
        script.src = this.url + "?nocache=" + new Date().getTime();
        document.head.appendChild(script);
    }
    
    static add(url){
        const script = document.createElement('script');
        script.src = url + "?nocache=" + new Date().getTime();
        document.head.appendChild(script);
    }
}