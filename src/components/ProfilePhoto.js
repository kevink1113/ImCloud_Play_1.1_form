import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const sizes = ['small', 'medium', 'large'];

export const profileProps = {
	src: PropTypes.string.isRequired,
	link: PropTypes.string,
	size: PropTypes.oneOf(sizes),
	no_sns: PropTypes.string,
	influencer_id: PropTypes.string,
};

const Profile = styled.a`
	outline: none;
	cursor: pointer;
	border: none;
	display: inline-block;
`;

const ProfileImg = styled.img`
	object-fit: cover;
	&.small {
		width: 20rem;
		height: 20rem;
		max-width: 17vw;
		max-height: 17vw;
	}
	&.medium {
		width: 25rem;
		height: 25rem;
	}
	&.large {
		width: 35rem;
		height: 35rem;
		max-width: 35vw;
		max-height: 35vw;
		min-height: 27rem;
	}
`;

const ProfilePhoto = ({ src, size, influencer_id }) => {
	const url = 'https://www.instagram.com/';
	return (
		<Profile href={url + influencer_id} target="blank" className={size}>
			<ProfileImg className={size} src={src} />
		</Profile>
	);
};

export default ProfilePhoto;

ProfilePhoto.propTypes = profileProps;
