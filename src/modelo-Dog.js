class Doguinho {
    static dogAPI = 'https://api.thedogapi.com/v1/images/search/';

    static async getDataDog(){
        const response = await fetch(this.dogAPI);
        const data = await response.json();
        return data;
    }

    static async getUrlDog(){
        const response = await this.getDataDog();
        const data = response[0].url;
        return data;
    }
}

export {Doguinho};