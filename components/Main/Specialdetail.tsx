'use client'

import React from 'react'
import type { MenuProps } from 'antd'
import { Input, Layout, Menu, Row, Button, Form, Select, Radio, Col } from 'antd'
import { DataType } from './Main'

interface Props {
  save: (data: DataType) => void
}

const { Option } = Select

const Specialdetail = ({ save }: Props) => {
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
          <Col span={3} style={{ fontWeight: 'bold', transform: 'translateX(40px)' }}>
            黄疸儿：
          </Col>
          <Col span={7}>
            <Form.Item label='第1-2周内总胆红素峰值：' name='第1-2周内总胆红素峰值：'>
              <Input suffix='µmol/L' style={{ width: '140px' }} />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label='发生时日龄' name='发生时日龄'>
              <Input type='number' suffix='天' style={{ width: '80px' }} />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label='处理：' name='处理：'>
              <Radio.Group>
                <Radio value='仅光疗'>仅光疗</Radio>
                <Radio value='换血+光疗'>换血+光疗</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={3} style={{ fontWeight: 'bold', transform: 'translateX(40px)' }}>
            早产儿：
          </Col>
          <Col span={7}>
            <Form.Item label='产前激素促肺成熟' name='产前激素促肺成熟'>
              <Select
                style={{ width: 120 }}
                options={[
                  { value: '足量正规应用', label: '足量正规应用' },
                  { value: '应用，但未足量', label: '应用，但未足量' },
                  { value: '未应用', label: '未应用' },
                  { value: '不详', label: '不详' },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label='肺表面活性物质应用：' name='肺表面活性物质应用：'>
              <Radio.Group>
                <Radio value='是'>是</Radio>
                <Radio value='否'>否</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label='主要机械通气模式' name='主要机械通气模式'>
              <Select
                style={{ width: 120 }}
                options={[
                  { value: 'NCPAP', label: 'NCPAP' },
                  { value: 'NIMV', label: 'NIMV' },
                  { value: '高流量通气', label: '高流量通气' },
                  { value: 'SIMV', label: 'SIMV' },
                  { value: 'HFOV', label: 'HFOV' },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={3}>{''}</Col>
          <Col span={7}>
            <Form.Item label='气管插管次数' name='气管插管次数'>
              <Input type='number' suffix='次' style={{ width: '80px' }} />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label='机械通气总时间' name='机械通气总时间'>
              <Input type='number' suffix='天' style={{ width: '80px' }} />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label='BPD' name='BPD'>
              <Select
                style={{ width: 120 }}
                options={[
                  { value: '轻度', label: '轻度' },
                  { value: '中度', label: '中度' },
                  { value: '高流量通气', label: '高流量通气' },
                  { value: '重度', label: '重度' },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={3}>{''}</Col>
          <Col span={7}>
            <Form.Item label='ROP' name='ROP'>
              <Input placeholder='分级，分区' style={{ width: '120px' }} />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label='全胃肠道喂养' name='全胃肠道喂养'>
              <Input placeholder='达120ml/kg/d' suffix='天' style={{ width: '140px' }} />
            </Form.Item>
          </Col>
          <Col span={7}>{''}</Col>
          <Col span={3} style={{ fontWeight: 'bold' }}>
            先天性心脏病宝宝：
          </Col>
          <Col span={7}>
            <Form.Item label='心脏彩超结果：' name='心脏彩超结果：'>
              <Input style={{ width: '140px' }} />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label='心电图结果：' name='心电图结果：'>
              <Input style={{ width: '140px' }} />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label='安静下脉搏氧饱和度数据：' name='安静下脉搏氧饱和度数据：'>
              <Input style={{ width: '140px' }} />
            </Form.Item>
          </Col>
          <Col span={3}>{''}</Col>
          <Col span={7}>
            <Form.Item label='若已手术治疗，CPB时间：' name='若已手术治疗，CPB时间：'>
              <Input suffix='分' style={{ width: '140px' }} />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label='主动脉阻断时间：' name='主动脉阻断时间：'>
              <Input suffix='分' style={{ width: '140px' }} />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label='深低温时间：' name='深低温时间：'>
              <Input suffix='分' style={{ width: '140px' }} />
            </Form.Item>
          </Col>
          <Col span={3}>{''}</Col>
          <Col span={7}>
            <Form.Item label='最低体温：' name='最低体温：'>
              <Input suffix='℃' style={{ width: '140px' }} />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label='CPB过程中PaO2在稳态水平：' name='CPB过程中PaO2在稳态水平：'>
              <Input style={{ width: '140px' }} />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label='主要辅助通气方式：' name='主要辅助通气方式：'>
              <Input style={{ width: '140px' }} />
            </Form.Item>
          </Col>
          <Col span={3}>{''}</Col>
          <Col span={7}>
            <Form.Item label='辅助通气时间：' name='辅助通气时间：'>
              <Input suffix='天' style={{ width: '140px' }} />
            </Form.Item>
          </Col>
          <Col span={14}>{''}</Col>
          <Col span={2} style={{ fontWeight: 'bold', transform: 'translateX(40px)' }}>
            宝宝饮食：
          </Col>
          <Col span={11}>
            <Form.Item label='母乳：' name='母乳：'>
              <Input placeholder='开始时间（第x小时或月龄）' style={{ width: '150px' }} />
              {'~'}
              <Input placeholder='结束时间（月龄）' style={{ width: '140px' }} />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item label='母乳+配方奶：' name='母乳+配方奶：'>
              <Input placeholder='开始时间（第x小时或月龄）' style={{ width: '150px' }} />
              {'~'}
              <Input placeholder='结束时间（月龄）' style={{ width: '140px' }} />
            </Form.Item>
          </Col>
          <Col span={2}>{''}</Col>
          <Col span={11}>
            <Form.Item label='配方奶：' name='配方奶：'>
              <Input placeholder='开始时间（第x小时或月龄）' style={{ width: '150px' }} />
              {'~'}
              <Input placeholder='结束时间（月龄）' style={{ width: '140px' }} />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item label='添加辅食：' name='添加辅食：'>
              <Input placeholder='开始时间（第x小时或月龄）' style={{ width: '150px' }} />
              {'~'}
              <Input placeholder='结束时间（月龄）' style={{ width: '140px' }} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default Specialdetail
