import { Spinner } from "@amsterdam/asc-ui"
import { ScaffoldForm } from "@amsterdam/amsterdam-react-final-form"
import ScaffoldFields, { Fields } from "app/components/shared/Form/ScaffoldFields"
import ConfirmScaffoldFields from "./ConfirmScaffoldFields"
import useSubmitConfirmation from "./hooks/useSubmitConfirmation"

type Props<T, U> = {
  fields: { fields: Fields } | undefined
  postMethod: (data: T) => Promise<U>
  afterSubmit?: (result: U) => Promise<unknown>
  initialValues?: Record<string, unknown>
}

const ConfirmScaffoldForm = <T extends Record<string, any>, U extends Record<string, any>>(props: Props<T, U>) => {

  const { fields, postMethod, afterSubmit, initialValues } = props
  const {
    isSubmitted,
    data,
    onSubmit,
    onSubmitConfirm,
    onCancelConfirm
  } = useSubmitConfirmation(postMethod)

  const submitTitle = fields?.fields.submit?.props?.label

  const onSubmitConfirmWrap = async () => {
    const result = await onSubmitConfirm()
    if (afterSubmit === undefined) return
    await afterSubmit(result?.data)
  }

  return (
    fields === undefined ?
    <Spinner /> :
    <ScaffoldForm onSubmit={ onSubmit } initialValues={ initialValues }>
      <ScaffoldFields { ...fields }/>
      { isSubmitted &&
        <ConfirmScaffoldFields<typeof fields.fields>
          fields={ fields.fields }
          data={ data }
          showFields={ Object.keys(fields.fields) }
          onCancel={ onCancelConfirm }
          onSubmit={ onSubmitConfirmWrap }
          submitTitle={ submitTitle }
          showInModal={ true }
        />
      }
    </ScaffoldForm>
  )
}

export default ConfirmScaffoldForm