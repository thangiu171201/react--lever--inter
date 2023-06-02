// import axios from "axios";
import axios from "./customize-axios";
const fetchAllUser = async () => {
    return axios.get("/api/users?page=1");
};

export { fetchAllUser };
