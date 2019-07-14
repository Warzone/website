import React, { Component } from 'react';
import '../styles/pages/home.css';
import Jumbotron from '../components/Jumbotron';
import RecentGrid from '../components/recent/RecentGrid';
import FeatureGrid from '../components/FeatureGrid';

class Home extends Component {
	render() {
		return (
			<div className='home page'>
				<Jumbotron />
				<div className='container'>
					<RecentGrid style={{ marginBottom: '3%' }} />
					<FeatureGrid />
				</div>
			</div>
		);
	}
}

export default Home;
