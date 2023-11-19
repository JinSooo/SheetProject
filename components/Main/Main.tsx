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

const { Header, Content, Footer, Sider } = Layout
const { Option } = Select

const arr = ['宝宝资料', '母亲资料', '父亲资料', '主要看护者资料', '特殊资料', '研究资料(早产儿按纠正年龄算)']

const items: MenuProps['items'] = arr.map((_, index) => ({
  key: String(index + 1),
  label: arr[index],
  title: arr[index],
}))

const Main = () => {
  const [kind, setKind] = useState<string>('1')

  const exportExcel = () => {
    const data: SheetDataInfo = {
      sheetName: 'test',
      data: [{ 姓名: '123', 年龄: '43252', 测试: '啊沙发沙发' }],
    }
    exportExcelFile([data])
  }

  return (
    <Layout className='w-full h-full'>
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
            <Baobao />
          ) : kind === '2' ? (
            <Mom />
          ) : kind === '3' ? (
            <Father />
          ) : kind === '4' ? (
            <Caregiver />
          ) : kind === '5' ? (
            <Specialdetail />
          ) : (
            <Researchdetail />
          )}
        </Content>
      </Layout>
    </Layout>
  )
}

export default Main
