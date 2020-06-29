import React from "react"
import styled from "styled-components"
import { Button, Paragraph, Heading } from "@datapunt/asc-ui"

import Modal, { ModalBlock } from "./Modal"
import SpinnerButton from "../../atoms/SpinnerButton/SpinnerButton"

type Props = {
  title: string
  heading: string
  isOpen: boolean
  onClose: () => void
  onConfirm: () => Promise<any>

  okValue?: string
  cancelValue?: string
}

const ModalBlockFlex = styled(ModalBlock)`
  display: flex
`

const Flex = styled.div`
  flex: 1;
`


const ConfirmModal: React.FC<Props> = ({ isOpen, onClose, title, heading, children, okValue = "Ok", cancelValue = "Annuleren", onConfirm }) => (
  <Modal isOpen={isOpen} onClose={onClose} title={title}>
    <ModalBlock>
      <Heading forwardedAs='h4'>{ heading }</Heading>
      <Paragraph>{ children }</Paragraph>
    </ModalBlock>
    <ModalBlockFlex>
      <Flex>
        <Button variant="tertiary" onClick={onClose}>{ cancelValue }</Button>
      </Flex>
      <div>
        <SpinnerButton onClick={onConfirm} variant="secondary">{ okValue }</SpinnerButton>
      </div>
    </ModalBlockFlex>
  </Modal>
)

export default ConfirmModal
