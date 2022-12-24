import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer UdjPOuYiqB7Kg_2KiD9SNvX1-Ivo9f_KR7MrZC3wx9el3_9pfzIgeYw6U3YhCK9jmPnoK0EmwiRV3mka62nEh4yc77gUhE5tSdSjMIHQOBzGBY3G8LI_iQpFL1eYY3Yx'
    }
});