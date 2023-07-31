import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { ItemData } from '../interface/ItemData';

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<ItemData[]> => {
    const response = axios.get(API_URL + '/item');
    return response;
}

export function useItemData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['item-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}