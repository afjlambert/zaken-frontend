import { useCallback, useMemo } from "react"
import { useLocation } from "@reach/router"
import { ChevronRight } from "app/components/shared/Icons"
import { Button } from "@amsterdam/asc-ui"

import type { SearchResult } from "app/components/search/SearchResults/SearchResults"
import useOtherAddressesByBagId from "app/state/rest/custom/useOtherAddresses/useOtherAddresses"
import Table from "app/components/shared/Table/Table"
import navigateTo from "app/routing/navigateTo"

type Props = {
  onAddressChosen: () => void
  bagId: string
}

const columns = [
  { minWidth: 300, header: "Adres" },
  { minWidth: 100 }
]

const mapData = (onClick: (bagId: string) => void) => (data: SearchResult) =>
({
  itemList: [
    `${ data.adres }`,
    <Button
      onClick={() => onClick(data.adresseerbaar_object_id)}
      as="span"
      variant="textButton"
      iconSize={24}
      iconLeft={<ChevronRight />}>
      Open
    </Button>
  ]
})

const OtherAddressesTable: React.FC<Props> = ({ bagId, onAddressChosen }) => {
  const { pathname } = useLocation()
  const [data, { isBusy }] = useOtherAddressesByBagId(bagId)
  const onClick = useCallback((otherBagId: string) => {
    onAddressChosen()
    return navigateTo(pathname.replace(bagId, otherBagId))
  }, [ onAddressChosen, bagId, pathname ])

  const mappedData = useMemo(
    () => data?.map(mapData(onClick)),
    [data, onClick]
  )

  return (<Table
    columns={columns}
    data={mappedData}
    loading={isBusy}
    numLoadingRows={3}
    hasFixedColumn={true}
    noValuesPlaceholder={"Er zijn (nog) geen andere adressen gevonden"}
  />)
}

export default OtherAddressesTable
