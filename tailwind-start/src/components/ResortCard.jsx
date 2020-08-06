import React from 'react'
import PropTypes from 'prop-types'
import Joi from '@hapi/joi'
import Button from './Button'
import { ReactComponent as Star } from '../assets/icon-star.svg'

const propTypes = {
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    text: PropTypes.string,
    image: PropTypes.shape(
        {
            url: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
        }
    ),
    actions: PropTypes.arrayOf(
        (array, index) => {
            const schema = Joi.object({
                text: Joi.string().required(),
                callback: Joi.function().optional()
            });

            const { error } = schema.validate(array[index]);

            if(error) return error;
        }
    )
}

export default function ResortCard(props) {
    /* Set heading & subheading to defaults in case we don't get them. Unnecessary with propTypes. */
    const { heading="Heading", subheading="Subheading", text, image, actions } = props;

    return (
        <div className="shadow rounded-md max-w-sm overflow-hidden transform hover:scale-105 transition ease-out duration-200">
            {
                image && <img className="h-48 w-full object-cover"
                    src={image.url}
                    alt={image.alt}/>
            }
            <div className="px-3 py-4">
                <h1 className="font-semibold text-xl">{heading}</h1>
                <h3 className="text-sm text-gray-500">{subheading}</h3>
                {/* If text is defined, isn't an empty string, then pop it in the div and display. */}
                {
                    text && text!=="" &&
                    <div className="text-sm text-gray-500 mt-3">{text}</div>
                }
                {
                    actions && actions.length > 0 &&
                    <div className="mt-3 -ml-2 -mb-2 space-x-1">
                        {
                            actions.map((action, index) => {
                                return <Button key={index} onClick={action.callback}
                                    buttonStyle={Button.styles.outline} text={action.text} Icon={Star}>
                                        {text}
                                    </Button>
                            })
                        } 
                    </div>
                }
            </div>
        </div>
    )
}

ResortCard.propTypes = propTypes;


/* return <Button key={index} onClick={action.callback}
            className="px-2 py-1 text-purple-700 uppercase
            hover:bg-purple-100 focus:bg-purple-200 focus:outline-none active:bg-purple-300">{action.text}</Button> */