import { createContext, useContext, useState } from 'react'

export type CommandContextType = {
  modal: {
    isOpen: boolean
    data: any
  }
  openModal: (data: any) => void
  closeModal: () => void
}

export const CommandContext = createContext<CommandContextType>({
  modal: {
    isOpen: false,
    data: null,
  },
  openModal: () => {},
  closeModal: () => {},
})

export const CommandProvider = ({ children }: { children: any }) => {
  const [modal, setModal] = useState<CommandContextType['modal']>({
    isOpen: false,
    data: null,
  })

  const openModal = (data: any) => {
    setModal({
      isOpen: true,
      data,
    })
  }

  const closeModal = () => {
    setModal({
      isOpen: false,
      data: null,
    })
  }

  return (
    <CommandContext.Provider
      value={{
        modal,
        openModal,
        closeModal,
      }}
    >
      {children}
    </CommandContext.Provider>
  )
}

export const useCommand = () => {
  const context = useContext(CommandContext)
  if (context === undefined) {
    throw new Error('useCommand must be used within a CommandProvider')
  }
  return context
}

export default CommandContext
