
const TopBar = () => {
  return (
    <section className='topBarSection'>
    <div className='companyTitle'>
        <h2>
            SUBY
        </h2>
    </div>

    <div className='searchBar'> 
         <input type='text' placeholder='search...'/>
    </div>

    <div className='userAuth'>
        Login & Signup
    </div>
</section>
  )
}

export default TopBar