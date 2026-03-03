import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

// Add token to requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Handle 401 errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export const authApi = {
    register: (email, name, password) => api.post('/auth/register', { email, name, password }),
    login: (email, password) => api.post('/auth/login', { email, password }),
    logout: () => api.post('/auth/logout'),
    checkSystemUser: () => api.get('/auth/system'),
};

export const accountsApi = {
    createAccount: (data) => api.post('/accounts', data),
    listAccounts: () => api.get('/accounts'),
    getAllAccounts: () => api.get('/accounts/all'),
    getBalance: (accountId) => api.get(`/accounts/balance/${accountId}`),
};

export const transactionsApi = {
    createTransaction: (data) => api.post('/transactions', data),
    addInitialFunds: (data) => api.post('/transactions/system/initial-funds', data),
};

// Esports APIs
export const esportsApi = {
    /**
     * Get team lineups (optionally filter by category/game and team)
     * @param {Object} params { category, team }
     */
    getTeams: (params = {}) => api.get('/esports/get-team', { params }),

    /**
     * Add a new team lineup
     * @param {Object} data { categoryName, teamName, players }
     */
    addTeam: (data) => api.post('/esports/add-team', data),

    /**
     * Update a team lineup by ID
     * @param {string} id
     * @param {Object} data
     */
    updateTeam: (id, data) => api.patch(`/esports/${id}`, data),

    /**
     * Delete a team lineup by ID
     * @param {string} id
     */
    deleteTeam: (id) => api.delete(`/esports/${id}`),

    /**
     * Add a player (with image upload)
     * @param {FormData} formData
     */
    addPlayer: (formData) => api.post('/esports/add-player', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    }),

    /**
     * Get all players of a specific team (optionally filter by category)
     * @param {Object} params { category, team }
     */
    getTeamPlayers: (params = {}) => api.get('/esports/team-players', { params }),
};

export default api;
