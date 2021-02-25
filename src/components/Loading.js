import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Container = styled.span`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin-bottom: 13%;
`;

const LoadingTitle = styled.h3`
	font: normal normal medium 20px/29px Noto Sans CJK KR;
	letter-spacing: 0px;
	color: #00000099;

	z-index: 1;
	opacity: 1;
	margin-top: 0px;
	margin-bottom: 95px;
`;

const LoadingIcon = styled.div`
	width: 135px;
	height: 135px;
	//padding-bottom: 30%;
	//padding-top: 10%;
	z-index: 0;
	margin: 0px 200px;

	text {
		letter-spacing: 4px;
	}
`;

const Percent = styled.span`
	position: absolute;
	margin-left: 100px;
	margin-top: 58px;

	z-index: 1;
	color: #ff4500;
`;

export const loadingProps = {
	percentage: PropTypes.number.isRequired,
};

class Loading extends Component {
	constructor(props) {
		super(props);
		this.state = {
			percentage: 0,
		};
	}

	render() {
		return (
			<Container>
				<LoadingTitle>스타일 분석 중</LoadingTitle>
				<LoadingIcon>
					<Percent>%</Percent>

					<CircularProgressbar
						value={this.props.percentage}
						text={this.props.percentage}
						strokeWidth={3.5}
						styles={buildStyles({
							// Rotation of path and trail, in number of turns (0-1)
							rotation: 0.25,
							// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
							strokeLinecap: 'butt',

							// Text size
							textSize: '1.5rem',

							// How long animation takes to go from one percentage to another, in seconds
							pathTransitionDuration: 0.5,

							// Can specify path transition in more detail, or remove it entirely
							// pathTransition: 'none',

							// Colors
							pathColor: `#FF4500`,
							textColor: '#FF4500',
							trailColor: '#F0F8FF',
							backgroundColor: '#FFFFFF',
						})}
					></CircularProgressbar>
				</LoadingIcon>
			</Container>
		);
	}
}

Loading.propTypes = loadingProps;

export default Loading;
