'use client'

import React from 'react'
import type { MenuProps } from 'antd'
import { Input, Layout, Menu, Row, theme, Form, Select, Radio, Col } from 'antd'

const { Option } = Select

const Researchdetail = () => {
  return (
    <Form labelCol={{ span: 8 }} labelWrap wrapperCol={{ span: 14 }}>
      <Row gutter={24}>
        <Col span={3}>黄疸儿：</Col>
        <Col span={7}>
          <Form.Item label='第1-2周内总胆红素峰值：' name='第1-2周内总胆红素峰值：' rules={[{ required: true }]}>
            <Input suffix='µmol/L' style={{ width: '140px' }} />
          </Form.Item>
        </Col>
        <Col span={7}>
          <Form.Item label='发生时日龄' name='发生时日龄' rules={[{ required: true }]}>
            <Input type='number' suffix='天' style={{ width: '80px' }} />
          </Form.Item>
        </Col>
        <Col span={7}>
          <Form.Item label='处理：' name='处理：' rules={[{ required: true }]}>
            <Radio.Group>
              <Radio value='仅光疗'>仅光疗</Radio>
              <Radio value='换血+光疗'>换血+光疗</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default Researchdetail
