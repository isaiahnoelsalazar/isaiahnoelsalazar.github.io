class EasyHTTPRequest {
    constructor(url, method = 'GET') {
        this.url = url;
        this.method = method.toUpperCase();
    }
    async execute(data = null) {
        const options = {
            method: this.method,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        if (data && this.method !== 'GET') {
            options.body = JSON.stringify(data);
        }
        try {
            const response = await fetch(this.url, options);
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            return { error: error.message };
        }
    }
}