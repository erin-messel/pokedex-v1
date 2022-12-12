export default ({ member, handleClose, onChoice }) => {
    return (
      
        
          //member.map(item => (
            
            <button type="button" variant="primary" onClick={handleClose} key={member.id} >
            {/* <button type="button" onClick={() => { onChoice(member) }} key={member.id} > */}
              <img src={`images/${member.id}.png`} alt={member.name} />
            </button>
          //))
        
      
    )
  }