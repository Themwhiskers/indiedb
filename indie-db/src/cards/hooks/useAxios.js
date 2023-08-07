import axios from "axios";
import { useUser } from "../../users/providers/UserProvider";
import { useEffect } from "react";
import { useSnackbar } from '../../providers/SnackbarProvider';

const useAxios = () => {
    const { token } = useUser();
    const snack = useSnackbar();

    useEffect(() => {
        axios.defaults.headers.common["x-auth-token"] = token;

        if (snack) {
            axios.interceptors.request.use((date) => {
                return Promise.resolve(data);
            }, null);
            axios.interceptors.response.use(null, (error) => {
                const expectedError = error.response && error.response.status >= 400;
                if (expectedError) snack(error.message, 'error');
                return Promise.reject(error);
            });
        }
    }, [snack, token]);

}

export default useAxios;