import React, { useCallback, useRef } from 'react';
import { Form } from './styles'

import { Input } from '../Input'
import { Modal } from '../Modal'
import { FiCheckSquare } from 'react-icons/fi';

type FoodPlateProps = {
    id: number;
    name: string;
    image: string;
    price: string;
    description: string;
    available: boolean;
}

type AddFoodModalProps = {
    isOpen: boolean;
    setIsOpen: () => void;
    handleAddFood: (food: Omit<FoodPlateProps, 'id' | 'available'>) => void;
}

type newFoodProps = {
    name: string;
    image: string;
    price: string;
    description: string;
}

export function ModalAddFood({isOpen, handleAddFood, setIsOpen} : AddFoodModalProps) {

    const handleSubmit = useCallback(
        async (data: newFoodProps) => {
          handleAddFood(data);
          setIsOpen();
        },
        [handleAddFood, setIsOpen],
      );

     const formRef = useRef(null)

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Novo Prato</h1>
                <Input name="image" placeholder="Cole o link aqui" />

                <Input name="name" placeholder="Ex: Moda Italiana" />
                <Input name="price" placeholder="Ex: 19.90" />

                <Input name="description" placeholder="Descrição" />
                <button type="submit" data-testid="add-food-button">
                    <p className="text">Adicionar Prato</p>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form>
        </Modal>
    );
}