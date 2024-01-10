'use client'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import { FC } from 'react'

interface IDeleteModal {
  isOpen: boolean
  onOpen: () => void
  onOpenChange: () => void
  removeHandler?: () => void
}

const DeleteModal: FC<IDeleteModal> = ({ removeHandler, isOpen, onOpen, onOpenChange }) => {
  return (
    <>
      <Modal
        classNames={{
          body: 'bg-primary',
          header: 'bg-primary',
          footer: 'bg-primary',
          closeButton: 'text-slate-600',
        }}
        backdrop="blur"
        motionProps={{
          variants: {
            enter: {
              opacity: 1,
              transition: {
                duration: 0.05,
                ease: 'easeOut',
              },
            },
            exit: {
              opacity: 0,
              transition: {
                duration: 0.05,
                ease: 'easeIn',
              },
            },
          },
        }}
        size="xs"
        hideCloseButton={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-center justify-center">Delete item</ModalHeader>
              <ModalBody className="text-center text-sm">
                Are you sure you want to delete the item?
              </ModalBody>
              <ModalFooter className="justify-center flex">
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="secondary" onPress={onClose} onClick={removeHandler}>
                  Delete
                </Button>
              </ModalFooter>
              {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default DeleteModal
