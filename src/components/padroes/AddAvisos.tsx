import React, { Dispatch, SetStateAction, useState } from 'react'
import { Button } from '../ui/button'
import { ModalAviso } from './modalAvisos'

interface Props {
  setRefreshAviso: Dispatch<SetStateAction<boolean>>
  refreshAviso: boolean
}

export const AddAviso = ({ setRefreshAviso, refreshAviso }: Props) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setDialogIsOpen(true)}>Adicionar Aviso</Button>
      <ModalAviso
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        setRefreshAviso={setRefreshAviso}
        refreshAviso={refreshAviso}
      />
    </>
  )
}
