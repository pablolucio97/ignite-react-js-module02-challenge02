import React, { useCallback, useRef } from 'react';
import { Form } from './styles'

import { Input } from '../Input'
import { Modal } from '../Modal'
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';


type FoodProps = {
    id: number;
    name: string;
    image: string;
    price: string;
    description: string;
    available: boolean;
}

type EditFoodProps = {
    isOpen: boolean;
    setIsOpen: () => void;
    handleUpdateFood: (food: Omit<FoodProps, 'id' | 'available'>) => void;
    editingFood: FoodProps;
}

type EditFoodDataProps = {
    name: string;
    image: string;
    price: string;
    description: string;
}


export function ModalEditFood({editingFood, isOpen, setIsOpen, handleUpdateFood } : EditFoodProps) {


    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(
        async (data: EditFoodDataProps) => {
          handleUpdateFood(data);
          setIsOpen();
        },
        [handleUpdateFood, setIsOpen],
      );

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
                <h1>Editar Prato</h1>
                <Input name="image" placeholder="Cole o link aqui" />

                <Input name="name" placeholder="Ex: Moda Italiana" />
                <Input name="price" placeholder="Ex: 19.90" />

                <Input name="description" placeholder="Descrição" />

                <button type="submit" data-testid="edit-food-button">
                    <div className="text">Editar Prato</div>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form>
        </Modal>
    );
}