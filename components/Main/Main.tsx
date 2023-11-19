'use client'

import type { MenuProps } from 'antd'
import { Button, Form, Input, Layout, Menu, Radio, Row, Select, theme } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { useState } from 'react'
import Baobao from '../Main/baobao'
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
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
        }}
      >
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
      <Button onClick={exportExcel}>Export</Button>
      <Content style={{ height: '100vh' }}>{kind === '1' ? <Baobao /> : '2'}</Content>
    </Layout>
  )
}

export default Main
