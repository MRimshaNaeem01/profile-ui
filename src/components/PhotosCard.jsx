import { Button, Card, Col, Row } from 'antd'
import React from 'react'

const PhotosCard = () => {
  return (
    <div className='PhotosCard'>
      <Card>
        <div className='photo'>
        <h1>Photos</h1>
          <a className="view" href='#'>View all</a>
        </div>

        <Row gutter={10} className='imagsRow' >
          <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
            <img className="imgs"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRITQOUjHU5QAAf1iCbIh7WBwWh7WR8j0qOQg&usqp=CAU" />
          </Col>

          <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
            <img className="imgs"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlFBewYQeIsT7qNhsEsenBO3W2YHPoT4NSJA&usqp=CAU" />
          </Col>
          <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
            <img className="imgs"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlFBewYQeIsT7qNhsEsenBO3W2YHPoT4NSJA&usqp=CAU" />
          </Col>

          <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12}>
            <img className="imgs"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRITQOUjHU5QAAf1iCbIh7WBwWh7WR8j0qOQg&usqp=CAU" />
          </Col>

        </Row>

      </Card>
    </div>
  )
}

export default PhotosCard