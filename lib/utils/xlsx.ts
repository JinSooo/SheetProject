import { JSON2SheetOpts, WorkBook, utils, writeFile } from 'xlsx'

export interface SheetDataInfo {
  sheetName: string
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  data: any[]
  opts?: JSON2SheetOpts
}

export function exportExcelFile(arr: SheetDataInfo[], fileName = 'download.xlsx') {
  const workBook: WorkBook = {
    SheetNames: [],
    Sheets: {},
  }

  for (const item of arr) {
    const jsonWorkSheet = utils.json_to_sheet(item.data, item.opts)
    workBook.SheetNames.push(item.sheetName)
    workBook.Sheets[item.sheetName] = jsonWorkSheet
  }

  return writeFile(workBook, fileName)
}
