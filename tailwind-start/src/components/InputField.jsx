import React from 'react'
import { ReactComponent as Heart } from '../assets/icon-heart.svg'
import { ReactComponent as Star } from '../assets/icon-star.svg'
import PropTypes from 'prop-types'

const propTypes = {
    iconStart: PropTypes.object,
    iconEnd: PropTypes.object
}

export default function InputField(props) {
    const { iconStart:IconStart = undefined, iconEnd:IconEnd = undefined } = props;
    
    const additionalClassConditions = `${IconStart ? ' material-input-with-icon-start' : ''}${IconEnd ? ' material-input-with-icon-end' : ''}`

    return (
        <div className={`material-input-container${additionalClassConditions}`}>
            {
                IconStart && <IconStart className="material-input-icon material-input-icon-start"/>
            }
            {
                IconEnd && <IconEnd className="material-input-icon material-input-icon-end" />
            }
            <input className="material-input" required pattern=".*"/>
            <label className="material-input-label">
                <span className="material-input-label-inner">Label</span>
            </label>
            <div className="material-input-border" />
        </div>
    );
}

InputField.propTypes = propTypes;

{/* <div className="relative m-10 inline-block h-12 border-b border-black border-opacity-25">
            <input
                className="material-input"
                required
                pattern=".*"
                />
            <label className="material-input-label">
                <span className="px-2">Label</span>
            </label>
            <div className="material-input-underline"></div>
        </div> */}