import { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import { FormHandles } from "@unform/core";

interface IFood {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

interface IModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: IFood) => void;
}

export default function ModalAddFood({
  isOpen,
  setIsOpen,
  handleAddFood,
}: IModalAddFoodProps) {

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: IFood) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" icon={FiCheckSquare}/>

        <Input name="name" placeholder="Ex: Moda Italiana" icon={FiCheckSquare}/>
        <Input name="price" placeholder="Ex: 19.90" icon={FiCheckSquare}/>

        <Input name="description" placeholder="Descrição" icon={FiCheckSquare}/>
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
