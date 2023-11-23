'use client'

import styled from '@emotion/styled'
import { Button, Card, Divider, Form, Input, Row } from 'antd'
import left from '../assets/left.svg'
import right from '../assets/right.svg'

const Register = () => {
  return (
    <Row
      style={{
        display: 'flex',
        backgroundColor: '#fff',
        color: 'rgb(115, 124, 140)',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Background />
      <ShadowCard>
        <Title>请注册</Title>
        <Form>
          <Form.Item name={'username'} rules={[{ required: true, message: '请输入用户名' }]}>
            <Input
              placeholder={'用户名'}
              type='text'
              id={'username'}
              style={{
                border: '2px solid',
                width: '280px',
                marginBottom: '20px',
              }}
            />
          </Form.Item>
          <Form.Item name={'password'} rules={[{ required: true, message: '请输入密码' }]}>
            <Input
              placeholder={'密码'}
              type='password'
              id={'password'}
              style={{
                border: '2px solid',
                width: '280px',
                marginBottom: '20px',
              }}
            />
          </Form.Item>
          <Form.Item name={'cpassword'} rules={[{ required: true, message: '请确认密码' }]}>
            <Input
              placeholder={'确认密码'}
              type='password'
              id={'cpassword'}
              style={{
                border: '2px solid',
                width: '280px',
                marginBottom: '20px',
              }}
            />
          </Form.Item>
          <Form.Item>
            <LongButton htmlType={'submit'} type={'primary'}>
              注册
            </LongButton>
            {/*此type专指antd样式*/}
          </Form.Item>
        </Form>
        <Divider />
        <Button type={'link'} style={{ marginTop: '20px', cursor: 'pointer' }}>
          已经有账号了？直接登录
        </Button>
      </ShadowCard>
    </Row>
  )
}

export default Register

export const LongButton = styled(Button)`
  width: 100%;
`

const Title = styled.h1`
  margin-bottom: 2.4rem;
  font-size: 20px;
  color: rgb(94, 108, 132);
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem);
  background-image: url(${left}), url(${right});
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;

`

const Header = styled.header`
  padding: 20px 0;
  background-size: 8rem;
  width: 100%;
`

const ShadowCard = styled(Card)`
  width: 400px;
  min-height: 600px;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`

const Container = styled.div`
  display: flex;
  background-color: #fff;
  color: rgb(115, 124, 140);
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`
