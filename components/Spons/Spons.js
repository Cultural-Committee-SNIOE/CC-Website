import './Spons.scss'

function Spons() {
    const SponsLogo = [
        {
            "image": 'Images/Spons/sLogo.png',  },
        {
            "image": 'Images/Spons/sLogo.png',  },    
        {
            "image": 'Images/Spons/sLogo.png'   },
        {
            "image": 'Images/Spons/sLogo.png'   },           
        {
            "image": 'Images/Spons/sLogo.png'   },                 
        {
            "image": 'Images/Spons/sLogo.png'   }, 
        {     
            "image": 'Images/Spons/sLogo.png'   }, 
        {     
            "image": 'Images/Spons/sLogo.png'   },     
            
    ];  const infiniteScroll = () => {
        const lastLogo = SponsLogo[SponsLogo.length - 1];
        const firstLogo = SponsLogo[0];
    
        SponsLogo.push(lastLogo);
        SponsLogo.unshift(firstLogo); 
        if (SponsLogo.length > 8) {
          SponsLogo.pop();
          SponsLogo.shift();
        }
      };
    
      return (
        
        <div className="sponsors_out">
          <div className='sponsors'>{SponsLogo.map((logo, index) => (
            <img 
              key={index}
              src={logo.image}
              alt="Sponsor Logo"
              style={{ width: "100%" ,marginLeft: "63px" }}
            />
          ))} </div>

            <div className='sponsors' >{SponsLogo.map((logo, index) => (
            <img 
              key={index}
              src={logo.image}
              alt="Sponsor Logo"
              style={{ width: "100%", marginLeft: "63px", gap: "133.57px"}}
            />
          ))} </div>

            <div className='sponsors'>{SponsLogo.map((logo, index) => (
            <img 
              key={index}
              src={logo.image}
              alt="Sponsor Logo"
              style={{ width: "100%",marginLeft: "63px" }}
            />
          ))} </div>
        </div>
      );
    };
    
    export default Spons;