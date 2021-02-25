import React, { Component } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { MdFileUpload } from 'react-icons/md';
import { AiOutlineInstagram } from 'react-icons/ai';

class StyleView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image: null,
			image1: null,
			image2: null,
			image3: null,
			image4: null,

			influencer_id: null,
			influencer_name: null,
			style_name: null,
			quote: null,
			description: null,
		};
	}

	onBigImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			this.setState({
				image: URL.createObjectURL(img),
				selectedFile: event.target.files[0],
			});
		}
	};

	onTextChange = (e, idx) => {
		console.log(idx, e.target.value);
		switch (idx) {
			case 1:
				this.setState({ influencer_name: e.target.value });
				break;
			case 2:
				this.setState({ style_name: e.target.value });
				break;
			case 3:
				this.setState({ quote: e.target.value });
				break;
			case 4:
				this.setState({ description: e.target.value });
				break;
			case 5:
				this.setState({ influencer_id: e.target.value });
				break;
			default:
				console.log('Wrong function input!');
				break;
		}
		this.setState({
			Title: e.target.value,
		});
	};

	onImageChange = (event, idx) => {
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			//console.log(img);
			//console.log(URL.createObjectURL(img));
			switch (idx) {
				case 1:
					this.setState({ image1: URL.createObjectURL(img) });
					break;
				case 2:
					this.setState({ image2: URL.createObjectURL(img) });
					break;
				case 3:
					this.setState({ image3: URL.createObjectURL(img) });
					break;
				case 4:
					this.setState({ image4: URL.createObjectURL(img) });
					break;
				default:
					console.log('Wrong function input');
					break;
			}
			//console.log(this.state.image);
			//
		}
	};

	validCheck() {
		if (
			this.state.image === null ||
			this.state.image1 == null ||
			this.state.image2 === null ||
			this.state.image3 === null ||
			this.state.image4 === null ||
			this.state.influencer_id === null ||
			this.state.influencer_name === null ||
			this.state.style_name === null ||
			this.state.quote === null ||
			this.state.description === null ||
			this.state.influencer_id === '' ||
			this.state.influencer_name === '' ||
			this.state.style_name === '' ||
			this.state.quote === '' ||
			this.state.description === ''
		)
			alert('입력을 확인해 주세요!');
		else {
			alert('제출 완료!');
			// this.nowLoading();
		}
	}
	validCheck = this.validCheck.bind(this);

	render() {
		return (
			<>
				<StyledView>
					<StyleBackground />

					<ViewContainer>
						<StyledPhoto>
							<MainImage>
								{this.state.image === null ? (
									<div>
										<StyledIcon1 size={90} />
									</div>
								) : (
									<ShowMainImage src={this.state.image} />
								)}
								<MainInput
									type="file"
									accept="image/*"
									name=""
									title="사진을 올리세요"
									onChange={(e) => this.onBigImageChange(e)}
								/>
							</MainImage>
						</StyledPhoto>
						<ViewText>
							<Title>당신의 패션 스타일 유형은?</Title>
							<p className="name">
								<input
									placeholder="이름"
									maxLength="10"
									onChange={(e) => this.onTextChange(e, 1)}
									// value={this.state.Title}
									name="text"
								></input>
							</p>
							<p className="style">
								<input
									placeholder="스타일명 (최대 20자)"
									maxLength="20"
									onChange={(e) => this.onTextChange(e, 2)}
									name="text"
								></input>
							</p>
							<Description>
								<p>
									<textarea
										placeholder="하고 싶은 말(최대 50자)"
										maxLength="50"
										onChange={(e) => this.onTextChange(e, 3)}
										name="text"
										cols="3"
										className="quote"
									></textarea>
								</p>
								<p>
									<textarea
										placeholder="본인에 대한 소개(최대 50자)"
										maxLength="50"
										onChange={(e) => this.onTextChange(e, 4)}
										name="text"
										cols="3"
									></textarea>
								</p>
							</Description>
							<Follow>
								<Insta />
								<span className="id">
									Follow{' '}
									<input
										placeholder="인스타 아이디"
										onChange={(e) => this.onTextChange(e, 5)}
										name="text"
									></input>
								</span>
							</Follow>
						</ViewText>
					</ViewContainer>
				</StyledView>
				<StyledInfluencer>
					<UpArrow align="center" />
					{/* 선택했을 때 나오는 불투명 배경 & 내용 */}
					{/* 여기서부터 본 화면 */}
					<h1>인플루언서님의 스타일</h1>
					<ListContainer>
						<InfluencerContainer>
							<Image>
								{this.state.image1 === null ? (
									<StyledIcon size={90} />
								) : (
									<ShowImage src={this.state.image1} />
								)}
								<PhotoInput
									type="file"
									accept="image/*"
									name=""
									title="사진을 올리세요"
									onChange={(e) => this.onImageChange(e, 1)}
									className="input"
								/>
							</Image>
						</InfluencerContainer>
						<InfluencerContainer>
							<Image>
								{this.state.image2 === null ? (
									<StyledIcon size={90} />
								) : (
									<ShowImage src={this.state.image2} />
								)}
								<PhotoInput
									type="file"
									accept="image/*"
									name=""
									title="사진을 올리세요"
									onChange={(e) => this.onImageChange(e, 2)}
									className="input"
								/>
							</Image>
						</InfluencerContainer>
						<InfluencerContainer>
							<Image>
								{this.state.image3 === null ? (
									<StyledIcon size={90} />
								) : (
									<ShowImage src={this.state.image3} />
								)}
								<PhotoInput
									type="file"
									accept="image/*"
									name=""
									title="사진을 올리세요"
									onChange={(e) => this.onImageChange(e, 3)}
									className="input"
								/>
							</Image>
						</InfluencerContainer>
						<InfluencerContainer>
							<Image>
								{this.state.image4 === null ? (
									<StyledIcon size={90} />
								) : (
									<ShowImage src={this.state.image4} />
								)}
								<PhotoInput
									type="file"
									accept="image/*"
									name=""
									title="사진을 올리세요"
									onChange={(e) => this.onImageChange(e, 4)}
									className="input"
								/>
							</Image>
						</InfluencerContainer>
					</ListContainer>
					{/*
					<Button
						link="https://www.instagram.com/dlwlrma/?hl=ko"
						label="제출하기"
						size="large"
						orange="orange"
					/> 
					*/}
					<NextButton onClick={this.validCheck}>제출하기</NextButton>
				</StyledInfluencer>
			</>
		);
	}
}

export default StyleView;

const StyledView = styled.div`
	input,
	textarea {
		border-color: lightgray;
		border-width: 0.5px;
		text-decoration: none;
	}
	input:focus,
	textarea:focus {
		border-color: #ff4500;
		outline: none;
	}

	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
`;

const StyleBackground = styled.div`
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: -1;
	background-image: linear-gradient(to top, white, rgba(255, 255, 255, 0)),
		url('./title_background.png');
	width: 100vw;
	height: 100vh;

	-webkit-filter: blur(3px);
	-moz-filter: blur(3px);
	-o-filter: blur(3px);
	-ms-filter: blur(3px);
	filter: blur(3px);
	height: 100%;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const Description = styled.div`
	font-weight: 400;
	color: #00000080;
	max-width: 32rem;
	font-weight: 300;
	margin-bottom: 2.5rem;

	textarea {
		font-weight: 400;
		color: #00000080;
		font-weight: 300;
		font-size: 1rem;
		width: 100%;
		max-width: 24rem;
		// height: 2rem;
		resize: none;
		font: inherit;
	}
`;

const ViewContainer = styled.div`
	width: 85%;
	height: 20%;
	height: 35rem;
	max-height: 35vw;
	min-height: 27rem;

	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	align-items: stretch;
`;

const ViewText = styled.div`
	padding-right: 1rem;
	min-width: 29rem;
	background: white;
	padding-left: 6rem;
	padding-left: 3vw;
	padding-top: 2.5vw;
	width: 100%;
	.name {
		font-size: 1.6rem;
		font-weight: 400;
		margin-top: 1vw;
		margin-bottom: 1vw;
		input {
			font-size: 1.6rem;
			font-weight: 400;
			margin-top: 1vw;
			margin-bottom: 1vw;
			width: 8rem;
			font: inherit;
		}
	}
	.style {
		color: #ff4500;
		font-weight: 300;
		input {
			color: #ff4500;
			font-weight: 300;
			font-size: 1rem;
			width: 12rem;
			font: inherit;
		}
	}

	animation: filling 1s ease-out forwards;
	@keyframes filling {
		from {
			fill: black;
			opacity: 0;
			transform: scale(0.5);
		}
		to {
			fill: black;
			opacity: 1;
			transform: scale(1);
		}
	}
`;

const Title = styled.p`
	font-size: 2rem;
	font-weight: 900;
	margin: 0;
	margin-bottom: 3rem;
	margin-bottom: 2.5vw;
`;

const Follow = styled.div`
	display: flex;
	align-items: center;
	span {
		padding-left: 1rem;
		color: #00000080;
		font-weight: 300;
	}
	input {
		color: #00000080;
		font-weight: 300;
		font-size: 1rem;
		width: 8rem;
		font: inherit;
	}
`;
const Insta = styled(AiOutlineInstagram)`
	color: white;
	padding: 0.22rem;
	background: #00000099;
	border-radius: 100%;
`;

const StyledPhoto = styled.div`
	position: relative;
	z-index: 100;
	animation: moving 1s ease-out forwards;
	@keyframes moving {
		from {
			left: 320px;
			top: 100px;
			fill: black;
			opacity: 0;
		}
		to {
			left: 0px;
			top: 0px;
			fill: black;
			opacity: 1;
		}
	}
`;

const MainImage = styled.div`
	outline: none;
	// cursor: pointer;
	border: none;
	display: inline-block;
	display: flex;
	justify-content: center;
	align-items: center;

	width: 35rem;
	height: 35rem;
	max-width: 35vw;
	max-height: 35vw;
	min-height: 27rem;
	background: rgb(190, 190, 190);
`;

const MainInput = styled.input`
	cursor: pointer;
	position: absolute;
	positon: relative;
	top: -0.5rem;
	left: -0.5rem;
	height: 100%;
	width: 100%;
	background: transparent;
	// border: 10px solid red;
	opacity: 0;
`;

const StyledIcon1 = styled(MdFileUpload)`
	position: relative;
`;
const StyledIcon = styled(MdFileUpload)`
	position: absolute;
`;

const ShowMainImage = styled.img`
	position: absolute;
	float: left;
	object-fit: cover;
	width: 100%;
	height: 100%;
`;

//

const StyledInfluencer = styled.div`
	// min-height: 100vh;
	vertical-align: middle;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #1e1e1e;
	h1 {
		text-align: center;
		color: white;
		font-weight: normal;
		margin: 6rem 0 3rem 0;
	}
	text-align: center;
`;

const InfluencerContainer = styled.div`
	max-width: 400px;
	margin: 0.625rem;
	.input {
		width: 400px;
		max-width: 21vw;
		max-height: 21vw;
		height: 400px;
		object-fit: cover;
	}
	img {
		width: 400px;
		max-width: 21vw;
		max-height: 21vw;
		height: 400px;
		object-fit: cover;
	}
`;
const ListContainer = styled.div`
	display: flex;
	flex-direction: row;
	// justify-content: space-evenly;
	justify-content: center;
	flex-wrap: wrap;
	margin-bottom: 6rem;
`;

const UpArrow = styled.div`
	// background: #1e1e1e;
	// background: red;
	// width: 2.5rem;
	// height: 1.6rem;
	width: 0;
	height: 0;
	border-left: 1.25rem solid transparent;
	border-right: 1.25rem solid transparent;
	border-bottom: 1.6rem solid #1e1e1e;

	display: inline-block;
	margin: 0 auto;
	margin-top: -1.5rem;
`;
const Image = styled.div`
	background: rgb(190, 190, 190);
	// background: transparent;
	cursor: pointer;

	display: flex;
	justify-content: center;
	align-items: center;
`;
const PhotoInput = styled.input`
	opacity: 0;
	cursor: pointer;
`;

const ShowImage = styled.img`
	position: absolute;
	float: left;
	object-fit: cover;
	width: 100%;
	height: 100%;
`;
//

const NextButton = styled.button`
	margin-left: auto;
	margin-right: auto;
	width: 12.5rem;
	height: 44px;
	background: var(--unnamed-color-ff4500) 0% 0% no-repeat padding-box;
	background: #ff4500 0% 0% no-repeat padding-box;
	opacity: 1;
	z-index: 1;
	border: none;
	outline: 0;

	color: white;
	font-weight: bold;

	text-align: center;
	font-size: 1.2rem;
	font-weight: 400;
	transition: color 0.2s, background-color 0.2s;
	margin-bottom: 3rem;
	:hover {
		cursor: pointer;
		background-color: ${darken(0.1, '#FF4500')};
	}
`;
