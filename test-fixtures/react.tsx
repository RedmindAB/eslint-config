// Test file for React config
import { useState } from "react"

type Props = {
  onClose(): void
  title: string
}

const Modal = ({ onClose, title }: Props) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => {
    setIsOpen(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal">
      <h2>{title}</h2>
      <button onClick={handleClose} type="button">
        Close
      </button>
    </div>
  )
}

export default Modal
