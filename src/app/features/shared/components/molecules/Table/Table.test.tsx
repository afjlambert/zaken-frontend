import React from "react"
import { mount } from "enzyme"

import TableCell from "./components/TableCell/TableCell"
import Table from "./Table"
import SmallSkeleton from "../../atoms/Skeleton/SmallSkeleton"
import FixedTableCell from "./components/TableCell/FixedTableCell"

describe("Table", () => {
  const columns = [{ header: "column1", minWidth: 100 }, { header: "column2", minWidth: 100 }]
  const data = [
    ["foo", "bar"],
    ["zoo", "baz"]
  ]

  describe("when NOT loading", () => {
    it("should render 4 table cells", () => {
      const component = mount(<Table data={data} columns={columns} />)
      expect(component.find(TableCell).length).toEqual(4)
    })

    describe("when given fixedColumnWidth", () => {
      it("should render fixed cells", () => {
        const component = mount(<Table data={data} columns={columns} hasFixedColumn={true} />)
        const fixedCells = component.find(FixedTableCell)

        expect(fixedCells.length).toEqual(2)
      })
    })
  })

  describe("when loading", () => {
    it("should render SmallSkeletons", () => {
      const component = mount(<Table data={data} columns={columns} loading={true} />)
      // 5 * 2 = numLoadingRows * numColumns
      expect(component.find(SmallSkeleton).length).toEqual(10)
    })
  })
})