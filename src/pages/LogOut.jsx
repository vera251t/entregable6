import './styles/LogOut.css'

const LogOut = ({onLogout}) => {
    const handleLogOut = ({}) => {
        onLogout()
    }
  return (
    <main className='log__contain'>
        <div className='log__content'>
            <img src="https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png" alt="" />
            <p>Estás logueado</p>
            <button className='log__btn' onClick={handleLogOut}>Log Out</button>
        </div>
    </main>
  )
}

export default LogOut