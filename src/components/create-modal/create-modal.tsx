import { useEffect, useState } from 'react';
import { useItemDataMutate } from '../../hooks/useItemDataMutate';
import { ItemData } from '../../interface/ItemData';

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess, isLoading } = useItemDataMutate();

    const submit = () => {
        const itemData: ItemData = {
            title, 
            price,
            image
        }
        mutate(itemData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no shop</h2>
                <form className="input-container">
                    <Input label="Title" value={title} updateValue={setTitle}/>
                    <Input label="Price" value={price} updateValue={setPrice}/>
                    <Input label="Image" value={image} updateValue={setImage}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'posting...' : 'post'}
                </button>
            </div>
        </div>
    )
}