import React, { useState } from 'react';
import axios from 'axios';
import copyImage from '../assets/copy.png';
import shareImage from '../assets/share.png';
import imgImage from '../assets/image.png';
import conImage from '../assets/content.png';
import refImage from '../assets/refresh.png';
import Loader from './loader';

function Content() {
  const [inputText, setInputText] = useState('');
  const [generatedResponse, setGeneratedResponse] = useState('');
  const [loading, setLoading] = useState(false);  // For showing loader
  const path = window.location.pathname.slice(1);  // Extract path from URL

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const HoverInfo = () => {
  const [hoveredInfo, setHoveredInfo] = useState('');

  const handleMouseEnter = (info) => {
    setHoveredInfo(info);
  };

  const handleMouseLeave = () => {
    setHoveredInfo('');
  };
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Show loader
    setGeneratedResponse('');  // Clear previous response

    if (!inputText.trim()) {
      alert("Please enter a prompt.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://crexo-backend.onrender.com/api/generate', {
        prompt: inputText.trim(),
        path: path,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setGeneratedResponse(response.data.generated || 'No response from the API');
    } catch (error) {
      console.error('Error generating content:', error);
      setGeneratedResponse('Error generating content');
    } finally {
      setLoading(false);  // Hide loader
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedResponse)
      .then(() => alert('Copied to clipboard'))
      .catch(err => console.error('Failed to copy:', err));
  };

  const handleShare = () => {
    navigator.share({
      title: 'Generated Content',
      text: generatedResponse,
    })
      .then(() => console.log('Shared successfully'))
      .catch(err => console.error('Failed to share:', err));
  };

  return (
    <div className="cont-main">
      <div className="cont-one">
        <input
          type="search"
          name="keywords"
          placeholder="e.g., king, queen, sad"
          value={inputText}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleSubmit}>Generate</button>
      </div>
      <div className="cont-two">
        {loading && <Loader />}
          {!generatedResponse && !loading &&
            <div className="cont-out-p-img">
              <img src={conImage} alt="Placeholder"/>
              <h2>Your content will be displayed here</h2>
            </div>
          }
          {generatedResponse && !loading &&
            <div className='cont-out-p'>
             <p>{generatedResponse}</p>
             </div>
          }
        {generatedResponse &&
          <div className='cont-out-b'>
            <div className="cont-out-b-inner">
              <img src={refImage} alt="Copy" onClick={handleSubmit} style={{ cursor: 'pointer' }} />
            </div>
            <div className="cont-out-b-inner">
              <img src={copyImage} alt="Copy" onClick={handleCopy} style={{ cursor: 'pointer' }} />
            </div>
            <div className="cont-out-b-inner">
              <img src={shareImage} alt="Share" onClick={handleShare} style={{ cursor: 'pointer' }} />
            </div>
            <div className="cont-out-b-inner">
              <img src={imgImage} alt="Image" onClick={handleShare} style={{ cursor: 'pointer' }} />
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Content;
