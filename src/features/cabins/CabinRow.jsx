import styled from "styled-components";
import CreateCabinForm from "./CreateCabinForm";
import { useState } from "react";
import useDeleteCabin from "./useDeleteCabin";

import { formatCurrency } from "../../utils/helpers";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ButtonIcon from "../../ui/ButtonIcon";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { device } from "../../styles/breakpoints";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";

  @media ${device.tablet} {
    font-size: 1.2rem;
  }
  @media ${device.laptop} {
    font-size: 1.6rem;
  }
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const ButtonsDiv = styled.div`
  display: flex;
  gap: 3px;
`;

const ButtonCabinRow = styled.button`
background: none;
border: none;
padding: 0.3rem;
border-radius: var(--border-radius-sm);
transition: all 0.2s;

@media ${device.tablet} {
  padding: 0.4rem;
}
@media ${device.laptop} {
  padding: 0.6rem;
}

&:hover {
  background-color: var(--color-grey-100);
}

& svg {
  width: 0.8rem;
  height: 0.8rem;
  color: var(--color-brand-600);

  @media ${device.tablet} {
    width: 1.4rem;
    height: 1.4rem;
  }

  @media ${device.laptop} {
    width: 2rem;
    height: 2rem;
  }
}
`;

function CabinRow({ cabin }) {
  const {
    id: cabinId,
    name,
    image,
    maxCapacity,
    regularPrice,
    discount,
    description,
  } = cabin;

  const [isEditing, setIsEditing] = useState(false);
  const { isCreating, createCabinMutate } = useCreateCabin();
  const { isDeleting, deleteCabinMutate } = useDeleteCabin();

  function handleDuplicate() {
    createCabinMutate({
      name: `Copy of ${name}`,
      image,
      maxCapacity,
      regularPrice,
      discount,
      description,
    });
  }

  const isWorking = isCreating || isDeleting || isEditing;

  return (
    <>
      <Table.Row role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>First up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? <Discount>{discount}</Discount> : <span>&mdash;</span>}
        <ButtonsDiv>
          <ButtonCabinRow onClick={handleDuplicate} disabled={isWorking}>
            {" "}
            <HiSquare2Stack />
          </ButtonCabinRow>
          <Modal>
            <Modal.Open opens="cabin-edit">
              <ButtonCabinRow
                onClick={() => setIsEditing((isEditing) => !isEditing)}
                disabled={isWorking}
              >
                <HiPencil />
              </ButtonCabinRow>
            </Modal.Open>
            <Modal.Window name="cabin-edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>
          </Modal>
          <Modal>
            <Modal.Open opens="cabin-confirm-delete">
              <ButtonCabinRow disabled={isWorking}>
                <HiTrash />
              </ButtonCabinRow>
            </Modal.Open>
            <Modal.Window name="cabin-confirm-delete">
              <ConfirmDelete
                resourceName={name}
                onConfirm={() => deleteCabinMutate(cabinId)}
                disabled={isDeleting}
              />
            </Modal.Window>
          </Modal>

          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={cabinId} />
              <Menus.List id={cabinId}>
                <Menus.Button
                  onClick={handleDuplicate}
                  icon={<HiSquare2Stack />}
                  disabled={isWorking}
                >
                  Duplicate
                </Menus.Button>
                <Modal.Open opens="cabin-edit">
                  <Menus.Button icon={<HiPencil />} disabled={isWorking}>
                    Edit
                  </Menus.Button>
                </Modal.Open>

                <Modal.Open opens="cabin-confirm-delete">
                  <Menus.Button icon={<HiTrash />} disabled={isWorking}>
                    Delete
                  </Menus.Button>
                </Modal.Open>
              </Menus.List>
              <Modal.Window name="cabin-edit">
                <CreateCabinForm cabinToEdit={cabin} />
              </Modal.Window>
              <Modal.Window name="cabin-confirm-delete">
                <ConfirmDelete
                  resourceName={name}
                  onConfirm={() => deleteCabinMutate(cabinId)}
                  disabled={isDeleting}
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </ButtonsDiv>
      </Table.Row>
    </>
  );
}

export default CabinRow;
