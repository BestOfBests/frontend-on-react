import './Planet.css';
function Planet(props) {
    
    return (
      <div className="planet" style={{
        marginLeft: props.planet_x - props.starship_x + 535,
        marginTop: props.planet_y - props.starship_y - 525
    }}>
      {/* {props.planet_name} */}
      {/* <p>{ props.planet_x} - { props.planet_y}</p> */}
      <img src={`http://192.168.29.106:2023/api/StaticData/${props.planet_img}`} style={{
        width: props.planet_radius/50,
        height: props.planet_radius/50
      }}/>
    </div>
    );
  }
export default Planet;