import React from 'react';
import styled from 'styled-components';
import { MdFileUpload } from 'react-icons/md';

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

const StyledIcon = styled(MdFileUpload)`
	position: absolute;
`;

const ShowImage = styled.img`
	position: absolute;
	float: left;
	object-fit: cover;
	width: 100%;
	height: 100%;
`;

class Influencer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			image1: null,
			image2: null,
			image3: null,
			image4: null,
		};
	}

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

	render() {
		return (
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
								name=""
								title="사진을 올리세요"
								onChange={(e) => this.onImageChange(e, 4)}
								className="input"
							/>
						</Image>
					</InfluencerContainer>
				</ListContainer>
			</StyledInfluencer>
		);
	}
}

export default Influencer;
