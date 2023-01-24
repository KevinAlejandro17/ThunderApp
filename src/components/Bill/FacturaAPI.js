const API_URL = "https://thunderapp-w105-backend-2yfhokam6q-wm.a.run.app/api/bills/";

export const getBill = async (userId = 0) => {
    return await fetch(`${API_URL}${userId}`);
};