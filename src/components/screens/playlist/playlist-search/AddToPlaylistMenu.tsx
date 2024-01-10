import { useProfile } from '@/hooks/useProfile'
import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react'
import { Dispatch, FC, SetStateAction } from 'react'

interface IMenu {
  isOpen: boolean
  onOpen: () => void
  onOpenChange: () => void
  createButton: () => void
  playId: number | null
  setPlayId: Dispatch<SetStateAction<number | null>>
}

const AddToPlaylistMenu: FC<IMenu> = ({
  isOpen,
  onOpen,
  onOpenChange,
  createButton,
  playId,
  setPlayId,
}) => {
  const { profile, loading } = useProfile()
  return (
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
            <ModalHeader className="flex text-center justify-center">Select playlist</ModalHeader>
            <ModalBody>
              {profile &&
                !loading &&
                profile.favorites.map((favorites) => (
                  <div
                    key={favorites.playlist.id}
                    className="px-2 py-1 hover:bg-secondary/80 rounded-xl cursor-pointer"
                  >
                    <Checkbox
                      onChange={() => {
                        if (favorites.playlist.id === playId) {
                          setPlayId(null)
                        } else {
                          setPlayId(favorites.playlist.id)
                        }
                      }}
                      isSelected={favorites.playlist.id === playId}
                      color="success"
                      classNames={{ label: 'text-white' }}
                    >
                      {favorites.playlist.name}
                    </Checkbox>
                  </div>
                ))}
            </ModalBody>
            <ModalFooter>
              <Button
                disabled={!playId}
                className="text-center w-full disabled:bg-secondary/40"
                color="success"
                onPress={() => {
                  createButton()
                  onClose()
                }}
              >
                Add to playlist
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
  )
}

export default AddToPlaylistMenu
