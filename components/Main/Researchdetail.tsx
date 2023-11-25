'use client'

import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Input, Layout, Checkbox, Row, Button, Form, Select, Radio, Col, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { DataType } from './Main'

interface Props {
  save: (data: DataType) => void
}
interface DataTypeo {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

const data: DataTypeo[] = [
  {
    key: '1',
    name: 'Bayley-III婴幼儿发展量表',
    age: 0,
    address: '',
    tags: [''],
  },
  {
    key: '2',
    name: '大运动',
    age: 0,
    address: '',
    tags: [''],
  },
  {
    key: '3',
    name: '精细运动',
    age: 0,
    address: '',
    tags: [''],
  },
  {
    key: '4',
    name: '认知能力/发育商',
    age: 0,
    address: '',
    tags: [''],
  },
  {
    key: '5',
    name: '社交能力',
    age: 0,
    address: '',
    tags: [''],
  },
  {
    key: '6',
    name: '语言与交流能力',
    age: 0,
    address: '',
    tags: [''],
  },
  {
    key: '7',
    name: '视频脑电图（上传或邮寄）',
    age: 0,
    address: '',
    tags: [''],
  },
  {
    key: '8',
    name: '抽搐（次/24hrs）',
    age: 0,
    address: '',
    tags: [''],
  },
  {
    key: '9',
    name: '与抽搐同步的异常脑电图',
    age: 0,
    address: '',
    tags: [''],
  },
  {
    key: '10',
    name: '抗癫痫类药物',
    age: 0,
    address: '',
    tags: [''],
  },
  {
    key: '11',
    name: '听力筛查（AABR）',
    age: 0,
    address: '',
    tags: [''],
  },
  {
    key: '12',
    name: '眼底照片（尽量上传）',
    age: 0,
    address: '',
    tags: [''],
  },
  {
    key: '13',
    name: '三维头颅MRI',
    age: 0,
    address: '',
    tags: [''],
  },
  {
    key: '14',
    name: '身高（cm）',
    age: 0,
    address: '',
    tags: [''],
  },
  {
    key: '15',
    name: '体重（kg）',
    age: 0,
    address: '',
    tags: [''],
  },
  {
    key: '16',
    name: '头围（cm）',
    age: 0,
    address: '',
    tags: [''],
  },
  {
    key: '17',
    name: 'BMI',
    age: 0,
    address: '',
    tags: [''],
  },
]

const Researchdetail = ({ save }: Props) => {
  const [form] = Form.useForm()
  const [tableData, setTableData] = useState<string[][]>([])

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const set = (i: number, j: number) => (e: any) =>
    setTableData((tableData) => {
      if (!tableData[i]) tableData[i] = ['undefined', 'undefined', 'undefined', 'undefined']
      // @ts-ignore
      tableData[i][j] = e.target.value
      return tableData
    })

  const columns: ColumnsType<DataTypeo> = [
    {
      title: ' ',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <div>{text}</div>,
    },
    {
      title: '出院前或一月龄',
      dataIndex: 'age',
      key: '出院前或一月龄',
      render: (_, record, index) => <Input onChange={set(index, 0)} />,
    },
    {
      title: '3月龄',
      dataIndex: 'address',
      key: '3月龄',
      render: (_, record, index) => <Input onChange={set(index, 1)} />,
    },
    {
      title: '1岁',
      key: '1岁',
      render: (_, record, index) => <Input onChange={set(index, 2)} />,
    },
    {
      title: '2岁',
      key: '2岁',
      render: (_, record, index) => <Input onChange={set(index, 3)} />,
    },
  ]

  const saveData = () => {
    // @ts-ignore
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const formData = data.reduce<any[]>(
      (obj, val, index) => {
        for (let i = 1; i < columns.length; i++) {
          // @ts-ignore
          obj[`${val.name}-${columns[i].title}`] = tableData?.[index]?.[i - 1] ?? ''
        }
        return obj
      },
      {
        // @ts-ignore
        key: '',
        name: '',
        age: 0,
        address: '',
        tags: [],
      },
    )

    console.log(form.getFieldsValue(), tableData, formData)
    save({ ...form.getFieldsValue(), ...formData })
  }
  return (
    <>
      <Button
        onClick={saveData}
        style={{ transform: 'translate(1140px,-10px)', backgroundColor: 'rgb(22,119,255)', color: 'white' }}
      >
        保存
      </Button>
      <Form form={form} labelCol={{ span: 8 }} labelWrap wrapperCol={{ span: 14 }}>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label='五大能力家庭评估异常项目及首发时间' name='五大能力家庭评估异常项目及首发时间'>
              <Input placeholder='月龄' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='ESSENCE问卷调查临界值出现时间' name='ESSENCE问卷调查临界值出现时间'>
              <Input placeholder='月龄' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='NBNA（37周）' name='NBNA（37周）'>
              <Input placeholder='分' />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label='NDDs确诊类型：' name='NDDs确诊类型：'>
              <Checkbox.Group>
                <Checkbox value='智力发育障碍'>智力发育障碍</Checkbox>
                <Checkbox value='发育性言语或语言障碍'>发育性言语或语言障碍</Checkbox>
                <Checkbox value='孤独症谱系障碍'>孤独症谱系障碍</Checkbox>
                <Checkbox value='发育性学习障碍'>发育性学习障碍</Checkbox>
                <Checkbox value='注意缺陷多动障碍'>注意缺陷多动障碍</Checkbox>
                <Checkbox value='抽动障碍'>抽动障碍</Checkbox>
                <Checkbox value='其他神经发育障碍'>其他神经发育障碍</Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='NDDs确诊时间：' name='NDDs确诊时间：'>
              <Input placeholder='岁 月' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='NBNA（40周）' name='NBNA（40周）'>
              <Input placeholder='分' />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Table
            className='mh-0 h-full '
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 100 }}
            scroll={{ y: 380 }}
          />
        </Row>
      </Form>
    </>
  )
}

export default Researchdetail
