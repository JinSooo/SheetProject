'use client'

import type { MenuProps } from 'antd'
import { Form, Input, Layout, Menu, Radio, Row, Select, theme, Button } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useState } from 'react'
import Baobao from '../Main/Baobao'
import Mom from '../Main/Mom'
import Father from '../Main/Father'
import Caregiver from '../Main/Caregiver'
import Specialdetail from '../Main/Specialdetail'
import Researchdetail from '../Main/Researchdetail'
import { SheetDataInfo, exportExcelFile } from '@/lib/utils/xlsx'

export interface DataType {
  [key: string]: string | number
}
interface DListType {
  datalist: DataType[]
  sheetName: string[]
}

const { Header, Content, Footer, Sider } = Layout
const { Option } = Select

const arr = ['宝宝资料', '母亲资料', '父亲资料', '主要看护者资料', '特殊资料', '研究资料(早产儿按纠正年龄算)']

const items: MenuProps['items'] = arr.map((_, index) => ({
  key: String(index + 1),
  label: arr[index],
  title: arr[index],
}))

const initialdata: DListType = {
  datalist: [], // 你的 DataType[] 类型的数据
  sheetName: [''],
}

const Main = () => {
  const [kind, setKind] = useState<string>('1')
  const [dataList, setDataList] = useState<DListType>(initialdata)
  dataList.sheetName[0] = '宝宝资料'
  dataList.sheetName[1] = '母亲资料'
  dataList.sheetName[2] = '父亲资料'
  dataList.sheetName[3] = '主要看护者资料'
  dataList.sheetName[4] = '特殊资料'
  dataList.sheetName[5] = '研究资料(早产儿按纠正年龄算)'
  const exportExcel = () => {
    const data: SheetDataInfo[] = []
    for (let i = 0; i < 6; i++) {
      data[i] = { data: [], sheetName: dataList.sheetName[i] }
      if (dataList.datalist[i]) {
        data[i].data = [dataList.datalist[i]]
      }
    }
    exportExcelFile(data)
    // exportExcelFile([
    //   {
    //     data: [{ '1': '2' }],
    //     sheetName: '123',
    //     opts: {},
    //   },
    // ])
  }

  const saveData = (index: number) => {
    return (data: DataType) => {
      dataList.datalist[index] = data
    }
  }

  console.log(dataList)

  return (
    <Layout className='w-full h-full' style={{ height: '900px' }}>
      <Header className='flex justify-end items-center h-[64px]'>
        <Button onClick={exportExcel}>导出</Button>
      </Header>
      <Layout>
        <Sider>
          <Menu
            theme='dark'
            mode='inline'
            defaultSelectedKeys={['1']}
            items={items}
            onClick={(e) => {
              setKind(e.key)
            }}
          />
        </Sider>
        <Content className='h-full box-border p-6'>
          {kind === '1' ? (
            <Baobao save={saveData(0)} />
          ) : kind === '2' ? (
            <Mom save={saveData(1)} />
          ) : kind === '3' ? (
            <Father save={saveData(2)} />
          ) : kind === '4' ? (
            <Caregiver save={saveData(3)} />
          ) : kind === '5' ? (
            <Specialdetail save={saveData(4)} />
          ) : (
            <Researchdetail save={saveData(5)} />
          )}
        </Content>
      </Layout>
    </Layout>
  )
}

export default Main
