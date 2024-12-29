import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './Screenshot.css';

function Screenshot({targetRef}) {
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const cropperRef = useRef(null);

  const takeScreenshot = () => {
    if (targetRef.current) {
      html2canvas(targetRef.current).then(canvas => {
        setImage(canvas.toDataURL('image/png'));
      });
    }
  };

  const cropImage = () => {
    const cropper = cropperRef.current.cropper;
    const croppedCanvas = cropper.getCroppedCanvas();
    const context = croppedCanvas.getContext('2d');
    const currentDate = new Date().toLocaleString();
    context.font = '20px Arial';
    context.fillStyle = 'white';
    const textPadding = 10;
    const companyName = 'Kandanaole Times';
    const textWidthCompany = context.measureText(companyName).width;
    const textWidthDate = context.measureText(currentDate).width;
    const textHeight = 20; // Approximate height of the text
    context.fillText(companyName, croppedCanvas.width - textWidthCompany - textPadding, croppedCanvas.height - textPadding - textHeight - 10);
    context.fillText(currentDate, croppedCanvas.width - textWidthDate - textPadding, croppedCanvas.height - textPadding);
    const croppedDataUrl = croppedCanvas.toDataURL('image/png');
    setCroppedImage(croppedDataUrl);

    // Create a download link and trigger a click event
    const link = document.createElement('a');
    link.href = croppedDataUrl;
    link.download = 'cropped-image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="screenshot-container">
      <button className="screenshot-button" onClick={takeScreenshot}>
        &#9986; Take Screenshot
      </button>
      {image && (
        <div className="cropper-container">
          <Cropper
            src={image}
            style={{ height: 400, width: '100%' }}
            initialAspectRatio={16 / 9}
            guides={false}
            ref={cropperRef}
          />
          <button className="crop-button" onClick={cropImage}>
            Crop Image
          </button>
        </div>
      )}
      {croppedImage && (
        <div className="cropped-image-container">
            Cropped Image
          <img src={croppedImage} alt="Cropped" />
        </div>
      )}
    </div>
  );
}

export default Screenshot;