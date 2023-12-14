import { GlobalOutlined, HeartOutlined, HeatMapOutlined, LockOutlined } from '@ant-design/icons'
import { Card, Col, Row } from 'antd'
import React from 'react'

const AboutCard = () => {
  return (
    <Card className='AboutCard'>
      <h1>About</h1>
      <p >Lorem ipsum dra adipisci omnis masci omnis masci omnis masci omnis masci omnis maxime.
      </p>
      <Row className='counts'>
        <Col span={7} xs={4} sm={4} md={4} lg={4} xl={7}>
          <p className="title">Posts</p>
          <span>1.3k</span>
        </Col>
        <Col>
          <hr className='line' />

        </Col>
        <Col span={7} xs={4} sm={4} md={4} lg={4} xl={7}>
          <p className="title">Following</p>
          <span>1.3k</span>
        </Col>
        <Col>
          <hr className='line' />

        </Col>

        <Col span={7} xs={4} sm={4} md={4} lg={4} xl={7}>
          <p className="title">Followers</p>
          <span>2,323</span>
        </Col>
      </Row>
      <Row gutter={[0, 12]} className='list'>
        <Col span={24}>
          <HeatMapOutlined className='icon' />
          Hello worlds
        </Col>
        <Col span={24}>
          <HeartOutlined className='icon' />
          Its awesome wesieet
        </Col>
        <Col span={24}>
          <LockOutlined className='icon' />
          adderes nore qssj
        </Col>
        <Col span={24}>
          <GlobalOutlined className='icon' />
          rimsha@gmail.com
        </Col>
        <Col span={24}>
          <LockOutlined className='icon' />
          raciw and saltij rivers
        </Col>
      </Row>
    </Card>
  )
}

export default AboutCard