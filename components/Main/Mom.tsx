'use client'

import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Input, Layout, Menu, Row, theme, Form, Select, Radio } from 'antd'
import type { SelectProps } from 'antd'

const { Option } = Select

const Mom = () => {
  const [showInput, setShowInput] = useState(false)
  const [selectedValue, setSelectedValue] = useState(null)
  return (
    <Form>
      <Row style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Form.Item label='姓名' name='姓名' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label='年龄' name='年龄' rules={[{ required: true }]}>
          <Input placeholder='岁' />
        </Form.Item>
        <Form.Item label='身高' name='身高' rules={[{ required: true }]}>
          <Input placeholder='m' />
        </Form.Item>
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Form.Item label='体重(孕前)' name='体重(孕前)' rules={[{ required: true }]}>
          <Input placeholder='kg' />
        </Form.Item>
        <Form.Item label='体重(分娩前)' name='体重(分娩前)' rules={[{ required: true }]}>
          <Input placeholder='kg' />
        </Form.Item>
        <Form.Item label='BMI(分娩前)' name='BMI(分娩前)'>
          <Input defaultValue={'x kg/㎡'} />
        </Form.Item>
        <Form.Item label='BMI(分娩前)' name='BMI(分娩前)'>
          <Input defaultValue={'y kg/㎡'} />
        </Form.Item>
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Form.Item label='教育程度' name='教育程度' rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value='小学/初中'>小学/初中</Radio>
            <Radio value='高中/中专'>高中/中专</Radio>
            <Radio value='大专/职大'>大专/职大</Radio>
            <Radio value='大学本科'>大学本科</Radio>
            <Radio value='硕士/博士'>硕士/博士</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='产时宫内窘迫' name='产时宫内窘迫' rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value='有'>有</Radio>
            <Radio value='否'>否</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='最低胎心率' name='最低胎心率' rules={[{ required: true }]}>
          <Input placeholder='次/分' />
        </Form.Item>
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Form.Item label='产时发热' name='产时发热' rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value='有'>有</Radio>
            <Radio value='否'>否</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='产时抗生素使用' name='产时抗生素使用' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label='胎盘病理报告' name='胎盘病理报告' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Form.Item label='分娩时镇静药物使用' name='分娩时镇静药物使用' rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value='无'>无</Radio>
            <Radio value='苯巴比妥钠'>苯巴比妥钠</Radio>
            <Radio value='地西泮'>地西泮</Radio>
            <Radio value='水合氯醛'>水合氯醛</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='您的职业是：' name='您的职业是：' rules={[{ required: true }]}>
          {/*有点小问题*/}
          <Select
            style={{ width: 120 }}
            allowClear
            value={selectedValue}
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
            onChange={(e: SelectProps) => {
              e.value === '其它（请注明)' ? setShowInput(true) : setShowInput(false)
            }}
          />
          {showInput && <Input placeholder='请输入内容' />}
        </Form.Item>
      </Row>
    </Form>
  )
}

export default Mom
