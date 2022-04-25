
export const HOST = "https://web-develop-react-express-chat.herokuapp.com"

//Funcion para coger usuarios GET
export  async function get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export function authToken(id, password) {

    // En autenticación Basic, usuario y contraseña se separan con ':'
    const authToken = `${id}:${password}`;
    // Y se codifican en Base64
    const base64token = btoa(authToken);
    return `Basic ${base64token}`;
}

export async function authGet(url, token) {
    const response = await fetch(
        url,
        {
            headers: {
                Authorization: token
            }
        }
    );
    const data = await response.json();
    return data;
}

export async function authPost(url, token, data) {
    const response = await fetch(
        url,
        {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        }
    );
    const responseData = await response.json();
    return responseData;
}