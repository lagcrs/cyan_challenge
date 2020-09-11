import React from 'react';
import Menu from '../../components/Menu';
import mapsImg from '../../assets/images/maps.jpg';

import './styles.css';

function Maps(props) {
    const code = props.location.data[1];
    const coor = props.location.data[0][0];
    return (
        <>
            <Menu to="/" text="Home" />
            <header className="header-maps">
                <div id="content-filter-maps">
                    <h2>Código Talhão: {code}</h2> <br/>
                    <h3>Coordenadas</h3>  <i>{coor}</i> <br/>
                    <img src={mapsImg} alt="Maps" className="header-image"/>
                </div>
            </header>
        </>
    );
}

export default Maps;