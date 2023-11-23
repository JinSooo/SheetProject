'use client'

import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Input, Button, Menu, Row, theme, Form, Select, Radio, Checkbox, Col } from 'antd'
import type { SelectProps } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { DataType } from './Main'

interface Props {
  save: (data: DataType) => void
}

const { Option } = Select

const Mom = ({ save }: Props) => {
  const [form] = Form.useForm()

  const saveData = () => {
    save(form.getFieldsValue())
  }
  const [selectedValue, setSelectedValue] = useState(true)
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
            <Form.Item label='姓名' name='姓名'>
              <Input />
            </Form.Item>
          </Col>
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
            <Form.Item label='体重(孕前)' name='体重(孕前)'>
              <Input placeholder='kg' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='体重(分娩前)' name='体重(分娩前)'>
              <Input placeholder='kg' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='教育程度' name='教育程度'>
              <Radio.Group>
                <Radio value='小学/初中'>小学/初中</Radio>
                <Radio value='高中/中专'>高中/中专</Radio>
                <Radio value='大专/职大'>大专/职大</Radio>
                <Radio value='大学本科'>大学本科</Radio>
                <Radio value='硕士/博士'>硕士/博士</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='BMI(孕前)' name='BMI(孕前)'>
              <Input placeholder='kg' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='BMI(分娩前)' name='BMI(分娩前)'>
              <Input placeholder='kg' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='产时宫内窘迫' name='产时宫内窘迫'>
              <Radio.Group>
                <Radio value='有'>有</Radio>
                <Radio value='否'>否</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='最低胎心率' name='最低胎心率'>
              <Input placeholder='次/分' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='产时发热' name='产时发热'>
              <Radio.Group>
                <Radio value='有'>有</Radio>
                <Radio value='否'>否</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='产时抗生素使用' name='产时抗生素使用'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='胎盘病理报告' name='胎盘病理报告'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='分娩时镇静药物使用' name='分娩时镇静药物使用'>
              <Radio.Group>
                <Radio value='无'>无</Radio>
                <Radio value='苯巴比妥钠'>苯巴比妥钠</Radio>
                <Radio value='地西泮'>地西泮</Radio>
                <Radio value='水合氯醛'>水合氯醛</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='您的职业是：' name='您的职业是：'>
              <Select
                style={{ width: 180 }}
                options={[
                  { value: '干部', label: '干部' },
                  { value: '工人', label: '工人' },
                  { value: '农民', label: '农民' },
                  { value: '科技/医务/教师', label: '科技/医务/教师' },
                  { value: '家庭妇女', label: '家庭妇女' },
                  { value: '私营业主', label: '私营业主' },
                  { value: '服务业人员', label: '服务业人员' },
                  { value: '无业', label: '无业' },
                  { value: '其它', label: '其它' },
                ]}
                onChange={(e) => {
                  ;`${e}` === '其它' ? setSelectedValue(false) : setSelectedValue(true)
                }}
              />
              <Input placeholder='请输入内容' disabled={selectedValue ? true : false} width={180} />
            </Form.Item>
          </Col>
          <Col span={24} style={{ fontWeight: 'bold', marginBottom: '30px' }}>
            孕期调查：
          </Col>
          <Col span={8}>
            <Form.Item label='孕期疾病或不良嗜好' name='孕期疾病或不良嗜好'>
              <Checkbox.Group style={{ width: '100%' }}>
                <Checkbox value='高血压'>高血压</Checkbox>
                <Checkbox value='心脏病'>心脏病</Checkbox>
                <Checkbox value='糖尿病'>糖尿病</Checkbox>
                <Checkbox value='严重贫血'>严重贫血</Checkbox>
                <Checkbox value='吸毒'>吸毒</Checkbox>
                <Checkbox value='肥胖'>肥胖</Checkbox>
                <Checkbox value='抑郁焦虑'>抑郁焦虑</Checkbox>
                <Checkbox value='使用抗癫痫类药物'>使用抗癫痫类药物</Checkbox>
                饮酒：
                <Radio.Group>
                  <Radio value='无'>无</Radio>
                  <Radio value='偶尔'>偶尔</Radio>
                  <Radio value='经常'>经常</Radio>
                </Radio.Group>
              </Checkbox.Group>
              吸烟：
              <Radio.Group>
                <Radio value='从不吸烟'>从不吸烟</Radio>
                <Radio value='偶尔吸烟'>偶尔吸烟</Radio>
                <Radio value='已戒烟1年以上'>已戒烟1年以上</Radio>
                <Radio value='戒烟未满1年'>戒烟未满1年</Radio>
                <Radio value='正在吸烟'>正在吸烟</Radio>
                <Radio value='被动吸烟'>被动吸烟（怀孕期间家庭和/或工作场所有人吸烟）</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            {'怀孕期间，对下列食物，您食用的频率（1餐计为1次）是:'}
            <Form.Item label='肉类、鱼、虾和蛋类：' name='肉类、鱼、虾和蛋类：' style={{ marginTop: 10 }}>
              <Select
                style={{ width: 120 }}
                options={[
                  { value: '经常（≥6次/周）', label: '经常（≥6次/周）' },
                  { value: '间常（3-5次/周）', label: '间常（3-5次/周）' },
                  { value: '偶尔或不（≤2次/周）', label: '偶尔或不（≤2次/周）' },
                ]}
              />
            </Form.Item>
            <Form.Item label='蔬菜和水果类：' name='蔬菜和水果类：'>
              <Select
                style={{ width: 120 }}
                options={[
                  { value: '经常（≥6次/周）', label: '经常（≥6次/周）' },
                  { value: '间常（3-5次/周）', label: '间常（3-5次/周）' },
                  { value: '偶尔或不（≤2次/周）', label: '偶尔或不（≤2次/周）' },
                ]}
              />
            </Form.Item>
            <Form.Item label='豆类或牛奶：' name='豆类或牛奶：'>
              <Select
                style={{ width: 120 }}
                options={[
                  { value: '经常（≥6次/周）', label: '经常（≥6次/周）' },
                  { value: '间常（3-5次/周）', label: '间常（3-5次/周）' },
                  { value: '偶尔或不（≤2次/周）', label: '偶尔或不（≤2次/周）' },
                ]}
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            {'怀孕期间，您的运动情况是：'}
            <Form.Item
              label='分娩前7天，您有几天能够做到每天至少60分钟及以上的中高强度运动（可累计）？'
              name='分娩前7天，您有几天能够做到每天至少60分钟及以上的中高强度运动（可累计）？'
              style={{ marginTop: 10, height: 100 }}
            >
              <Select
                style={{ width: 180 }}
                options={[
                  { value: '0天', label: '0天' },
                  { value: '1天', label: '1天' },
                  { value: '2天', label: '2天' },
                  { value: '3天', label: '3天' },
                  { value: '4天', label: '4天' },
                  { value: '5天', label: '5天' },
                  { value: '6天', label: '6天' },
                  { value: '7天', label: '7天' },
                  { value: '8天', label: '8天' },
                ]}
              />
            </Form.Item>
            <Form.Item
              style={{ height: 100 }}
              label='怀孕期间，在周末或节假日，您能做到每天至少60分钟及以上的中高强度运动（可累计）？'
              name='怀孕期间，在周末或节假日，您能做到每天至少60分钟及以上的中高强度运动（可累计）？'
            >
              <Select
                style={{ width: 180 }}
                options={[
                  { value: '都能做到', label: '都能做到' },
                  { value: '多数能做到', label: '多数能做到' },
                  { value: '一半的日子能做到', label: '一半的日子能做到' },
                  { value: '少数能做到', label: '少数能做到' },
                  { value: '几乎做不到', label: '几乎做不到' },
                ]}
              />
            </Form.Item>
            {'注：中高强度运动是指让您气喘吁吁或心跳加快的运动，如跑步，篮球，足球，游泳，健身房内跳健身操，搬重物等'}
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default Mom
