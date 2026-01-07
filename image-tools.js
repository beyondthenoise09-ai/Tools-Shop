// image-tools.js - Image Processing Tools using Canvas API

class ImageTools {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.currentImage = null;
    }

    // Convert JPG to PNG
    convertJpgToPng(imageData, quality = 0.9) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                this.canvas.width = img.width;
                this.canvas.height = img.height;
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.drawImage(img, 0, 0);
                
                // Convert to PNG (Canvas automatically creates PNG with transparency)
                const pngData = this.canvas.toDataURL('image/png');
                resolve(pngData);
            };
            img.src = imageData;
        });
    }

    // Convert PNG to JPG
    convertPngToJpg(imageData, quality = 0.9, backgroundColor = '#FFFFFF') {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                this.canvas.width = img.width;
                this.canvas.height = img.height;
                
                // Fill with background color first
                this.ctx.fillStyle = backgroundColor;
                this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                
                // Draw the image on top
                this.ctx.drawImage(img, 0, 0);
                
                // Convert to JPG
                const jpgData = this.canvas.toDataURL('image/jpeg', quality);
                resolve(jpgData);
            };
            img.src = imageData;
        });
    }

    // Resize image
    resizeImage(imageData, width, height, maintainAspectRatio = true) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                let newWidth = width;
                let newHeight = height;
                
                if (maintainAspectRatio) {
                    const ratio = Math.min(width / img.width, height / img.height);
                    newWidth = img.width * ratio;
                    newHeight = img.height * ratio;
                }
                
                this.canvas.width = newWidth;
                this.canvas.height = newHeight;
                
                // Use high-quality resizing
                this.ctx.imageSmoothingEnabled = true;
                this.ctx.imageSmoothingQuality = 'high';
                this.ctx.drawImage(img, 0, 0, newWidth, newHeight);
                
                const resizedData = this.canvas.toDataURL('image/jpeg', 0.9);
                resolve(resizedData);
            };
            img.src = imageData;
        });
    }

    // Crop image
    cropImage(imageData, x, y, width, height) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                this.canvas.width = width;
                this.canvas.height = height;
                this.ctx.drawImage(img, x, y, width, height, 0, 0, width, height);
                
                const croppedData = this.canvas.toDataURL('image/jpeg', 0.9);
                resolve(croppedData);
            };
            img.src = imageData;
        });
    }

    // Compress image
    compressImage(imageData, quality = 0.8) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                this.canvas.width = img.width;
                this.canvas.height = img.height;
                this.ctx.drawImage(img, 0, 0);
                
                // Convert with specified quality (lower quality = more compression)
                const compressedData = this.canvas.toDataURL('image/jpeg', quality);
                resolve(compressedData);
            };
            img.src = imageData;
        });
    }

    // Create passport photo
    createPassportPhoto(imageData, size = 'indian-passport', backgroundColor = '#FFFFFF') {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                // Set dimensions based on passport size
                let width, height;
                switch(size) {
                    case 'indian-passport':
                    case 'visa':
                        width = 600; // 2x2 inches at 300 DPI
                        height = 600;
                        break;
                    case 'aadhaar':
                        width = 413; // 3.5x4.5 cm at 300 DPI
                        height = 531;
                        break;
                    case 'pan':
                        width = 413; // 3.5x2.5 cm at 300 DPI
                        height = 295;
                        break;
                    default:
                        width = 600;
                        height = 600;
                }
                
                this.canvas.width = width;
                this.canvas.height = height;
                
                // Fill background
                this.ctx.fillStyle = backgroundColor;
                this.ctx.fillRect(0, 0, width, height);
                
                // Calculate dimensions to fit image while maintaining aspect ratio
                const scale = Math.min(width / img.width, height / img.height) * 0.8;
                const newWidth = img.width * scale;
                const newHeight = img.height * scale;
                const x = (width - newWidth) / 2;
                const y = (height - newHeight) / 2;
                
                // Draw image centered
                this.ctx.drawImage(img, x, y, newWidth, newHeight);
                
                // Add subtle border
                this.ctx.strokeStyle = '#e5e7eb';
                this.ctx.lineWidth = 2;
                this.ctx.strokeRect(2, 2, width - 4, height - 4);
                
                const passportData = this.canvas.toDataURL('image/jpeg', 0.95);
                resolve(passportData);
            };
            img.src = imageData;
        });
    }

    // Enhance image (basic adjustments)
    enhanceImage(imageData, options = {}) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                this.canvas.width = img.width;
                this.canvas.height = img.height;
                
                // Draw original image
                this.ctx.drawImage(img, 0, 0);
                
                // Get image data for pixel manipulation
                const imageDataObj = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
                const data = imageDataObj.data;
                
                // Simple enhancement: adjust contrast and brightness
                const contrast = options.contrast || 1.2;
                const brightness = options.brightness || 10;
                
                for (let i = 0; i < data.length; i += 4) {
                    // Apply brightness
                    data[i] = Math.min(255, data[i] + brightness);     // R
                    data[i + 1] = Math.min(255, data[i + 1] + brightness); // G
                    data[i + 2] = Math.min(255, data[i + 2] + brightness); // B
                    
                    // Apply contrast
                    data[i] = 128 + (data[i] - 128) * contrast;
                    data[i + 1] = 128 + (data[i + 1] - 128) * contrast;
                    data[i + 2] = 128 + (data[i + 2] - 128) * contrast;
                }
                
                // Put modified data back
                this.ctx.putImageData(imageDataObj, 0, 0);
                
                // Apply sharpen filter (convolution)
                if (options.sharpen) {
                    this.applySharpenFilter();
                }
                
                const enhancedData = this.canvas.toDataURL('image/jpeg', 0.9);
                resolve(enhancedData);
            };
            img.src = imageData;
        });
    }

    // Apply sharpen filter
    applySharpenFilter() {
        const weights = [0, -1, 0, -1, 5, -1, 0, -1, 0];
        const side = Math.round(Math.sqrt(weights.length));
        const halfSide = Math.floor(side / 2);
        
        const src = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        const srcData = src.data;
        const output = this.ctx.createImageData(this.canvas.width, this.canvas.height);
        const outputData = output.data;
        
        for (let y = 0; y < this.canvas.height; y++) {
            for (let x = 0; x < this.canvas.width; x++) {
                const dstOff = (y * this.canvas.width + x) * 4;
                let r = 0, g = 0, b = 0;
                
                for (let cy = 0; cy < side; cy++) {
                    for (let cx = 0; cx < side; cx++) {
                        const scy = y + cy - halfSide;
                        const scx = x + cx - halfSide;
                        
                        if (scy >= 0 && scy < this.canvas.height && scx >= 0 && scx < this.canvas.width) {
                            const srcOff = (scy * this.canvas.width + scx) * 4;
                            const wt = weights[cy * side + cx];
                            
                            r += srcData[srcOff] * wt;
                            g += srcData[srcOff + 1] * wt;
                            b += srcData[srcOff + 2] * wt;
                        }
                    }
                }
                
                outputData[dstOff] = Math.min(Math.max(r, 0), 255);
                outputData[dstOff + 1] = Math.min(Math.max(g, 0), 255);
                outputData[dstOff + 2] = Math.min(Math.max(b, 0), 255);
                outputData[dstOff + 3] = 255; // Alpha
            }
        }
        
        this.ctx.putImageData(output, 0, 0);
    }

    // Rotate image
    rotateImage(imageData, degrees) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                // Convert degrees to radians
                const radians = degrees * Math.PI / 180;
                
                // Calculate new canvas dimensions
                const sin = Math.abs(Math.sin(radians));
                const cos = Math.abs(Math.cos(radians));
                const newWidth = img.width * cos + img.height * sin;
                const newHeight = img.width * sin + img.height * cos;
                
                this.canvas.width = newWidth;
                this.canvas.height = newHeight;
                
                // Translate to center
                this.ctx.translate(newWidth / 2, newHeight / 2);
                this.ctx.rotate(radians);
                this.ctx.drawImage(img, -img.width / 2, -img.height / 2);
                
                // Reset transformation
                this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                
                const rotatedData = this.canvas.toDataURL('image/jpeg', 0.9);
                resolve(rotatedData);
            };
            img.src = imageData;
        });
    }

    // Flip image
    flipImage(imageData, direction = 'horizontal') {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                this.canvas.width = img.width;
                this.canvas.height = img.height;
                
                if (direction === 'horizontal') {
                    // Flip horizontally
                    this.ctx.translate(img.width, 0);
                    this.ctx.scale(-1, 1);
                } else {
                    // Flip vertically
                    this.ctx.translate(0, img.height);
                    this.ctx.scale(1, -1);
                }
                
                this.ctx.drawImage(img, 0, 0);
                
                // Reset transformation
                this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                
                const flippedData = this.canvas.toDataURL('image/jpeg', 0.9);
                resolve(flippedData);
            };
            img.src = imageData;
        });
    }

    // Convert multiple images to PDF (simulated)
    async imagesToPdf(imagesData) {
        // Note: Actual PDF generation requires a PDF library
        // This is a simulation that would create a PDF in a real implementation
        return new Promise((resolve) => {
            // Simulate PDF creation
            setTimeout(() => {
                const pdfData = 'data:application/pdf;base64,' + btoa('Simulated PDF content');
                resolve(pdfData);
            }, 1000);
        });
    }

    // Helper function to download processed image
    downloadImage(dataUrl, filename) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Helper function to get image dimensions
    getImageDimensions(imageData) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                resolve({ width: img.width, height: img.height });
            };
            img.src = imageData;
        });
    }

    // Helper function to validate image
    validateImage(file) {
        const maxSize = 10 * 1024 * 1024; // 10MB
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
        
        if (!allowedTypes.includes(file.type)) {
            throw new Error('Please upload a valid image file (JPG, PNG, WEBP, GIF)');
        }
        
        if (file.size > maxSize) {
            throw new Error('File size must be less than 10MB');
        }
        
        return true;
    }
}

// Initialize ImageTools globally
window.ImageTools = new ImageTools();

// Add event listeners for image processing
document.addEventListener('DOMContentLoaded', function() {
    // This will be integrated with the tool interfaces in main.js
    console.log('Image tools loaded and ready!');
});