function IpInfoContainer(props){

    return(
        <div className='info-container'>
            <div className="box a">
                <p>IP ADRESS</p>
                <p>{props.ipAdress}</p>
            </div>
            <div className="box b">
                <p>LOCATION</p>
                <p>{props.location}</p>
            </div>
            <div className="box c">
                <p>TIMEZONE</p>
                <p>{props.timezone}</p>
            </div>
            <div className="box d">
                <p>ISP</p>
                <p>{props.isp}</p>
            </div>
            
            

        </div>
    )
}

export default IpInfoContainer;