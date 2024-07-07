import axios from "axios";

const params = {
    headers: {
        Authorization: 'Bearer '+'7617fd87ae3fb168ab89ebe67df6ad5cad1ee78e925fa62cd0495b580280fe8a8eab4a5800a4e9e63d36a3fddbbea6253573643b967393543ab43f784f0f97a99c294d35e4c0068f4f2cf1220ebc1e7fb3c17a40532b370a322bc47288becacd43e5325c50a7d8791cb153d0688a1285db984868282a72cf99581793344d4753'
    }
}

const fetchDataFromApi = async (url) => {

    try {
        const {data} = await axios.get("http://localhost:1337/api" + url, params);
        return data;
    }
    catch(err) {
        console.log(err);
    }

}

export default fetchDataFromApi;


