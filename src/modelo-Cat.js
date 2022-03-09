class Gatinho {
    static catAPI = 'https://api.thecatapi.com/v1/images/search/';

    static async getDataCat(){
        const response = await fetch(this.catAPI);
        const data = await response.json();
        return data;
    }

    static async getUrlCat(){
        const response = await this.getDataCat();
        const data = response[0].url;
        return data;
    }
}

export {Gatinho};