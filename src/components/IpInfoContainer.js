function IpInfoContainer(props){

    return(
        <div className='info-container'>
            <div className="box a">
                <p>IP ADDRESS</p>
                <p>{props.ipAddress}</p>
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
                <p>Language</p>
                <p>{props.language}</p>
            </div>
            
            

        </div>
    )
}

export default IpInfoContainer;