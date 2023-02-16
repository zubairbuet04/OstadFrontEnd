const cardHead = "Assalamualaikum! Welcome";
const cardDesc = "Lorem ipsum";
const cardFoot = new Date().getDate() +"/" + new Date().getMonth() + "/" + new Date().getFullYear() ;
//const cardFoot = new Date().now() ;



function Card1(){
    return <div>
    
        <div className="Card">
            <h2 className="CardHeading">{cardHead}</h2>
            <p className="CardDesc">{cardDesc}</p>
            <p className="CardFooter">{cardFoot}</p>

        </div>
    </div>
}
export default Card1 ;