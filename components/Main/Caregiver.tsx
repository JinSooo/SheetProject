'use client'

import React from 'react'
import type { MenuProps } from 'antd'
import { Input, Layout, Menu, Row, Button, Form, Select, Radio, Col } from 'antd'
import { DataType } from './Main'

interface Props {
  save: (data: DataType) => void
}

const Caregiver = ({ save }: Props) => {
  const [form] = Form.useForm()

  const saveData = () => {
    save(form.getFieldsValue())
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
            <Form.Item label='身份' name='身份'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='年龄' name='年龄'>
              <Input placeholder='岁' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='教育程度' name='教育程度'>
              <Select
                style={{ width: 120 }}
                options={[
                  { value: '小学/初中', label: '小学/初中' },
                  { value: '高中/中专', label: '高中/中专' },
                  { value: '大专/职大', label: '大专/职大' },
                  { value: '大学本科', label: '大学本科' },
                  { value: '硕士/博士', label: '硕士/博士' },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='吸烟：' name='吸烟：'>
              <Select
                style={{ width: 120 }}
                options={[
                  { value: '从不吸烟', label: '从不吸烟' },
                  { value: '偶尔吸烟', label: '偶尔吸烟' },
                  { value: '已戒烟1年以上', label: '已戒烟1年以上' },
                  { value: '大学本科', label: '大学本科' },
                  { value: '硕士/博士', label: '硕士/博士' },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='吸毒：' name='吸毒：'>
              <Radio.Group>
                <Radio value='是'>是</Radio>
                <Radio value='否'>否</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='小孩的兄：' name='小孩的兄：'>
              <Radio.Group>
                <Radio value='1个'>1个</Radio>
                <Radio value='2个'>2个</Radio>
              </Radio.Group>
              <Input placeholder='岁' style={{ width: '100px' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='小孩的姐：' name='小孩的姐：'>
              <Radio.Group>
                <Radio value='1个'>1个</Radio>
                <Radio value='2个'>2个</Radio>
              </Radio.Group>
              <Input placeholder='岁' style={{ width: '100px' }} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default Caregiver
