import * as httpRequest from '../routes/utils/httpRequest';

export const getAllUsers = async (_page, perPage = 30) => {
    try {
        const response = await httpRequest.get('/users', {
            params: {
                _page,
                _limit: perPage
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}