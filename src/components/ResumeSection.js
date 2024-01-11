import React from 'react';
import documentPreviewImage from '../../src/img/ResumeDownloadImage.png'; // Import the image
import documentTextTopImage from '../../src/img/ResumeSecTopText.png'; // Import the image
import documentTextBotImage from '../../src/img/ResumeSecBotText.png'; // Import the image

const ResumeSection = () => {
  return (
    <div className="resume-section">
      <div className="top-section">
        <div className="left-block">
          <div className="image-container">
            <a href="path-to-your-document.docx" download>
              <img src={documentPreviewImage} className='centered-image-doc' alt="Document Preview" />
            </a>
          </div> 
        </div>
        <div className="right-block">
          <img src={documentTextTopImage}  className='centered-image-text-left' alt="Document Preview" />
        </div>
      </div>
      <div className="bottom-section">
        <div className="left-block">
         <img src={documentTextBotImage} className='centered-image-text-right' alt="Document Preview" />
        </div>
        <div className="right-block">
          <div className="image-container">
            <a href="path-to-your-document.docx" download>
              <img src={documentPreviewImage} className='centered-image-doc' alt="Document Preview" />
            </a>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default ResumeSection;
