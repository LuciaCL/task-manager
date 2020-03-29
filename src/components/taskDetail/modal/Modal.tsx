import { Button, Classes, Intent } from "@blueprintjs/core"

import React from "react"
import { StyledDialog } from "../styled"

export interface Props {
  cancelText?: string
  confirmText?: string
  children: React.ReactNode
  isOpen: boolean
  onCancel?: () => void
  onConfirm?: () => void
  title?: string
}

export const Modal = ({
  cancelText = "Cancel",
  confirmText = "Confirm",
  children,
  isOpen,
  onCancel,
  onConfirm,
  title = "Message",
}: Props) => {

  const handleClose = () => onCancel && onCancel()

  return (
    <StyledDialog
      hasBackdrop={true}
      enforceFocus={true}
      isOpen={isOpen}
      onClose={handleClose}
      title={title}
    >
      <aside className={Classes.DIALOG_BODY}>
        {children}
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Button intent={Intent.DANGER} onClick={onCancel}>
              {cancelText}
            </Button>
            <Button
              intent={Intent.SUCCESS}
              onClick={onConfirm}
            >
              {confirmText}
            </Button>
          </div>
        </div>
      </aside>

    </StyledDialog>

  )
}
