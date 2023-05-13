import { axios } from "axios";

const registerClient = async (clientData) => {
    try {
        const response = await axios.post("http:localhost:19000/api/cliente", clientData)
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};