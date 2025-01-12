
import { RouteComponentProps } from "@reach/router"

import isValidUrlParamBAGId from "app/routing/utils/isValidUrlParamBAGId"
import DefaultLayout from "app/components/layouts/DefaultLayout/DefaultLayout"
import Row, { RowWithColumn } from "app/components/layouts/Grid/Row"
import Column from "app/components/layouts/Grid/Column"
import DetailHeader from "app/components/shared/DetailHeader/DetailHeader"
import People from "app/components/addresses/People/People"
import PageHeading from "app/components/shared/PageHeading/PageHeading"
import MockWrapper from "app/components/shared/MockWrapper/MockWrapper"
import NotFoundPage from "app/pages/errors/NotFoundPage"

type Props = {
  bagId: string
}

const PeoplePage: React.FC<RouteComponentProps<Props>> = ({ bagId }) => (
  isValidUrlParamBAGId(bagId) ?
    <DefaultLayout>
      <DetailHeader bagId={ bagId } />
      <RowWithColumn>
        <PageHeading />
      </RowWithColumn>
      <Row>
        <Column spanLarge={ 50 }>
          <MockWrapper>
            <People bagId={ bagId } />
          </MockWrapper>
        </Column>
      </Row>
    </DefaultLayout> :
    <NotFoundPage />
)

export default PeoplePage
