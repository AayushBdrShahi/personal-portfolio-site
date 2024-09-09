import './Mywork.css'
import mywork_data from '../../assets/mywork_data'
// Import Arrow icon from assets

const Mywork = () => {
  return (
    <div id="work" className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        {/* <img src="" alt="" /> //Theme pattern image */}
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <img key={index} className="mywork-image" src={work.w_img} alt="" />
          )
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        {/* <img src={} alt="" /> import arrow icon */}
      </div>
    </div>
  )
}

export default Mywork
