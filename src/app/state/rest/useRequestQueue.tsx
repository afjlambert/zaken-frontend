import { useReducer, useCallback, useEffect, useState } from "react"
import produce from "immer"

type QueuedPromise = () => Promise<any>

type QueueItem = {
  url: string
  method: string
  promise: QueuedPromise
}

type State = QueueItem[]

type Action =
  | { type: "PUSH", item: QueueItem }
  | { type: "SHIFT" }

export type RequestQueue = {
  isPendingRequest: (url: string) => boolean
  pushRequest: (url: string, method: string, promise: QueuedPromise) => void
}

const reducer = produce((draft: State, action: Action) => {
  switch(action.type) {
    case "PUSH":
      if (!isPending(draft, action.item.url)) {
        draft.push(action.item)
      } 
      break
    case "SHIFT":
      draft.shift()
      break
  }
})

const isPending = (state: Readonly<State>, url: string): boolean =>
  state.find(_ => _.url === url) !== undefined

export const useRequestQueue = () => {
  const [isBusy, setIsBusy] = useState(false)
  const [state, dispatch] = useReducer(reducer, [])
  const isPendingRequest = useCallback((url) => isPending(state, url), [ state ])

  const pushRequest = useCallback(
    (url: string, method: string, promise: QueuedPromise) => { dispatch({ type: "PUSH", item: { url, method, promise  } }) },
    [ dispatch ]
  )

  const shiftRequest = useCallback(
    () => dispatch({ type: "SHIFT" }),
    [ dispatch ]
  )

  // Call items in queue one by one.
  useEffect(() => {
    if (state[0] && !isBusy) {
      setIsBusy(true)
      state[0]
        .promise()
        .finally(() => {
          shiftRequest()
          setIsBusy(false)
        })
    }
  }, [ state, shiftRequest, setIsBusy, isBusy ])

  return { isPendingRequest, pushRequest }
}
