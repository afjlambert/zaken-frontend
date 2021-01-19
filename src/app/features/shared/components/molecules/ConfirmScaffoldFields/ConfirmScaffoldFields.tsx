import React, { useState, useMemo } from "react"
import styled from "styled-components"
import { Button, Spinner } from "@amsterdam/asc-ui"
import { Fields } from "app/features/shared/components/molecules/Form/ScaffoldFields"

import DefinitionList from "app/features/shared/components/molecules/DefinitionList/DefinitionList"
import Modal, { ModalBlock } from "app/features/shared/components/molecules/Modal/Modal"

type RequestBody = any
type Props = {
  fields: Fields
  data: RequestBody
  title?: string
  onCancel?: () => void
  cancelTitle?: string
  onSubmit?: () => Promise<any>
  submitTitle?: string
  showInModal?: boolean
}

const defaultTitle = "Controleer of onderstaande gegevens kloppen"
const defaultCancelTitle = "Wijzig"
const defaultSubmitTitle = "Opslaan"
const noop = () => {}

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`
const Wrap = styled.div`
  position: relative;
`
const SpinnerWrap = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`

const createValuesObject = (fields: Fields, data: RequestBody) =>
  Object.keys(data).reduce((acc, key) => {
    const props = fields[key].props
    const { label } = props
    const v = data[key]
    const value = props.hasOwnProperty("options") ? (props as { options: any }).options[v] : v
    acc[label as string] = value
    return acc
  }, {} as Record<string, string>)

const ConfirmScaffoldFields: React.FC<Props> = ({
  fields,
  data,
  title = defaultTitle,
  onCancel = noop,
  cancelTitle = defaultCancelTitle,
  onSubmit = noop,
  submitTitle = defaultSubmitTitle,
  showInModal = false
}) => {
  const [isSubmitting, setSubmitting] = useState(false)
  const values = useMemo(() => createValuesObject(fields, data), [data, fields])

  const onSubmitWrap = async () => {
    setSubmitting(true)
    await onSubmit()
    setSubmitting(false)
  }

  const content = (
    <>
      { !showInModal ? <h1>{ title }</h1> : null }
      <Wrap>
        <DefinitionList values={ values } />
        <ButtonWrap>
          <Button variant="primaryInverted" onClick={ onCancel }>{ cancelTitle }</Button>
          <Button variant="secondary" onClick={ onSubmitWrap }>{ submitTitle }</Button>
        </ButtonWrap>
        { isSubmitting &&
          <SpinnerWrap>
            <Spinner size={ 36 } />
          </SpinnerWrap>
        }
      </Wrap>
    </>
  )

  return showInModal ?
    <Modal title={ title } isOpen={ true } onClose={ onCancel }>
      <ModalBlock>
        { content }
      </ModalBlock>
    </Modal> :
    content
}
export default ConfirmScaffoldFields