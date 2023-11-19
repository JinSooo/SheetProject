'use client'

import type { MenuProps } from 'antd'
import React, { useState } from 'react'
import { Form, Input, Layout, Menu, Radio, Row, Select, theme } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import Baobao from '../Main/Baobao'
import Mom from '../Main/Mom'
import Father from '../Main/Father'
import Caregiver from '../Main/Caregiver'
import Specialdetail from '../Main/Specialdetail'
import Researchdetail from '../Main/Researchdetail'

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
      <Content style={{ height: '100vh' }}>
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
  )
}

export default Main
