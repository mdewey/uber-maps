import React, { Component } from "react";
import CityPin from "./Pin";
import ReactMapGL, {
	Marker,
	Popup,
	NavigationControl,
	FullscreenControl
} from "react-map-gl";
import "./App.css";

const TOKEN =
	"pk.eyJ1IjoiZGV3c2VwaCIsImEiOiJjanRrNzQwYTYwMHdjM3lwNnh2am05ejc0In0._LCOTuYCw-eRKDvUut2TxQ";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			viewport: {
				latitude: 27.950575,
				longitude: -82.457176,
				zoom: 2
			},
			pins: [this.getRandomLocation()]
		};
	}

	getRandomLocation = () => {
		const lat = 27.950575 + Math.random() - Math.random() * 10; //getRandomLatInFlorida()
		const lng = -82.457176 - Math.random() + Math.random() * 10;

		return {
			lat,
			lng
		};
	};

	addPins = num => {
		console.log("adding" + num + " pins");
		const newPins = [...Array(num).keys()].map(this.getRandomLocation);
		console.log(newPins);
		this.setState(
			{
				pins: this.state.pins.concat(newPins)
			},
			() => {
				console.log(this.state.pins.length);
			}
		);
	};

	renderPin = (pin, index) => {
		return (
			<Marker key={`marker-${index}`} longitude={pin.lng} latitude={pin.lat}>
				<CityPin size={20} />
			</Marker>
		);
	};

	render() {
		return (
			<>
				<div className="header">
					<button onClick={() => this.addPins(1)}>add pin</button>
					<button onClick={() => this.addPins(100)}>add 100 pin</button>
					<button onClick={() => this.addPins(1000)}>add 1000 pin</button>
					<button onClick={() => this.addPins(10000)}>add 10000 pin</button>
				</div>
				<ReactMapGL
					{...this.state.viewport}
					mapboxApiAccessToken={TOKEN}
					className="map"
					width="100%"
					height="100%"
					onViewportChange={viewport => this.setState({ viewport })}
				>
					{this.state.pins.map(this.renderPin)}
					{/*  */}
				</ReactMapGL>
			</>
		);
	}
}

export default App;
