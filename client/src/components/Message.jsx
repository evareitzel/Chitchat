function Message({ message}) {
  const t = new Date(message.time)
 
  return(
  <li className="Li">
    <div className="Message">
      {message.text}
      <button>🗑</button> 
      {/* // onClick={(m) =>handleDeleteClick(m)} */}
    </div>
    <p className="Sender">
      {/* {(message.user.id !== user.id) ? (`${message.user.username} | `) : ('')}   */}
      {t.toLocaleString('en-us')}             
      {/* <button value={m} onClick={(e)=>handleDeleteClick}>x</button> */}
    </p>
  </li>
)
}

export default Message