import React from 'react'

const Icon = props => (
	<svg>
		<use xlinkHref={`images/${props.local}.svg#${props.name}`} />
	</svg>
)

export default Icon