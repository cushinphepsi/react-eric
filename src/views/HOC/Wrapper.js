import React from 'react'

const randomColor = () => {
    const arrColor = ['#473abb', '#0fc2d6', '#1da453', '#95a41d', '#a4271d']
    const random = Math.floor(Math.random() * arrColor.length - 1)
    return arrColor[random]
}

function Wrapper(WrapColor) {
    const colorStyle = randomColor()
    return (props) => (
        <div style={{ color: colorStyle }}>
            <WrapColor {...props} />
        </div>
    )
}

export default Wrapper