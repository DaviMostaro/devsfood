let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories: async () => {
        const res = await fetch(`${BASE}/categories`);
        const json = await res.json();

        return json;
    },

    getProducts: async (category, page, search) => {
        let fields = {};
        if(category !== 0) {
            fields.category = category;
        }
        if(page > 0) {
            fields.page = page;
        }
        if(search !== '') {
            fields.search = search;
        }

        let queryString = new URLSearchParams(fields).toString();

        const res = await fetch(`${BASE}/products?`+queryString);
        const json = await res.json();

        return json;
    },
    login: async (email, password) => {
        const res = await fetch(`${BASE}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const json = await res.json();
        return json;
    },

    register: async (name, email, password) => {
        const res = await fetch(`${BASE}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await res.json();
        return json;
    },

    getUser: async (token) => {
        const res = await fetch(`${BASE}/user?token=${token}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
       // Verificar status da resposta
        const json = await res.json();
        console.log(json);
        return json;
    },

    updateUser: async (token, name, email, password, password_confirm) => {
        const res = await fetch(`${BASE}/user?token=${token}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ name, email, password, password_confirm })
        });
        const json = await res.json();
        return json;
    },
};