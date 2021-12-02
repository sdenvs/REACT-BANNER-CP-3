// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {details} = props
  const {headerText, description, className} = details
  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p>{description}</p>
      <button className="button">Show More</button>
    </li>
  )
}
export default BannerCardItem
