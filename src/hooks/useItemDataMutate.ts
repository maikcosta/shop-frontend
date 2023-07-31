import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { ItemData } from '../interface/ItemData';

const API_URL = 'http://localhost:8080';

const postData = async (data: ItemData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/item', data);
    return response;
}

export function useItemDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['item-data'])
        }
    })

    return mutate;
}