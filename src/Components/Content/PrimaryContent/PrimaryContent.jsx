import React from 'react'
import SummaryResult from '../../SummaryResult/SummaryResult'
import './PrimaryContent.css'

const PrimaryContent = () => {
  return (
    <div className='primary-content'>
        <div className="primary-content-wrap">
            <input className="primary-content-input" type="url" name="url-text" id="url-text" placeholder='Paste URL' />
            <button className='cta-btn-primary smaller'>Submit</button>
        </div>
        <SummaryResult/>
    </div>
  )
}

export default PrimaryContent