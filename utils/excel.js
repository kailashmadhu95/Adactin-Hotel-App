import XLSX from 'xlsx'

export function xcelReader() {
    const xcel = 'TestData/hotel.xlsx'
    const xcelRead = XLSX.readFile(xcel)
    const sheetname= xcelRead.SheetNames[0]
    const sheet = xcelRead.Sheets[sheetname]
    const data = XLSX.utils.sheet_to_json(sheet)
    return data;
    
}