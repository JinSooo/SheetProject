'use client'

import React from 'react'
import type { MenuProps } from 'antd'
import { Input, Checkbox, Menu, Row, Button, Form, Select, Radio, Col } from 'antd'
import { DataType } from './Main'

interface Props {
  save: (data: DataType) => void
}

const { Option } = Select

const Father = ({ save }: Props) => {
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
            <Form.Item label='年龄' name='年龄'>
              <Input placeholder='岁' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='身高' name='身高'>
              <Input placeholder='m' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='体重' name='体重'>
              <Input placeholder='kg' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='BMI' name='BMI'>
              <Input placeholder='kg/m2，自动填写' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='联系电话' name='联系电话'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='宝宝常住地址' name='宝宝常住地址'>
              <Input placeholder='省 市 区 街道 小区' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='吸烟：' name='吸烟：'>
              <Radio.Group>
                <Radio value='从不吸烟'>从不吸烟</Radio>
                <Radio value='偶尔吸烟'>偶尔吸烟</Radio>
                <Radio value='已戒烟1年以上'>已戒烟1年以上</Radio>
                <Radio value='戒烟未满1年'>戒烟未满1年</Radio>
                <Radio value='正在吸烟'>正在吸烟</Radio>
                <Radio value='被动吸烟'>被动吸烟（家庭或工作场所有人吸烟）</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='饮酒：' name='饮酒：'>
              <Radio.Group>
                <Radio value='无'>无</Radio>
                <Radio value='偶尔'>偶尔</Radio>
                <Radio value='经常'>经常</Radio>
              </Radio.Group>
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
            <Form.Item label='您的职业是：' name='您的职业是：'>
              {/*有点小问题*/}
              <Select
                style={{ width: 120 }}
                options={[
                  { value: '干部', label: '干部' },
                  { value: '工人', label: '工人' },
                  { value: '农民', label: '农民' },
                  { value: '科技/医务/教师', label: '科技/医务/教师' },
                  { value: '家庭妇女', label: '家庭妇女' },
                  { value: '私营业主', label: '私营业主' },
                  { value: '服务业人员', label: '服务业人员' },
                  { value: '无业', label: '无业' },
                  { value: '其它（请注明)', label: '其它（请注明)' },
                ]}
              />
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
            <Form.Item label='家庭年收入' name='家庭年收入'>
              <Select
                style={{ width: 120 }}
                options={[
                  { value: '＜8万', label: '＜8万' },
                  { value: '8-15万', label: '8-15万' },
                  { value: '15-30万', label: '15-30万' },
                  { value: '＞30万', label: '＞30万' },
                  { value: '＞100万', label: '＞100万' },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default Father
