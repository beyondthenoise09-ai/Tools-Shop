// pdf-tools.js - PDF Tools UI and Placeholder Logic

class PDFTools {
    constructor() {
        this.pdfFiles = [];
        this.currentPDF = null;
    }

    // Initialize PDF tools
    init() {
        console.log('PDF Tools initialized');
        this.setupEventListeners();
    }

    // Setup event listeners for PDF tools
    setupEventListeners() {
        // File upload handlers
        document.addEventListener('change', (e) => {
            if (e.target.type === 'file' && e.target.accept.includes('.pdf')) {
                this.handlePDFUpload(e);
            }
        });

        // Process button handlers
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('process-pdf-btn')) {
                this.processPDF(e.target.dataset.action);
            }
        });
    }

    // Handle PDF file upload
    handlePDFUpload(event) {
        const file = event.target.files[0];
        if (!file || file.type !== 'application/pdf') {
            this.showError('Please upload a valid PDF file');
            return;
        }

        if (file.size > 50 * 1024 * 1024) { // 50MB limit
            this.showError('PDF file size must be less than 50MB');
            return;
        }

        // Read and process PDF
        const reader = new FileReader();
        reader.onload = (e) => {
            const pdfData = e.target.result;
            this.pdfFiles.push({
                name: file.name,
                size: file.size,
                data: pdfData
            });

            this.updateFileList();
            this.showSuccess(`"${file.name}" uploaded successfully`);
        };

        reader.readAsDataURL(file);
    }

    // Update file list display
    updateFileList() {
        const fileList = document.getElementById('pdfFileList');
        if (!fileList) return;

        fileList.innerHTML = this.pdfFiles.map((file, index) => `
            <div class="pdf-file-item">
                <i class="fas fa-file-pdf"></i>
                <span>${file.name} (${this.formatFileSize(file.size)})</span>
                <button class="remove-pdf-btn" data-index="${index}">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');

        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-pdf-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.closest('button').dataset.index);
                this.pdfFiles.splice(index, 1);
                this.updateFileList();
            });
        });
    }

    // Process PDF based on action
    async processPDF(action) {
        if (this.pdfFiles.length === 0) {
            this.showError('Please upload at least one PDF file');
            return;
        }

        this.showLoading('Processing PDF...');

        try {
            let result;
            switch(action) {
                case 'merge':
                    result = await this.mergePDFs();
                    break;
                case 'split':
                    result = await this.splitPDF();
                    break;
                case 'compress':
                    result = await this.compressPDF();
                    break;
                case 'convert-to-image':
                    result = await this.pdfToImage();
                    break;
                default:
                    throw new Error('Unknown action');
            }

            this.hideLoading();
            this.showResult(result);
        } catch (error) {
            this.hideLoading();
            this.showError(error.message);
        }
    }

    // Merge PDFs (placeholder)
    async mergePDFs() {
        return new Promise((resolve) => {
            setTimeout(() => {
                // In a real implementation, this would use a PDF library like pdf-lib
                const mergedPDF = {
                    name: 'merged-document.pdf',
                    size: this.pdfFiles.reduce((sum, file) => sum + file.size, 0),
                    data: 'data:application/pdf;base64,' + btoa('Simulated merged PDF content')
                };
                resolve(mergedPDF);
            }, 1500);
        });
    }

    // Split PDF (placeholder)
    async splitPDF() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const pages = 5; // Simulated page count
                const splitFiles = Array.from({ length: pages }, (_, i) => ({
                    name: `document-page-${i + 1}.pdf`,
                    size: Math.floor(this.pdfFiles[0].size / pages),
                    data: 'data:application/pdf;base64,' + btoa(`Simulated PDF page ${i + 1}`)
                }));
                resolve(splitFiles);
            }, 1500);
        });
    }

    // Compress PDF (placeholder)
    async compressPDF() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const originalSize = this.pdfFiles[0].size;
                const compressedSize = Math.floor(originalSize * 0.6); // 40% reduction
                
                const compressedPDF = {
                    name: 'compressed-document.pdf',
                    size: compressedSize,
                    originalSize: originalSize,
                    reduction: Math.round((1 - compressedSize / originalSize) * 100),
                    data: 'data:application/pdf;base64,' + btoa('Simulated compressed PDF content')
                };
                resolve(compressedPDF);
            }, 1500);
        });
    }

    // PDF to Image (placeholder)
    async pdfToImage() {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulate converting to multiple images
                const images = Array.from({ length: 3 }, (_, i) => ({
                    name: `document-page-${i + 1}.jpg`,
                    size: 500000, // 500KB per image
                    data: 'data:image/jpeg;base64,' + btoa('Simulated JPEG image')
                }));
                resolve(images);
            }, 2000);
        });
    }

    // Show loading indicator
    showLoading(message) {
        let loadingDiv = document.getElementById('pdfLoading');
        if (!loadingDiv) {
            loadingDiv = document.createElement('div');
            loadingDiv.id = 'pdfLoading';
            loadingDiv.className = 'pdf-loading';
            loadingDiv.innerHTML = `
                <div class="spinner"></div>
                <p>${message}</p>
            `;
            document.querySelector('.modal-body').appendChild(loadingDiv);
        }
        loadingDiv.style.display = 'block';
    }

    // Hide loading indicator
    hideLoading() {
        const loadingDiv = document.getElementById('pdfLoading');
        if (loadingDiv) {
            loadingDiv.style.display = 'none';
        }
    }

    // Show result
    showResult(result) {
        const resultDiv = document.getElementById('pdfResult');
        if (!resultDiv) {
            const div = document.createElement('div');
            div.id = 'pdfResult';
            div.className = 'pdf-result';
            document.querySelector('.modal-body').appendChild(div);
        }

        const resultElement = document.getElementById('pdfResult');
        
        if (Array.isArray(result)) {
            // Multiple files (split or convert)
            resultElement.innerHTML = `
                <div class="result-success">
                    <i class="fas fa-check-circle"></i>
                    <h3>Processing Complete!</h3>
                    <p>Generated ${result.length} files</p>
                    <div class="result-files">
                        ${result.map(file => `
                            <div class="result-file">
                                <i class="fas fa-file"></i>
                                <span>${file.name} (${this.formatFileSize(file.size)})</span>
                                <button class="download-btn" data-url="${file.data}">
                                    <i class="fas fa-download"></i> Download
                                </button>
                            </div>
                        `).join('')}
                    </div>
                    <button class="download-all-btn">
                        <i class="fas fa-download"></i> Download All as ZIP
                    </button>
                </div>
            `;
        } else {
            // Single file (merge or compress)
            let extraInfo = '';
            if (result.reduction) {
                extraInfo = `<p>Reduced from ${this.formatFileSize(result.originalSize)} to ${this.formatFileSize(result.size)} (${result.reduction}% smaller)</p>`;
            }

            resultElement.innerHTML = `
                <div class="result-success">
                    <i class="fas fa-check-circle"></i>
                    <h3>Processing Complete!</h3>
                    ${extraInfo}
                    <div class="result-file-single">
                        <i class="fas fa-file-pdf"></i>
                        <div>
                            <strong>${result.name}</strong>
                            <span>${this.formatFileSize(result.size)}</span>
                        </div>
                        <button class="download-btn" data-url="${result.data}">
                            <i class="fas fa-download"></i> Download
                        </button>
                    </div>
                </div>
            `;
        }

        // Add download event listeners
        document.querySelectorAll('.download-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const url = e.target.closest('button').dataset.url;
                const filename = e.target.closest('.result-file')?.querySelector('span')?.textContent.split(' (')[0] || 
                               e.target.closest('.result-file-single')?.querySelector('strong')?.textContent || 
                               'document.pdf';
                this.downloadFile(url, filename);
            });
        });

        resultElement.style.display = 'block';
        resultElement.scrollIntoView({ behavior: 'smooth' });
    }

    // Show error message
    showError(message) {
        const errorDiv = document.getElementById('pdfError');
        if (!errorDiv) {
            const div = document.createElement('div');
            div.id = 'pdfError';
            div.className = 'pdf-error';
            document.querySelector('.modal-body').appendChild(div);
        }

        document.getElementById('pdfError').innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                <p>${message}</p>
            </div>
        `;
        
        setTimeout(() => {
            const errorDiv = document.getElementById('pdfError');
            if (errorDiv) errorDiv.innerHTML = '';
        }, 5000);
    }

    // Show success message
    showSuccess(message) {
        const successDiv = document.getElementById('pdfSuccess');
        if (!successDiv) {
            const div = document.createElement('div');
            div.id = 'pdfSuccess';
            div.className = 'pdf-success';
            document.querySelector('.modal-body').appendChild(div);
        }

        document.getElementById('pdfSuccess').innerHTML = `
            <div class="success-message">
                <i class="fas fa-check-circle"></i>
                <p>${message}</p>
            </div>
        `;
        
        setTimeout(() => {
            const successDiv = document.getElementById('pdfSuccess');
            if (successDiv) successDiv.innerHTML = '';
        }, 3000);
    }

    // Download file
    downloadFile(dataUrl, filename) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Format file size
    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // Reset PDF tools
    reset() {
        this.pdfFiles = [];
        this.currentPDF = null;
        
        const fileList = document.getElementById('pdfFileList');
        if (fileList) fileList.innerHTML = '';
        
        const resultDiv = document.getElementById('pdfResult');
        if (resultDiv) resultDiv.style.display = 'none';
        
        const fileInputs = document.querySelectorAll('input[type="file"]');
        fileInputs.forEach(input => input.value = '');
    }
}

// Initialize PDFTools globally
window.PDFTools = new PDFTools();

// Add CSS for PDF tools
const pdfToolsCSS = `
    .pdf-file-list {
        max-height: 300px;
        overflow-y: auto;
        margin-bottom: 1.5rem;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 1rem;
    }
    
    .pdf-file-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px;
        background: #f8fafc;
        border-radius: 6px;
        margin-bottom: 8px;
    }
    
    .pdf-file-item:last-child {
        margin-bottom: 0;
    }
    
    .pdf-file-item i {
        color: #ef4444;
        font-size: 1.2rem;
    }
    
    .pdf-file-item span {
        flex: 1;
        font-size: 0.9rem;
    }
    
    .remove-pdf-btn {
        background: none;
        border: none;
        color: #64748b;
        cursor: pointer;
        padding: 5px;
        border-radius: 50%;
        transition: all 0.3s ease;
    }
    
    .remove-pdf-btn:hover {
        background: #f1f5f9;
        color: #ef4444;
    }
    
    .pdf-loading {
        text-align: center;
        padding: 2rem;
        background: #f8fafc;
        border-radius: 8px;
        margin: 1.5rem 0;
    }
    
    .pdf-loading .spinner {
        width: 50px;
        height: 50px;
        border: 4px solid #e2e8f0;
        border-top-color: #3b82f6;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 1rem;
    }
    
    .pdf-result {
        display: none;
        animation: fadeIn 0.5s ease;
    }
    
    .result-success {
        text-align: center;
        background: #f0f9ff;
        padding: 2rem;
        border-radius: 12px;
        border: 1px solid #bae6fd;
    }
    
    .result-success i {
        font-size: 3rem;
        color: #10b981;
        margin-bottom: 1rem;
    }
    
    .result-success h3 {
        color: #1e293b;
        margin-bottom: 0.5rem;
    }
    
    .result-files {
        margin: 1.5rem 0;
        max-height: 300px;
        overflow-y: auto;
    }
    
    .result-file, .result-file-single {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 12px;
        background: white;
        border-radius: 8px;
        margin-bottom: 10px;
        border: 1px solid #e2e8f0;
    }
    
    .result-file:last-child {
        margin-bottom: 0;
    }
    
    .result-file i, .result-file-single i {
        color: #f59e0b;
        font-size: 1.5rem;
    }
    
    .result-file span, .result-file-single span {
        flex: 1;
        text-align: left;
        font-size: 0.9rem;
        color: #64748b;
    }
    
    .result-file-single div {
        flex: 1;
        text-align: left;
    }
    
    .result-file-single strong {
        display: block;
        color: #1e293b;
        margin-bottom: 4px;
    }
    
    .download-btn {
        background: linear-gradient(135deg, #3b82f6, #1d4ed8);
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .download-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }
    
    .download-all-btn {
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        margin-top: 1rem;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 10px;
    }
    
    .download-all-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
    }
    
    .pdf-error, .pdf-success {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    }
    
    .error-message, .success-message {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .error-message {
        background: #fef2f2;
        border: 1px solid #fecaca;
        color: #dc2626;
    }
    
    .success-message {
        background: #f0f9ff;
        border: 1px solid #bae6fd;
        color: #059669;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

// Add PDF tools CSS to the document
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = pdfToolsCSS;
    document.head.appendChild(style);
    
    // Initialize PDF tools
    window.PDFTools.init();
});