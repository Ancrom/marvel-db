class MarvelService {
  API_BASE_URL = "https://gateway.marvel.com/v1/public/";
  API_KEY = "apikey=f44a432abd51082b1e3346390a32c304";

  async getResource(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    return await response.json();
  }

  async getAllData(type = "characters", limit = 9, offset = 200) {
    const response = await this.getResource(
      `${this.API_BASE_URL}${type}?limit=${limit}&offset=${offset}&${this.API_KEY}`
    );
    return response.data.results.map((item) => {
      return this.transformData(item, type);
    });
  }

  async getCharacterById(id) {
    return await this.getResource(
      `${this.API_BASE_URL}characters/${id}?${this.API_KEY}`
    );
  }

  async getRandomCharacter() {
    const randomOffset = Math.floor(Math.random() * 1564);
    const response = await this.getResource(
      `${this.API_BASE_URL}characters?limit=1&offset=${randomOffset}&${this.API_KEY}`
    );

    return this.transformData(response.data.results[0]);
  }

  transformData(data, type = "characters") {
    const { id, description, thumbnail } = data;
    const defDesc = `There is no description for this ${type} :(`;
    const commonFields = {
      id,
      description: description || defDesc,
      thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
    };
    if (type === "comics") {
      const { title, prices, pageCount, textObjects } = data;
      return {
        ...commonFields,
        title,
        price: prices[0].price ? `$${prices[0].price}` : "N/A",
        pageCount: pageCount || "not available",
        language: textObjects[0] ? textObjects[0].language : "not available",
      };
    } else {
      const { name, comics } = data;
      return {
        ...commonFields,
        name,
        homepage: data.urls[0].url,
        wiki: data.urls[1].url,
        comics: comics.items,
      };
    }
  }
}

export default MarvelService;
