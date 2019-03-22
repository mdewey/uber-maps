import React, { Component } from "react"

import ReactMapGL from "react-map-gl"
import "./App.css"

const TOKEN =
	"pk.eyJ1IjoiZGV3c2VwaCIsImEiOiJjanRrNzQwYTYwMHdjM3lwNnh2am05ejc0In0._LCOTuYCw-eRKDvUut2TxQ"

class App extends Component {
	state = {
		viewport: {
			latitude: 37.7577,
			longitude: -122.4376,
			zoom: 8
		}
	}

	render() {
		return (
			<>
				<ReactMapGL
					{...this.state.viewport}
					mapboxApiAccessToken={TOKEN}
					className="map"
					width="100%"
					height="100%"
					onViewportChange={viewport => this.setState({ viewport })}
				/>
			</>
		)
	}
}

export default App
