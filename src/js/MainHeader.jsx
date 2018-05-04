import React from "react";
import Navigation from './Navigation.jsx';

class MainHeader extends React.Component {
    render() {
        const {size} = this.props;
        const headerStyle = {
            background: '#fff',
            color: 'rgb(237, 237, 237)',
            width: size[0],
            height: size[1],
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid #103D5D',
        };

        return <div id='MainHeader' style={headerStyle}>
            <div style={{marginLeft: '10px', display:'flex', flexDirection:'row', alignItems:'flex-end'}}>
                <h1 style={{margin:0, fontSize:'30px', color:'rgba(16, 61, 93, 1)'}}>bloom.</h1>
                <h2 style={{margin: 0, fontSize:'16px', color:'rgba(16, 61, 93, 0.7)', marginBottom:'3px'}}>see your tree</h2>
            </div>
            <Navigation authUser={this.props.authUser}/>
        </div>
    }
}

export default MainHeader;