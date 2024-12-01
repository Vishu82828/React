
function App() {

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path='SingIn' element={<SingIn/>} />
          <Route path='SingUp' element={<SingUp/>} />
          <Route path='Home' element={<Home/>} />
          <Route path='About' element={<About/>} />
          <Route path='Contact' element={<Contact/>} />
          <Route path='Services' element={<Services/>} />
          <Route path='Blog' element={<Blog/>} />
          <Route path='Cart' element={<Cart/>} />
          <Route path='Checkout' element={<Checkout/>} />
          <Route path='Profile' element={<Profile/>} />
          <Route path='Admin' element={<Admin/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
