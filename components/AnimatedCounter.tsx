'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <div className='w-full'>
        <CountUp 
            prefix='$'
            duration={1.5}
            decimal='.'
            decimals={2}
            end={amount}
        />
    </div>
  )
}

export default AnimatedCounter