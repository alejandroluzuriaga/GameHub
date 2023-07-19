import '../PagesCSS/NotFound/notfound.css'
const NotFound = () => {
  console.log("19/07/2023 :D")
  return (
    <div className="not_found">
      <div className="image-container">
        <img 
        src="https://res.cloudinary.com/djgkryxou/image/upload/v1689727581/GameHub/notFound_pt9qfq.png" 
        alt="Not Found image" />
      <div className='not-found-message'>
        <p>
          Oops! Page Not Found :(
        </p>
      </div>
      </div>
    </div>
  )
}

export default NotFound