import './Spons.scss'

function Spons() {
  const SponsLogo = [
    {
      "image": 'Images/Spons/sLogo.png',
    },
    {
      "image": 'Images/Spons/sLogo.png',
    },
    {
      "image": 'Images/Spons/sLogo.png'
    },
    {
      "image": 'Images/Spons/sLogo.png'
    },
    {
      "image": 'Images/Spons/sLogo.png'
    },
    {
      "image": 'Images/Spons/sLogo.png'
    },
    {
      "image": 'Images/Spons/sLogo.png'
    },
    {
      "image": 'Images/Spons/sLogo.png'
    },

  ];

  return (
    <div className='Spons'>
      <div className='Spons__parent'>
        <div className='Spons__parent--element primary'>
          {SponsLogo.map((item) => {
            return(
              <img className='Spons__parent--element--image' src={item.image}/>
            )
          })}
        </div>
        <div className='Spons__parent--element secondary'>
          {SponsLogo.map((item) => {
            return(
              <img className='Spons__parent--element--image' src={item.image}/>
            )
          })}
        </div>
      </div>
      <div className='Spons__parent'>
        <div className='Spons__parent--element primary1'>
          {SponsLogo.map((item) => {
            return(
              <img className='Spons__parent--element--image' src={item.image}/>
            )
          })}
        </div>
        <div className='Spons__parent--element secondary1'>
          {SponsLogo.map((item) => {
            return(
              <img className='Spons__parent--element--image' src={item.image}/>
            )
          })}
        </div>
      </div>
      <div className='Spons__parent'>
        <div className='Spons__parent--element primary2'>
          {SponsLogo.map((item) => {
            return(
              <img className='Spons__parent--element--image' src={item.image}/>
            )
          })}
        </div>
        <div className='Spons__parent--element secondary2'>
          {SponsLogo.map((item) => {
            return(
              <img className='Spons__parent--element--image' src={item.image}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Spons;