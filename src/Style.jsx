import styled, { keyframes } from 'styled-components';

// Function to generate a random gradient background based on movie title
const generateRandomBackground = (movieTitle) => {
    const hue = Math.floor(Math.random() * 360);
    return `linear-gradient(${hue}deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2)), ${movieTitle}`;
};


export const SearchInputContainer = styled.div`
  position: relative;
  width:100%;
`;

export const SearchIcon = styled.i`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #666;
`;

const pulsateAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;
export const SearchInput = styled.input`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  animation: ${pulsateAnimation} 1.5s infinite; /* Apply the pulsating animation */


  &:focus {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    border-color: #007bff;
  }
  &:focus {
    /* ... (other styles) */
    animation: none; /* Stop the pulsating animation when focused */
    /* ... (other styles) */
  }
`;

export const MovieContainer = styled.div`
  text-align: center;
  width: 100%;
  max-width: 800px;
  margin: 10px;
  padding: 20px;
  border: 2px solid #e34343;
  border-radius: 20px;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.15); /* Add a soft box shadow */

  /* Hover effect */
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
  z-index: 1;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Slightly stronger box shadow on hover */
  }

  /* Dynamic background based on movie title */
  background-image: ${({ title }) => title && generateRandomBackground(title)};
`;

export const MovieTitle = styled.h1`
  color: #fff;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const MoviePlot = styled.p`
  color: #ccc;
  font-size: 16px;
  line-height: 1.6;
`;

export const MovieImage = styled.img`
  max-width: 100%;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* Slightly lighter box shadow for the image */
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Slightly zoom-in the image on hover */
  }
`;

// New Container to display movies horizontally
export const MovieListContainer = styled.div`
  margin-top:50px;    
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Change the number of columns here */
  grid-gap: 20px;
  justify-items: center;
  grid-column-gap: 100px; /* Add space between columns */
`;
