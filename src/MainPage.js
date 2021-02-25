import React, { Component } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import Loading from './components/Loading';
import { Redirect } from 'react-router-dom';

const StartPage = styled.div`
	margin: 0;
	padding: 0;

	width: 100%;
	min-width: 10rem;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	background-image: url('title_background.png');
	background-repeat: no-repeat;
	background-size: cover;
`;

const WhiteBlur = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: white;
	opacity: 0.7;
`;

const Title1 = styled.h3`
	margin: 0;

	top: 362px;
	left: 640px;
	width: 640px;
	height: 45px;

	font-size: 30px;
	font-weight: 300;
	letter-spacing: 0px;
	color: #000000;
	opacity: 1;
	z-index: 1;
`;

const Title2 = styled.h2`
	padding-top: 10px;
	margin: 0;

	top: 417px;
	left: 640px;
	width: 640px;
	height: 59px;

	font-weight: bold;
	font-size: 40px;

	letter-spacing: 0px;
	color: #000000;
	opacity: 1;
	z-index: 1;
`;

const Desc = styled.div`
	margin: 0;
	padding-top: 50px;
	padding-bottom: 50px;

	top: 526px;
	left: 640px;
	width: 640px;
	height: 114px;

	font-size: 1rem;
	font-weight: normal;

	letter-spacing: 0px;
	color: #00000080;
	opacity: 1;
	z-index: 1;

	p {
		margin: 0;
	}
`;

const NextButton = styled.button`
	width: 140px;
	height: 44px;
	background: var(--unnamed-color-ff4500) 0% 0% no-repeat padding-box;
	background: #ff4500 0% 0% no-repeat padding-box;
	opacity: 1;
	z-index: 1;
	border: none;
	outline: 0;

	div {
		color: white;
		font-weight: bold;

		text-align: center;
	}

	transition: 0.01s all;

	:hover {
		cursor: pointer;
		background-color: ${darken(0.1, '#FF4500')};
	}
`;

const FadeOut = styled.span`
	transition: all 0.6s;
`;

const StyledLoading = styled.div`
	transition: all 1s;
`;

class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			loadFinish: false,
			percentage: 1,
			opacity2: 0,
			visibility2: 'hidden',
		};
		this.nowLoading = this.nowLoading.bind(this);
		this.showLoading = this.showLoading.bind(this);
	}

	nowLoading() {
		if (this.state.loading === false) {
			this.setState({
				loading: true,
				opacity: 0,
				visibility: 'hidden',
			});

			console.log(this.state.percentage);
			setInterval(
				function () {
					if (this.state.percentage > 99) {
						setTimeout(
							function () {
								this.setState({
									loadFinish: true,
								});
							}.bind(this),
							500,
						);
					} else {
						if (this.state.percentage > 99) {
							this.setState({
								percentage: 100,
							});
						} else {
							this.setState({
								percentage: this.state.percentage + 1,
							});
						}
					}
				}.bind(this),
				22,
			);
		}
	}

	showLoading() {
		console.log('사라져랏!!!');
		this.setState({
			opacity: 0,
			visibility: 'hidden',

			opacity2: 1,
			visibility2: 'visible',
		});
		console.log(this.state.visibility);
		this.nowLoading();
	}

	render() {
		if (this.state.loadFinish === true) {
			return <Redirect to="/result" />;
		} else {
			return (
				<StartPage>
					<WhiteBlur />

					<FadeOut
						style={{
							opacity: this.state.opacity,
							visibility: this.state.visibility,
							position: 'absolute',
						}}
					>
						<Title1>내 패션과 비슷한</Title1>
						<Title2>인플루언서는 누구일까? </Title2>
						<Desc>
							<p>Influencer를 통해 내 패션 유형을 알아보자</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<p>Pellentesque nec leo neque. Pellentesque sed est mattis,</p>
							<p> rhoncus elit eu, </p>
						</Desc>
						<NextButton onClick={this.showLoading}>
							<div> 시작 </div>
						</NextButton>
					</FadeOut>
					<StyledLoading
						style={{
							opacity: this.state.opacity2,
							visibility: this.state.visibility2,
						}}
					>
						<Loading percentage={this.state.percentage} />
					</StyledLoading>
				</StartPage>
			);
		}
	}
}

export default MainPage;
