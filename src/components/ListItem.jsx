import React from 'react'

const ListItem = (props) => {
  return (
    <div>
      <span>{props.id+ " "}</span>
      <span>{props.name}</span>
    </div>
  )
}

export default ListItem
