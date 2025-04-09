import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

class HttpService {
    private instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL:"http://localhost:3000", // Set your base API URL here
            timeout: 10000, // Request timeout
        });

        // Intercept requests to add authorization token if available
        this.instance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                const token = localStorage.getItem("token");
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`; // Attach token in the Authorization header
                }
                return config;
            },
            (error:AxiosError) => Promise.reject(error)
        );

        // Intercept responses to handle errors
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error:AxiosError) => {
                // Handle different error statuses here
                if (error.response?.status === 401) {
                    // Token expired or unauthorized error - redirect to login
                    // You can implement a logout here or redirect to the login page
                    console.error("Unauthorized. Redirecting to login.");
                }
                return Promise.reject(error);
            }
        );
    }

    // GET request
    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.instance.get<T>(url, config);
        return response.data;
    }

    // POST request
    public async post<T,V>(url: string, data: V, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.instance.post<T>(url, data, config);
        return response.data;
    }

    // PUT request
    public async put<T,V>(url: string, data: V, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.instance.put<T>(url, data, config);
        return response.data;
    }

    // DELETE request
    public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.instance.delete<T>(url, config);
        return response.data;
    }
}

export default new HttpService();
