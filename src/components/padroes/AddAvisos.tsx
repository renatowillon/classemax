import React, { useState } from 'react'
import { Button } from '../ui/button'
import { ModalAviso } from './modalAvisos'

export const AddAviso = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setDialogIsOpen(true)}>Adicionar Aviso</Button>
      <ModalAviso isOpen={dialogIsOpen} setIsOpen={setDialogIsOpen} />
    </>
  )
}
