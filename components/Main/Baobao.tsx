'use client'

import React from 'react'
import type { MenuProps } from 'antd'
import { Input, Layout, Menu, Row, theme, Form, Select, Radio, Col, Button } from 'antd'
import { DataType } from './Main'

interface Props {
  save: (data: DataType) => void
}

const { Option } = Select

const Baobao = ({ save }: Props) => {
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
            <Form.Item label='患儿研究编号' name='患儿研究编号'>
              <Input placeholder='医院全名首写拼音字母+住院号' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='姓名' name='姓名'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='出生日期' name='出生日期'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='入院时日龄' name='入院时日龄'>
              <Input placeholder='天数' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='性别' name='性别'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='民族' name='民族'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='出生医院' name='出生医院'>
              <Input placeholder='天数' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='研究医院' name='研究医院'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='住院号' name='住院号'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='课题组本医院负责人(姓名)' name='课题组本医院负责人1'>
              <Input placeholder='天数' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='课题组本医院负责人(手机号)' name='课题组本医院负责人2'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='研究组别' name='研究组别'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='入院日期' name='入院日期'>
              <Input placeholder='天数' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='出院日期' name='出院日期'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='住院号' name='住院号'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='出院诊断' name='出院诊断'>
              <Input placeholder='全部，分列' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='主要诊断' name='主要诊断'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='其他诊断' name='其他诊断'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='住院时间' name='住院时间'>
              <Input placeholder='天' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='出院时体重' name='出院时体重'>
              <Input placeholder='g' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='住院费用' name='住院费用'>
              <Input placeholder='元' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='孕次' name='孕次'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='产次' name='产次'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='单胎/双胎/三胞胎' name='单胎/双胎/三胞胎'>
              <Radio.Group>
                <Radio value='单胎'>单胎</Radio>
                <Radio value='双胎'>双胎</Radio>
                <Radio value='三胞胎'>三胞胎</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='胎龄' name='胎龄'>
              <Input placeholder='周+天' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='出生时体重' name='出生时体重'>
              <Input placeholder='g' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='身高' name='身高'>
              <Input placeholder='cm' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='头围' name='头围'>
              <Input placeholder='cm' />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='小于胎龄儿' name='小于胎龄儿'>
              <Radio.Group>
                <Radio value='是'>是</Radio>
                <Radio value='否'>否</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='试管婴儿' name='试管婴儿'>
              <Radio.Group>
                <Radio value='是'>是</Radio>
                <Radio value='否'>否</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='羊水' name='羊水'>
              <Radio.Group>
                <Radio value='清'>清</Radio>
                <Radio value='浑浊I°'>浑浊I°</Radio>
                <Radio value='浑浊II°'>浑浊II°</Radio>
                <Radio value='浑浊III°'>浑浊III°</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='胎膜早破＞18hrs' name='胎膜早破＞18hrs'>
              <Radio.Group>
                <Radio value='是'>是</Radio>
                <Radio value='否'>否</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='分娩方式' name='分娩方式'>
              <Radio.Group>
                <Radio value='顺产'>顺产</Radio>
                <Radio value='产钳助产'>产钳助产</Radio>
                <Radio value='剖腹产'>剖腹产</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Apgar评分' name='Apgar评分'>
              <Radio.Group>
                <Radio value='1分钟'>1分钟：</Radio>
                <Radio value='5分钟'>5分钟：</Radio>
                <Radio value='10分钟'>10分钟：</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='分娩方式' name='分娩方式'>
              <Radio.Group>
                <Radio value='顺产'>顺产</Radio>
                <Radio value='产钳助产'>产钳助产</Radio>
                <Radio value='剖腹产'>剖腹产</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='脐带血血气' name='脐带血血气'>
              <Radio.Group>
                <Radio value='pH'>pH</Radio>
                <Radio value='PaO2  mmHg'>PaO2 mmHg</Radio>
                <Radio value='PaCO2   mmHg'>PaCO2 mmHg</Radio>
                <Radio value='BE  mmol/L'>BE mmol/L</Radio>
                <Radio value='Lac  mmol/L'>Lac mmol/L</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default Baobao
