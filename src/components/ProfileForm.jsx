import { EditFilled } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import React from 'react'
import AboutCard from './AboutCard'
import PhotosCard from './PhotosCard'
import Posts from './Posts'

const ProfileForm = () => {
  return (
    <div className='container'>
      <div className="banner">
        <div className="imgs">

        </div>
        <div className="dp">
          <div className="circle">
            <img src="data:image/png;base64,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"
              alt=""
              className='avatar' />

          </div>

          <div className="details">
            <div className="title">
              <span className="name">Rimsha Naeem</span>
              <span className="belongs">@Rimsha</span>
            </div>

            <Button className='btnEdit'>
              <EditFilled className='icon'/>
              <span>Edit Profile</span>
              
              </Button>
          </div>
        </div>


      </div>

      <Row className='cardSection'>
        <Col className="left" span={10} xs={24} sm={24} md={24} lg={10} xl={10}>
          <AboutCard />
          <PhotosCard />
        </Col>

        <Col className="right" span={14} xs={24} sm={24} md={24} lg={14} xl={14}>
          <Posts />
        </Col>
      </Row>

    </div>
  )
}

export default ProfileForm;