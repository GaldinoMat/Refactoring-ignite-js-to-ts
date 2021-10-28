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

interface IModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (food: IFood) => void;
  editingFood: {}
}

export default function ModalEditFood({
  isOpen,
  setIsOpen,
  handleUpdateFood,
  editingFood
}: IModalEditFoodProps) {

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: IFood) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" icon={FiCheckSquare}/>

        <Input name="name" placeholder="Ex: Moda Italiana" icon={FiCheckSquare}/>
        <Input name="price" placeholder="Ex: 19.90" icon={FiCheckSquare}/>

        <Input name="description" placeholder="Descrição" icon={FiCheckSquare}/>

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
