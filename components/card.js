export default function Card({ type, title, action, cta }) { 
  return (
    <div>
    <section>
        <div className={type}>
          <div className="cardname">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 8.25V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 13C16.5 13.2761 16.2761 13.5 16 13.5C15.7239 13.5 15.5 13.2761 15.5 13C15.5 12.7239 15.7239 12.5 16 12.5C16.2761 12.5 16.5 12.7239 16.5 13Z"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 8.25H6.5C5.5335 8.25 4.75 7.4665 4.75 6.5C4.75 5.5335 5.5335 4.75 6.5 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V8.25ZM17.25 8.25H19.25"/>
</svg>

            {title}
          </div>
          <a href="#">
            {action}
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.75 6.75L19.25 12L13.75 17.25"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H4.75"/>
</svg>
          </a>
        </div>
        <div className={"body-" + type}>
          <h1>You are pre-approved for all of the awesome cards</h1>
          <p>This is the description of the offer that we just talked about above</p>
        </div>
        <a href="#" className="footer">{cta}</a>
    </section>

      <style jsx>{`       
        section {
          background: white;
          width: 80vw;
          max-width: 500px;
          
          display: flex;
          flex-direction: column;

          font-family: inter;
          font-size: 0.9em;
          
          box-shadow: 0px 0px 1px rgba(0,0,0,0.1),
                      0px 2px 2px rgba(0,0,0,0.01),
                      0px 3px 5px rgba(0,0,0,0.01);
          border-radius: 12px;
          overflow: hidden;

          background: rgb(250,250,250);
          background: linear-gradient(0deg, rgba(250,250,250,1) 0%, rgba(255,255,255,1) 100%);

          pointer-events: none;
          user-select: none;
        }

        a:hover {
            cursor:default;
        }
        
        .feature {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          border-bottom: 1px solid #f4f4f4;
          background: rgb(255,255,255);
          background: linear-gradient(-170deg, rgba(100,100,250,0.15) 0%, rgba(255,255,255,0) 50%),
                      linear-gradient(-15deg, rgba(255,100,250,0.15) 0%, rgba(255,255,255,0) 50%);
        }
        
        .cardname {
          display:flex;
          align-items: center;
          gap: 6px;
          color: #333;
        }
        
        .feature a {
          display: flex;
          gap: 4px;
          justify-content: center;
          align-items: center;
          font-size:0.9em;
          text-decoration: none;
          padding: 4px 6px 4px 8px;
          background-color: rgba(255,255,255,0.5);
          box-shadow: 0 0 1px rgba(100,100,255,0.5);
          border-radius: 6px;
          color: #6060ff;
          transition: background 0.1s ease-in-out, color 0.1s ease-in-out;
          pointer-events: all;
        }
        
        .feature a:hover {
          background: #6060ff;
          color: white;
        }
        
        .offer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background: #f9f9f9;
          font-size: 0.75em;
          color: #555;
        }            
        
        .offer svg {
          display: none;
        }    
        
        .offer a {
          color: #888;
          transition: color 0.1s ease-in-out;
          pointer-events: all;
        }
        
        .offer a:hover {
          color: #6060ff;
        }
        
        .offer a img {
          display: none;
        }
        
        .body-offer {
          padding: 16px 160px 64px 16px;
          background-image: url(creditcards.png);
          background-size: 60%;
          background-repeat: no-repeat;
          background-position: 140% 10%;
        }
        
        .body-offer h1 {
          font-size: 1.5em;
          font-family: inter-bold;
          line-height: 1.25em;
          margin: 0 0 0.4em 0;
          color: #333;
        }
        
        .body-offer p {
          font-family: inter-light;
          line-height: 1.25em;
          color: #555;
          margin: 0;
        }
        
        .footer {
          padding: 16px;
          border-top: 1px solid #f4f4f4;
          color: #6060ff;
          text-decoration: none;
          transition: background 0.1s ease-in-out, color 0.1s ease-in-out, border 0.1s ease-in-out;
          pointer-events: all;
        }
        
        .footer:hover {
          background: #6060ff;
          color: white;
          border-top: 1px solid #6060ff;
        }
      `}</style>
    </div>
  )
}
