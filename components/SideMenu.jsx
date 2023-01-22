import React from 'react'
import { recording_channels, top_channels } from '@/data/mock-data'
import { BsDot } from 'react-icons/bs';
import {RiMovieLine} from 'react-icons/ri'
import Image from 'next/image'

const SideMenu = () => {
  return (
    <div className='sidebar'>
      <div>
        {/* d-sm-none */}
        <p className='sidebar--header d-xl-flex '>Recommended Chanels</p>
        <p className='sidebar--icon'><RiMovieLine size={25} className="d-xl-none" /></p>
      </div>
      {recording_channels.map((item, index) => (
        <div key={index} className='channels'>
          <div>
            <Image src={item.avatar} width='50' height='50' alt='/' />
          </div>
          
          {/* TODO Convert user-info into Component */}
          <div className='user-info'>
            <div>
              <p>{item.username}</p>
              <p className='dusty_gray'>{item.game_name}</p>
            </div>
            <p className='d-flex align-items-center'>
              <BsDot color='red' size={40} />
              {item.rank}K
            </p>
          </div>

        </div>
      ))}

    </div>
  )
}

export default SideMenu