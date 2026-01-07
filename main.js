// main.js - Navigation, Search, and Tool Management

document.addEventListener('DOMContentLoaded', function() {
    // Tool Database
    const tools = [
        // Image Tools
        {
            id: 'jpg-to-png',
            name: 'JPG to PNG',
            description: 'Convert JPG images to PNG format with transparency support',
            icon: '🔄',
            iconColor: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
            category: 'image',
            keywords: ['jpg', 'png', 'convert', 'image', 'format'],
            popular: true
        },
        {
            id: 'png-to-jpg',
            name: 'PNG to JPG',
            description: 'Convert PNG images to JPG format with customizable background',
            icon: '🖼️',
            iconColor: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            category: 'image',
            keywords: ['png', 'jpg', 'convert', 'image', 'format'],
            popular: true
        },
        {
            id: 'image-resize',
            name: 'Image Resize',
            description: 'Resize images to exact dimensions while maintaining quality',
            icon: '📏',
            iconColor: 'linear-gradient(135deg, #10b981, #059669)',
            category: 'image',
            keywords: ['resize', 'dimensions', 'size', 'image'],
            popular: true
        },
        {
            id: 'image-crop',
            name: 'Image Crop',
            description: 'Crop images to remove unwanted areas or focus on specific parts',
            icon: '✂️',
            iconColor: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            category: 'image',
            keywords: ['crop', 'trim', 'cut', 'image'],
            popular: false
        },
        {
            id: 'image-compress',
            name: 'Image Compress',
            description: 'Reduce image file size without noticeable quality loss',
            icon: '🗜️',
            iconColor: 'linear-gradient(135deg, #ef4444, #dc2626)',
            category: 'image',
            keywords: ['compress', 'reduce', 'optimize', 'size', 'image'],
            popular: true
        },
        {
            id: 'passport-photo',
            name: 'Passport Photo Maker',
            description: 'Create perfect passport photos with auto background removal',
            icon: '🪪',
            iconColor: 'linear-gradient(135deg, #6366f1, #4f46e5)',
            category: 'image',
            keywords: ['passport', 'photo', 'id', 'visa', 'aadhaar', 'document'],
            popular: true
        },
        {
            id: 'image-enhancer',
            name: 'Image Enhancer',
            description: 'Enhance photo quality, reduce blur, and improve colors',
            icon: '✨',
            iconColor: 'linear-gradient(135deg, #ec4899, #db2777)',
            category: 'image',
            keywords: ['enhance', 'quality', 'improve', 'photo', 'edit'],
            popular: true
        },
        {
            id: 'image-to-pdf',
            name: 'Image to PDF',
            description: 'Convert multiple images to a single PDF document',
            icon: '📄',
            iconColor: 'linear-gradient(135deg, #f97316, #ea580c)',
            category: 'image',
            keywords: ['image', 'pdf', 'convert', 'document'],
            popular: true
        },
        {
            id: 'rotate-image',
            name: 'Rotate Image',
            description: 'Rotate images by 90, 180, or custom degrees',
            icon: '↩️',
            iconColor: 'linear-gradient(135deg, #06b6d4, #0891b2)',
            category: 'image',
            keywords: ['rotate', 'turn', 'image', 'orientation'],
            popular: false
        },
        {
            id: 'flip-image',
            name: 'Flip Image',
            description: 'Flip images horizontally or vertically',
            icon: '🔄',
            iconColor: 'linear-gradient(135deg, #84cc16, #65a30d)',
            category: 'image',
            keywords: ['flip', 'mirror', 'image', 'reverse'],
            popular: false
        },
        // PDF Tools
        {
            id: 'merge-pdf',
            name: 'Merge PDF',
            description: 'Combine multiple PDF files into a single document',
            icon: '🔗',
            iconColor: 'linear-gradient(135deg, #3b82f6, #2563eb)',
            category: 'pdf',
            keywords: ['merge', 'combine', 'pdf', 'join'],
            popular: true
        },
        {
            id: 'split-pdf',
            name: 'Split PDF',
            description: 'Extract pages or split PDF into multiple files',
            icon: '✂️',
            iconColor: 'linear-gradient(135deg, #ef4444, #dc2626)',
            category: 'pdf',
            keywords: ['split', 'extract', 'pdf', 'divide'],
            popular: true
        },
        {
            id: 'pdf-to-image',
            name: 'PDF to Image',
            description: 'Convert PDF pages to JPG or PNG images',
            icon: '🖼️',
            iconColor: 'linear-gradient(135deg, #10b981, #059669)',
            category: 'pdf',
            keywords: ['pdf', 'image', 'convert', 'jpg', 'png'],
            popular: true
        },
        {
            id: 'compress-pdf',
            name: 'Compress PDF',
            description: 'Reduce PDF file size while maintaining quality',
            icon: '🗜️',
            iconColor: 'linear-gradient(135deg, #f59e0b, #d97706)',
            category: 'pdf',
            keywords: ['compress', 'reduce', 'pdf', 'optimize'],
            popular: true
        },
        {
            id: 'pdf-tools',
            name: 'PDF Tools (Advanced)',
            description: 'Advanced PDF manipulation tools',
            icon: '🔧',
            iconColor: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            category: 'pdf',
            keywords: ['pdf', 'tools', 'advanced', 'edit'],
            popular: false
        },
        // Utility Tools
        {
            id: 'file-size-calc',
            name: 'File Size Calculator',
            description: 'Calculate file sizes and conversion between units',
            icon: '🧮',
            iconColor: 'linear-gradient(135deg, #6366f1, #4f46e5)',
            category: 'utility',
            keywords: ['calculator', 'size', 'file', 'convert'],
            popular: false
        },
        {
            id: 'online-notepad',
            name: 'Online Notepad',
            description: 'Simple text editor with save and copy features',
            icon: '📝',
            iconColor: 'linear-gradient(135deg, #06b6d4, #0891b2)',
            category: 'utility',
            keywords: ['notepad', 'text', 'editor', 'notes'],
            popular: true
        },
        {
            id: 'text-case-converter',
            name: 'Text Case Converter',
            description: 'Convert text between uppercase, lowercase, and title case',
            icon: '🔠',
            iconColor: 'linear-gradient(135deg, #10b981, #059669)',
            category: 'utility',
            keywords: ['text', 'case', 'convert', 'uppercase', 'lowercase'],
            popular: true
        },
        {
            id: 'qr-generator',
            name: 'QR Code Generator',
            description: 'Create customizable QR codes for URLs, text, or contact info',
            icon: '📱',
            iconColor: 'linear-gradient(135deg, #000000, #4b5563)',
            category: 'utility',
            keywords: ['qr', 'code', 'generate', 'scan'],
            popular: true
        },
        {
            id: 'json-formatter',
            name: 'JSON Formatter',
            description: 'Format and validate JSON data with syntax highlighting',
            icon: '{}',
            iconColor: 'linear-gradient(135deg, #f59e0b, #d97706)',
            category: 'utility',
            keywords: ['json', 'format', 'validate', 'code'],
            popular: false
        }
    ];

    // DOM Elements
    const toolSearch = document.getElementById('toolSearch');
    const clearSearch = document.getElementById('clearSearch');
    const imageToolsGrid = document.getElementById('imageToolsGrid');
    const pdfToolsGrid = document.getElementById('pdfToolsGrid');
    const utilityToolsGrid = document.getElementById('utilityToolsGrid');
    const toolModal = document.getElementById('toolModal');
    const modalTitle = document.getElementById('modalTitle');
    const toolInterface = document.getElementById('toolInterface');
    const closeModal = document.querySelector('.close-modal');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const loadingText = document.getElementById('loadingText');
    const progressFill = document.getElementById('progressFill');

    // Initialize
    renderTools();
    setupEventListeners();

    // Render tools to their respective grids
    function renderTools(filter = '') {
        const filteredTools = filter ? 
            tools.filter(tool => 
                tool.name.toLowerCase().includes(filter) ||
                tool.description.toLowerCase().includes(filter) ||
                tool.keywords.some(keyword => keyword.toLowerCase().includes(filter))
            ) : tools;

        // Clear grids
        imageToolsGrid.innerHTML = '';
        pdfToolsGrid.innerHTML = '';
        utilityToolsGrid.innerHTML = '';

        // Group tools by category
        const imageTools = filteredTools.filter(tool => tool.category === 'image');
        const pdfTools = filteredTools.filter(tool => tool.category === 'pdf');
        const utilityTools = filteredTools.filter(tool => tool.category === 'utility');

        // Render each group
        renderToolGroup(imageTools, imageToolsGrid);
        renderToolGroup(pdfTools, pdfToolsGrid);
        renderToolGroup(utilityTools, utilityToolsGrid);

        // Update counts
        updateToolCounts(imageTools.length, pdfTools.length, utilityTools.length);
    }

    // Render a group of tools to a grid
    function renderToolGroup(toolGroup, gridElement) {
        if (toolGroup.length === 0) {
            gridElement.innerHTML = `
                <div class="no-results">
                    <p>No tools found. Try a different search term.</p>
                </div>
            `;
            return;
        }

        toolGroup.forEach(tool => {
            const toolCard = createToolCard(tool);
            gridElement.appendChild(toolCard);
        });
    }

    // Create tool card element
    function createToolCard(tool) {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.dataset.toolId = tool.id;
        
        const keywords = tool.keywords.slice(0, 3).map(keyword => 
            `<span class="tool-keyword">${keyword}</span>`
        ).join('');

        const popularBadge = tool.popular ? 
            '<span class="tool-popular">Popular</span>' : '';

        card.innerHTML = `
            ${popularBadge}
            <div class="tool-icon" style="background: ${tool.iconColor}">
                ${tool.icon}
            </div>
            <h3>${tool.name}</h3>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-keywords">
                ${keywords}
            </div>
        `;

        card.addEventListener('click', () => openToolModal(tool));
        return card;
    }

    // Update tool counts in section headers
    function updateToolCounts(imageCount, pdfCount, utilityCount) {
        const imageCountElement = document.querySelector('#image-tools .tool-count');
        const pdfCountElement = document.querySelector('#pdf-tools .tool-count');
        const utilityCountElement = document.querySelector('#utility-tools .tool-count');

        if (imageCountElement) imageCountElement.textContent = `${imageCount} tools`;
        if (pdfCountElement) pdfCountElement.textContent = `${pdfCount} tools`;
        if (utilityCountElement) utilityCountElement.textContent = `${utilityCount} tools`;
    }

    // Open tool modal
    function openToolModal(tool) {
        modalTitle.textContent = tool.name;
        toolInterface.innerHTML = getToolInterface(tool.id);
        
        toolModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Initialize tool-specific functionality
        setTimeout(() => initializeTool(tool.id), 10);
    }

    // Get tool interface HTML
    function getToolInterface(toolId) {
        const interfaces = {
            // Image tools
            'jpg-to-png': getImageConverterInterface('Convert JPG to PNG'),
            'png-to-jpg': getImageConverterInterface('Convert PNG to JPG'),
            'image-resize': getImageResizeInterface(),
            'image-crop': getImageCropInterface(),
            'image-compress': getImageCompressInterface(),
            'passport-photo': getPassportPhotoInterface(),
            'image-enhancer': getImageEnhancerInterface(),
            'image-to-pdf': getImageToPdfInterface(),
            'rotate-image': getRotateImageInterface(),
            'flip-image': getFlipImageInterface(),
            
            // PDF tools
            'merge-pdf': getPdfToolInterface('Merge PDF', 'Upload multiple PDF files to merge into one'),
            'split-pdf': getPdfToolInterface('Split PDF', 'Upload a PDF to split into multiple files'),
            'pdf-to-image': getPdfToolInterface('PDF to Image', 'Convert PDF pages to images'),
            'compress-pdf': getPdfToolInterface('Compress PDF', 'Reduce PDF file size'),
            'pdf-tools': getPdfToolInterface('PDF Tools', 'Advanced PDF manipulation tools'),
            
            // Utility tools
            'file-size-calc': getFileSizeCalcInterface(),
            'online-notepad': getNotepadInterface(),
            'text-case-converter': getTextCaseInterface(),
            'qr-generator': getQrGeneratorInterface(),
            'json-formatter': getJsonFormatterInterface()
        };

        return interfaces[toolId] || '<p>Tool interface coming soon!</p>';
    }

    // Initialize tool-specific functionality
    function initializeTool(toolId) {
        // Add event listeners for file uploads
        const uploadAreas = document.querySelectorAll('.upload-area');
        uploadAreas.forEach(area => {
            area.addEventListener('click', () => {
                const input = area.querySelector('input[type="file"]');
                if (input) input.click();
            });
        });

        // Add event listeners for file inputs
        const fileInputs = document.querySelectorAll('input[type="file"]');
        fileInputs.forEach(input => {
            input.addEventListener('change', handleFileUpload);
        });

        // Initialize tool-specific functionality
        if (toolId === 'file-size-calc') initFileSizeCalculator();
        if (toolId === 'online-notepad') initNotepad();
        if (toolId === 'text-case-converter') initTextCaseConverter();
        if (toolId === 'qr-generator') initQrGenerator();
        if (toolId === 'json-formatter') initJsonFormatter();
    }

    // Handle file upload
    function handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        const uploadArea = event.target.closest('.upload-area');
        const fileInfo = uploadArea.nextElementSibling;
        
        if (fileInfo && fileInfo.classList.contains('file-info')) {
            const fileName = fileInfo.querySelector('.file-name');
            const fileSize = fileInfo.querySelector('.file-size');
            
            fileName.textContent = file.name;
            fileSize.textContent = formatFileSize(file.size);
            fileInfo.classList.add('show');
            
            // Show preview for image files
            if (file.type.startsWith('image/')) {
                showImagePreview(file);
            }
        }
    }

    // Show image preview
    function showImagePreview(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const previewContainer = document.querySelector('.preview-container');
            const originalPreview = document.getElementById('originalPreview');
            
            if (previewContainer && originalPreview) {
                originalPreview.src = e.target.result;
                previewContainer.classList.add('show');
            }
        };
        reader.readAsDataURL(file);
    }

    // Format file size
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    // Show loading overlay
    function showLoading(text = 'Processing...') {
        loadingText.textContent = text;
        loadingOverlay.style.display = 'flex';
    }

    // Update progress
    function updateProgress(percent) {
        progressFill.style.width = percent + '%';
    }

    // Hide loading overlay
    function hideLoading() {
        loadingOverlay.style.display = 'none';
        progressFill.style.width = '0%';
    }

    // Simulate processing
    function simulateProcessing() {
        showLoading();
        let progress = 0;
        
        const interval = setInterval(() => {
            progress += 10;
            updateProgress(progress);
            
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    hideLoading();
                    showResult();
                }, 500);
            }
        }, 200);
    }

    // Show result
    function showResult() {
        const resultArea = document.querySelector('.result-area');
        if (resultArea) {
            resultArea.classList.add('show');
            resultArea.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Setup event listeners
    function setupEventListeners() {
        // Search functionality
        toolSearch.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            renderTools(query);
            clearSearch.style.display = query ? 'block' : 'none';
        });

        // Clear search
        clearSearch.addEventListener('click', function() {
            toolSearch.value = '';
            renderTools('');
            clearSearch.style.display = 'none';
            toolSearch.focus();
        });

        // Close modal
        closeModal.addEventListener('click', closeToolModal);
        
        // Close modal when clicking outside
        toolModal.addEventListener('click', function(e) {
            if (e.target === toolModal) {
                closeToolModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && toolModal.style.display === 'flex') {
                closeToolModal();
            }
        });

        // Process buttons
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('process-btn')) {
                simulateProcessing();
            }
            
            if (e.target.classList.contains('reset-btn')) {
                resetTool();
            }
        });
    }

    // Close tool modal
    function closeToolModal() {
        toolModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        toolInterface.innerHTML = '';
    }

    // Reset tool
    function resetTool() {
        const fileInfos = document.querySelectorAll('.file-info');
        fileInfos.forEach(info => info.classList.remove('show'));
        
        const previewContainers = document.querySelectorAll('.preview-container');
        previewContainers.forEach(container => container.classList.remove('show'));
        
        const resultAreas = document.querySelectorAll('.result-area');
        resultAreas.forEach(area => area.classList.remove('show'));
        
        const fileInputs = document.querySelectorAll('input[type="file"]');
        fileInputs.forEach(input => input.value = '');
        
        const uploadAreas = document.querySelectorAll('.upload-area');
        uploadAreas.forEach(area => {
            const text = area.querySelector('.upload-text');
            if (text) text.textContent = 'Click to upload or drag & drop';
        });
    }

    // Tool Interface Templates
    function getImageConverterInterface(title) {
        return `
            <div class="tool-interface">
                <div class="upload-area">
                    <input type="file" accept="image/*" style="display: none;">
                    <div class="upload-icon">
                        <i class="fas fa-cloud-upload-alt"></i>
                    </div>
                    <div class="upload-text">Click to upload or drag & drop</div>
                    <div class="upload-subtext">Supports JPG, PNG, WEBP (Max 10MB)</div>
                </div>
                
                <div class="file-info">
                    <div class="file-name">filename.jpg</div>
                    <div class="file-size">2.5 MB</div>
                </div>
                
                <div class="preview-container">
                    <div class="preview-title">
                        <i class="fas fa-eye"></i> Preview
                    </div>
                    <div class="preview-box">
                        <div class="preview-column">
                            <div class="preview-label">Original</div>
                            <img id="originalPreview" class="preview-image" alt="Original">
                        </div>
                        <div class="preview-column">
                            <div class="preview-label">Converted</div>
                            <img id="convertedPreview" class="preview-image" alt="Converted">
                        </div>
                    </div>
                </div>
                
                <div class="tool-options">
                    <div class="option-group">
                        <label class="option-label">Quality</label>
                        <input type="range" class="option-range" min="1" max="100" value="90">
                        <div class="range-value">90%</div>
                    </div>
                </div>
                
                <div class="action-buttons">
                    <button class="action-btn action-btn-secondary reset-btn">
                        <i class="fas fa-redo"></i> Reset
                    </button>
                    <button class="action-btn action-btn-primary process-btn">
                        <i class="fas fa-cog"></i> Convert Now
                    </button>
                </div>
                
                <div class="result-area">
                    <div class="result-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3 class="result-title">Conversion Complete!</h3>
                    <p class="result-info">Your image has been converted successfully. Click below to download.</p>
                    <a href="#" class="download-btn" download="converted-image.png">
                        <i class="fas fa-download"></i> Download PNG
                    </a>
                </div>
            </div>
        `;
    }

    function getImageResizeInterface() {
        return `
            <div class="tool-interface">
                <div class="upload-area">
                    <input type="file" accept="image/*" style="display: none;">
                    <div class="upload-icon">
                        <i class="fas fa-cloud-upload-alt"></i>
                    </div>
                    <div class="upload-text">Click to upload or drag & drop</div>
                    <div class="upload-subtext">Supports JPG, PNG, WEBP (Max 10MB)</div>
                </div>
                
                <div class="file-info">
                    <div class="file-name">filename.jpg</div>
                    <div class="file-size">2.5 MB</div>
                </div>
                
                <div class="preview-container">
                    <div class="preview-title">
                        <i class="fas fa-eye"></i> Preview
                    </div>
                    <div class="preview-box">
                        <div class="preview-column">
                            <div class="preview-label">Original</div>
                            <img id="originalPreview" class="preview-image" alt="Original">
                        </div>
                        <div class="preview-column">
                            <div class="preview-label">Resized</div>
                            <img id="resizedPreview" class="preview-image" alt="Resized">
                        </div>
                    </div>
                </div>
                
                <div class="tool-options">
                    <div class="option-group">
                        <label class="option-label">Dimensions</label>
                        <div class="option-row">
                            <input type="number" class="option-select" placeholder="Width" value="800" style="flex: 1;">
                            <span style="font-weight: bold;">×</span>
                            <input type="number" class="option-select" placeholder="Height" value="600" style="flex: 1;">
                        </div>
                    </div>
                    
                    <div class="option-group">
                        <label class="option-label">Preset Sizes</label>
                        <div class="size-presets">
                            <div class="size-preset active">
                                <span class="size-label">Facebook</span>
                                <span class="size-dimensions">1200×630</span>
                            </div>
                            <div class="size-preset">
                                <span class="size-label">Instagram</span>
                                <span class="size-dimensions">1080×1080</span>
                            </div>
                            <div class="size-preset">
                                <span class="size-label">HD</span>
                                <span class="size-dimensions">1920×1080</span>
                            </div>
                            <div class="size-preset">
                                <span class="size-label">Mobile</span>
                                <span class="size-dimensions">720×1280</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="option-group">
                        <label class="option-label">Maintain Aspect Ratio</label>
                        <div class="option-row">
                            <button class="option-btn active">Yes</button>
                            <button class="option-btn">No</button>
                        </div>
                    </div>
                </div>
                
                <div class="action-buttons">
                    <button class="action-btn action-btn-secondary reset-btn">
                        <i class="fas fa-redo"></i> Reset
                    </button>
                    <button class="action-btn action-btn-primary process-btn">
                        <i class="fas fa-cog"></i> Resize Image
                    </button>
                </div>
                
                <div class="result-area">
                    <div class="result-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3 class="result-title">Resize Complete!</h3>
                    <p class="result-info">Your image has been resized successfully. Click below to download.</p>
                    <a href="#" class="download-btn" download="resized-image.jpg">
                        <i class="fas fa-download"></i> Download Image
                    </a>
                </div>
            </div>
        `;
    }

    function getImageCompressInterface() {
        return `
            <div class="tool-interface">
                <div class="upload-area">
                    <input type="file" accept="image/*" style="display: none;">
                    <div class="upload-icon">
                        <i class="fas fa-cloud-upload-alt"></i>
                    </div>
                    <div class="upload-text">Click to upload or drag & drop</div>
                    <div class="upload-subtext">Supports JPG, PNG, WEBP (Max 10MB)</div>
                </div>
                
                <div class="file-info">
                    <div class="file-name">filename.jpg</div>
                    <div class="file-size">2.5 MB</div>
                </div>
                
                <div class="preview-container">
                    <div class="preview-title">
                        <i class="fas fa-eye"></i> Preview
                    </div>
                    <div class="preview-box">
                        <div class="preview-column">
                            <div class="preview-label">Original (2.5 MB)</div>
                            <img id="originalPreview" class="preview-image" alt="Original">
                        </div>
                        <div class="preview-column">
                            <div class="preview-label">Compressed (0.8 MB)</div>
                            <img id="compressedPreview" class="preview-image" alt="Compressed">
                        </div>
                    </div>
                </div>
                
                <div class="tool-options">
                    <div class="option-group">
                        <label class="option-label">Compression Level</label>
                        <input type="range" class="option-range" min="1" max="100" value="80">
                        <div class="range-value">80% (Balanced)</div>
                    </div>
                    
                    <div class="option-group">
                        <label class="option-label">Target Size</label>
                        <div class="option-row">
                            <button class="option-btn active">Optimal</button>
                            <button class="option-btn">Small</button>
                            <button class="option-btn">Tiny</button>
                        </div>
                    </div>
                </div>
                
                <div class="action-buttons">
                    <button class="action-btn action-btn-secondary reset-btn">
                        <i class="fas fa-redo"></i> Reset
                    </button>
                    <button class="action-btn action-btn-primary process-btn">
                        <i class="fas fa-cog"></i> Compress Image
                    </button>
                </div>
                
                <div class="result-area">
                    <div class="result-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3 class="result-title">Compression Complete!</h3>
                    <p class="result-info">Reduced from 2.5 MB to 0.8 MB (68% smaller).</p>
                    <a href="#" class="download-btn" download="compressed-image.jpg">
                        <i class="fas fa-download"></i> Download Compressed
                    </a>
                </div>
            </div>
        `;
    }

    function getPassportPhotoInterface() {
        return `
            <div class="tool-interface">
                <div class="upload-area">
                    <input type="file" accept="image/*" style="display: none;">
                    <div class="upload-icon">
                        <i class="fas fa-cloud-upload-alt"></i>
                    </div>
                    <div class="upload-text">Upload Your Photo</div>
                    <div class="upload-subtext">Face should be clearly visible with plain background</div>
                </div>
                
                <div class="file-info">
                    <div class="file-name">filename.jpg</div>
                    <div class="file-size">2.5 MB</div>
                </div>
                
                <div class="preview-container">
                    <div class="preview-title">
                        <i class="fas fa-eye"></i> Preview
                    </div>
                    <div class="preview-box">
                        <div class="preview-column">
                            <div class="preview-label">Original Photo</div>
                            <img id="originalPreview" class="preview-image" alt="Original">
                        </div>
                        <div class="preview-column">
                            <div class="preview-label">Passport Ready</div>
                            <img id="passportPreview" class="preview-image" alt="Passport">
                        </div>
                    </div>
                </div>
                
                <div class="tool-options">
                    <div class="option-group">
                        <label class="option-label">Document Type</label>
                        <div class="size-presets">
                            <div class="size-preset active">
                                <span class="size-label">Indian Passport</span>
                                <span class="size-dimensions">2x2 inches</span>
                            </div>
                            <div class="size-preset">
                                <span class="size-label">Aadhaar Card</span>
                                <span class="size-dimensions">3.5x4.5 cm</span>
                            </div>
                            <div class="size-preset">
                                <span class="size-label">PAN Card</span>
                                <span class="size-dimensions">3.5x2.5 cm</span>
                            </div>
                            <div class="size-preset">
                                <span class="size-label">Visa (US)</span>
                                <span class="size-dimensions">2x2 inches</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="option-group">
                        <label class="option-label">Background Color</label>
                        <div class="color-options">
                            <div class="color-option active" style="background: white;"></div>
                            <div class="color-option" style="background: #e0f2fe;"></div>
                            <div class="color-option" style="background: #f0f9ff;"></div>
                            <div class="color-option" style="background: #f8fafc;"></div>
                        </div>
                    </div>
                    
                    <div class="option-group">
                        <label class="option-label">Download Format</label>
                        <div class="option-row">
                            <button class="option-btn active">JPG</button>
                            <button class="option-btn">PNG</button>
                            <button class="option-btn">PDF (4x6 sheet)</button>
                        </div>
                    </div>
                </div>
                
                <div class="action-buttons">
                    <button class="action-btn action-btn-secondary reset-btn">
                        <i class="fas fa-redo"></i> Reset
                    </button>
                    <button class="action-btn action-btn-primary process-btn">
                        <i class="fas fa-cog"></i> Create Passport Photo
                    </button>
                </div>
                
                <div class="result-area">
                    <div class="result-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3 class="result-title">Passport Photo Ready!</h3>
                    <p class="result-info">Your passport photo meets all official requirements.</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                        <a href="#" class="download-btn" download="passport-photo.jpg">
                            <i class="fas fa-download"></i> Download JPG
                        </a>
                        <a href="#" class="download-btn" style="background: linear-gradient(135deg, #ef4444, #dc2626);">
                            <i class="fas fa-print"></i> Print Sheet
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    function getPdfToolInterface(title, description) {
        return `
            <div class="tool-interface">
                <div class="upload-area">
                    <input type="file" accept=".pdf" style="display: none;">
                    <div class="upload-icon">
                        <i class="fas fa-file-pdf"></i>
                    </div>
                    <div class="upload-text">${description}</div>
                    <div class="upload-subtext">Max file size: 50MB</div>
                </div>
                
                <div class="file-info">
                    <div class="file-name">document.pdf</div>
                    <div class="file-size">5.2 MB</div>
                </div>
                
                <div class="tool-options">
                    <div class="option-group">
                        <label class="option-label">${title} Options</label>
                        <select class="option-select">
                            <option>Default Settings</option>
                            <option>High Quality</option>
                            <option>Maximum Compression</option>
                        </select>
                    </div>
                </div>
                
                <div class="action-buttons">
                    <button class="action-btn action-btn-secondary reset-btn">
                        <i class="fas fa-redo"></i> Reset
                    </button>
                    <button class="action-btn action-btn-primary process-btn">
                        <i class="fas fa-cog"></i> Process PDF
                    </button>
                </div>
                
                <div class="result-area">
                    <div class="result-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3 class="result-title">Processing Complete!</h3>
                    <p class="result-info">Your PDF has been processed successfully.</p>
                    <a href="#" class="download-btn" download="processed-document.pdf">
                        <i class="fas fa-download"></i> Download PDF
                    </a>
                </div>
            </div>
        `;
    }

    function getFileSizeCalcInterface() {
        return `
            <div class="tool-interface">
                <div class="tool-options" style="margin-top: 2rem;">
                    <div class="option-group">
                        <label class="option-label">File Size</label>
                        <div class="option-row">
                            <input type="number" class="option-select" placeholder="Size" value="1" style="flex: 2;">
                            <select class="option-select" style="flex: 1;">
                                <option>Bytes</option>
                                <option>KB</option>
                                <option selected>MB</option>
                                <option>GB</option>
                                <option>TB</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="option-group">
                        <label class="option-label">Convert To</label>
                        <div class="size-presets">
                            <div class="size-preset active">
                                <span class="size-label">Bytes</span>
                                <span class="size-dimensions result-size">1,048,576</span>
                            </div>
                            <div class="size-preset">
                                <span class="size-label">KB</span>
                                <span class="size-dimensions result-size">1,024</span>
                            </div>
                            <div class="size-preset">
                                <span class="size-label">MB</span>
                                <span class="size-dimensions result-size">1</span>
                            </div>
                            <div class="size-preset">
                                <span class="size-label">GB</span>
                                <span class="size-dimensions result-size">0.00098</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="result-area show" style="margin-top: 2rem;">
                    <h3 class="result-title">File Size Calculator</h3>
                    <p class="result-info">1 MB = 1,024 KB = 1,048,576 Bytes</p>
                    <div style="background: white; padding: 1.5rem; border-radius: var(--radius-sm); margin-top: 1rem;">
                        <p style="text-align: left; margin-bottom: 0.5rem;"><strong>Common File Sizes:</strong></p>
                        <ul style="text-align: left; color: var(--gray-color);">
                            <li>Photo (12MP): ≈ 3.5 MB</li>
                            <li>Song (MP3): ≈ 4 MB</li>
                            <li>Document (PDF): ≈ 0.5-2 MB</li>
                            <li>Video (1 min HD): ≈ 60 MB</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    function getNotepadInterface() {
        return `
            <div class="tool-interface">
                <div class="tool-options">
                    <div class="option-group">
                        <label class="option-label">Your Notes</label>
                        <textarea class="option-select" rows="10" placeholder="Start typing your notes here..." style="resize: vertical; min-height: 200px; font-family: monospace;">Welcome to ToolsShop Notepad!
Your notes are saved automatically in your browser.
No data is sent to any server - complete privacy!</textarea>
                    </div>
                </div>
                
                <div class="action-buttons">
                    <button class="action-btn action-btn-secondary" id="clearNotes">
                        <i class="fas fa-trash"></i> Clear All
                    </button>
                    <button class="action-btn action-btn-secondary" id="copyNotes">
                        <i class="fas fa-copy"></i> Copy Text
                    </button>
                    <button class="action-btn action-btn-primary" id="saveNotes">
                        <i class="fas fa-save"></i> Save as TXT
                    </button>
                </div>
                
                <div class="result-area" id="notesResult" style="margin-top: 2rem;">
                    <p class="result-info">Notes are automatically saved in your browser's local storage.</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 1rem;">
                        <button class="action-btn action-btn-secondary" style="flex: none;">
                            <i class="fas fa-font"></i> Change Font
                        </button>
                        <button class="action-btn action-btn-secondary" style="flex: none;">
                            <i class="fas fa-palette"></i> Change Theme
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    function getTextCaseInterface() {
        return `
            <div class="tool-interface">
                <div class="tool-options">
                    <div class="option-group">
                        <label class="option-label">Input Text</label>
                        <textarea class="option-select" rows="6" placeholder="Enter text to convert..." style="resize: vertical; min-height: 150px; font-family: monospace;">hello world! this is toolsShop text converter.</textarea>
                    </div>
                    
                    <div class="option-group">
                        <label class="option-label">Convert To</label>
                        <div class="option-row">
                            <button class="option-btn active">UPPERCASE</button>
                            <button class="option-btn">lowercase</button>
                            <button class="option-btn">Title Case</button>
                            <button class="option-btn">Sentence case</button>
                        </div>
                    </div>
                </div>
                
                <div class="action-buttons">
                    <button class="action-btn action-btn-secondary" id="clearText">
                        <i class="fas fa-redo"></i> Clear
                    </button>
                    <button class="action-btn action-btn-primary" id="convertText">
                        <i class="fas fa-exchange-alt"></i> Convert
                    </button>
                    <button class="action-btn action-btn-secondary" id="copyText">
                        <i class="fas fa-copy"></i> Copy Result
                    </button>
                </div>
                
                <div class="result-area show" style="margin-top: 2rem;">
                    <h3 class="result-title">Converted Text</h3>
                    <div style="background: white; padding: 1.5rem; border-radius: var(--radius-sm); margin-top: 1rem; text-align: left;">
                        <pre style="margin: 0; white-space: pre-wrap; word-wrap: break-word; font-family: monospace; color: var(--dark-color);">HELLO WORLD! THIS IS TOOLSSHOP TEXT CONVERTER.</pre>
                    </div>
                </div>
            </div>
        `;
    }

    function getQrGeneratorInterface() {
        return `
            <div class="tool-interface">
                <div class="tool-options">
                    <div class="option-group">
                        <label class="option-label">QR Code Content</label>
                        <textarea class="option-select" rows="4" placeholder="Enter URL, text, or contact info..." style="resize: vertical; min-height: 100px;">https://toolsshop.example.com</textarea>
                    </div>
                    
                    <div class="option-group">
                        <label class="option-label">QR Code Size</label>
                        <input type="range" class="option-range" min="100" max="500" value="300">
                        <div class="range-value">300×300 px</div>
                    </div>
                    
                    <div class="option-group">
                        <label class="option-label">Colors</label>
                        <div style="display: flex; gap: 1rem; align-items: center;">
                            <div>
                                <label style="font-size: 0.9rem; color: var(--gray-color);">Foreground</label>
                                <input type="color" value="#000000" style="width: 60px; height: 40px;">
                            </div>
                            <div>
                                <label style="font-size: 0.9rem; color: var(--gray-color);">Background</label>
                                <input type="color" value="#ffffff" style="width: 60px; height: 40px;">
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="action-buttons">
                    <button class="action-btn action-btn-secondary" id="resetQr">
                        <i class="fas fa-redo"></i> Reset
                    </button>
                    <button class="action-btn action-btn-primary" id="generateQr">
                        <i class="fas fa-qrcode"></i> Generate QR Code
                    </button>
                </div>
                
                <div class="result-area show" style="margin-top: 2rem;">
                    <h3 class="result-title">Your QR Code</h3>
                    <div style="background: white; padding: 2rem; border-radius: var(--radius-sm); margin: 1.5rem auto; width: fit-content;">
                        <div id="qrCodePreview" style="width: 300px; height: 300px; background: #f8fafc; display: flex; align-items: center; justify-content: center; border-radius: var(--radius-sm);">
                            <div style="text-align: center; color: var(--gray-color);">
                                <i class="fas fa-qrcode" style="font-size: 4rem; margin-bottom: 1rem;"></i>
                                <p>QR Code Preview</p>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="download-btn" id="downloadQr">
                        <i class="fas fa-download"></i> Download QR Code
                    </a>
                </div>
            </div>
        `;
    }

    function getJsonFormatterInterface() {
        return `
            <div class="tool-interface">
                <div class="tool-options">
                    <div class="option-group">
                        <label class="option-label">JSON Input</label>
                        <textarea class="option-select" rows="10" placeholder='Paste your JSON here...' style="resize: vertical; min-height: 250px; font-family: monospace; font-size: 14px;">{
  "app": "ToolsShop",
  "version": "1.0",
  "tools": 20,
  "features": ["No login", "Fast", "Private"],
  "details": {
    "creator": "ToolsShop Team",
    "year": 2024
  }
}</textarea>
                    </div>
                </div>
                
                <div class="action-buttons">
                    <button class="action-btn action-btn-secondary" id="clearJson">
                        <i class="fas fa-trash"></i> Clear
                    </button>
                    <button class="action-btn action-btn-primary" id="formatJson">
                        <i class="fas fa-code"></i> Format JSON
                    </button>
                    <button class="action-btn action-btn-secondary" id="validateJson">
                        <i class="fas fa-check"></i> Validate
                    </button>
                    <button class="action-btn action-btn-secondary" id="minifyJson">
                        <i class="fas fa-compress"></i> Minify
                    </button>
                </div>
                
                <div class="result-area show" style="margin-top: 2rem;">
                    <h3 class="result-title">Formatted JSON</h3>
                    <div style="background: #1e293b; padding: 1.5rem; border-radius: var(--radius-sm); margin-top: 1rem; text-align: left; overflow: auto;">
                        <pre style="margin: 0; white-space: pre-wrap; word-wrap: break-word; font-family: 'Courier New', monospace; color: #e2e8f0; font-size: 14px; line-height: 1.5;">{
  <span style="color: #7dd3fc;">"app"</span>: <span style="color: #bbf7d0;">"ToolsShop"</span>,
  <span style="color: #7dd3fc;">"version"</span>: <span style="color: #bbf7d0;">"1.0"</span>,
  <span style="color: #7dd3fc;">"tools"</span>: <span style="color: #fde68a;">20</span>,
  <span style="color: #7dd3fc;">"features"</span>: [
    <span style="color: #bbf7d0;">"No login"</span>,
    <span style="color: #bbf7d0;">"Fast"</span>,
    <span style="color: #bbf7d0;">"Private"</span>
  ],
  <span style="color: #7dd3fc;">"details"</span>: {
    <span style="color: #7dd3fc;">"creator"</span>: <span style="color: #bbf7d0;">"ToolsShop Team"</span>,
    <span style="color: #7dd3fc;">"year"</span>: <span style="color: #fde68a;">2024</span>
  }
}</pre>
                    </div>
                    <button class="action-btn action-btn-secondary" style="margin-top: 1rem;" id="copyJson">
                        <i class="fas fa-copy"></i> Copy Formatted JSON
                    </button>
                </div>
            </div>
        `;
    }

    // Utility tool initializers
    function initFileSizeCalculator() {
        const sizeInput = document.querySelector('input[type="number"]');
        const unitSelect = document.querySelector('select');
        const resultElements = document.querySelectorAll('.result-size');

        function calculateSizes() {
            const size = parseFloat(sizeInput.value) || 1;
            const unit = unitSelect.value;
            
            // Convert to bytes first
            let bytes;
            switch(unit) {
                case 'Bytes': bytes = size; break;
                case 'KB': bytes = size * 1024; break;
                case 'MB': bytes = size * 1024 * 1024; break;
                case 'GB': bytes = size * 1024 * 1024 * 1024; break;
                case 'TB': bytes = size * 1024 * 1024 * 1024 * 1024; break;
                default: bytes = size * 1024 * 1024;
            }
            
            // Calculate conversions
            const results = [
                bytes, // Bytes
                bytes / 1024, // KB
                bytes / (1024 * 1024), // MB
                bytes / (1024 * 1024 * 1024) // GB
            ];
            
            // Update display
            resultElements.forEach((el, index) => {
                el.textContent = results[index].toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 5
                });
            });
        }

        sizeInput.addEventListener('input', calculateSizes);
        unitSelect.addEventListener('change', calculateSizes);
        calculateSizes(); // Initial calculation
    }

    function initNotepad() {
        const textarea = document.querySelector('textarea');
        const clearBtn = document.getElementById('clearNotes');
        const copyBtn = document.getElementById('copyNotes');
        const saveBtn = document.getElementById('saveNotes');

        // Load saved notes
        const savedNotes = localStorage.getItem('toolsShopNotes');
        if (savedNotes) {
            textarea.value = savedNotes;
        }

        // Auto-save
        textarea.addEventListener('input', function() {
            localStorage.setItem('toolsShopNotes', this.value);
        });

        // Clear notes
        clearBtn.addEventListener('click', function() {
            if (confirm('Clear all notes?')) {
                textarea.value = '';
                localStorage.removeItem('toolsShopNotes');
            }
        });

        // Copy notes
        copyBtn.addEventListener('click', function() {
            textarea.select();
            document.execCommand('copy');
            
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        });

        // Save as file
        saveBtn.addEventListener('click', function() {
            const text = textarea.value;
            const blob = new Blob([text], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'toolsShop-notes.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }

    function initTextCaseConverter() {
        const textarea = document.querySelector('textarea');
        const convertBtn = document.getElementById('convertText');
        const copyBtn = document.getElementById('copyText');
        const clearBtn = document.getElementById('clearText');
        const optionBtns = document.querySelectorAll('.option-btn');

        // Set active button
        optionBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                optionBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Convert text
        convertBtn.addEventListener('click', function() {
            const text = textarea.value;
            const activeBtn = document.querySelector('.option-btn.active');
            const caseType = activeBtn.textContent.trim();
            
            let converted;
            switch(caseType) {
                case 'UPPERCASE':
                    converted = text.toUpperCase();
                    break;
                case 'lowercase':
                    converted = text.toLowerCase();
                    break;
                case 'Title Case':
                    converted = text.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
                    break;
                case 'Sentence case':
                    converted = text.toLowerCase().replace(/(^\s*\w|[.!?]\s+\w)/g, c => c.toUpperCase());
                    break;
                default:
                    converted = text;
            }
            
            const resultPre = document.querySelector('.result-area pre');
            if (resultPre) {
                resultPre.textContent = converted;
            }
        });

        // Copy result
        copyBtn.addEventListener('click', function() {
            const resultPre = document.querySelector('.result-area pre');
            if (resultPre) {
                navigator.clipboard.writeText(resultPre.textContent)
                    .then(() => {
                        const originalText = copyBtn.innerHTML;
                        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                        setTimeout(() => {
                            copyBtn.innerHTML = originalText;
                        }, 2000);
                    });
            }
        });

        // Clear text
        clearBtn.addEventListener('click', function() {
            textarea.value = '';
            const resultPre = document.querySelector('.result-area pre');
            if (resultPre) {
                resultPre.textContent = '';
            }
        });

        // Initial conversion
        convertBtn.click();
    }

    function initQrGenerator() {
        const generateBtn = document.getElementById('generateQr');
        const downloadBtn = document.getElementById('downloadQr');
        const resetBtn = document.getElementById('resetQr');
        const textarea = document.querySelector('textarea');
        const sizeRange = document.querySelector('.option-range');
        const sizeValue = document.querySelector('.range-value');

        // Update size display
        sizeRange.addEventListener('input', function() {
            sizeValue.textContent = `${this.value}×${this.value} px`;
        });

        // Generate QR code
        generateBtn.addEventListener('click', function() {
            const qrPreview = document.getElementById('qrCodePreview');
            const text = textarea.value.trim();
            
            if (!text) {
                alert('Please enter some text or URL for the QR code');
                return;
            }
            
            // In a real app, you would generate actual QR code
            // For now, we'll simulate it
            qrPreview.innerHTML = `
                <div style="text-align: center; color: var(--primary-color);">
                    <i class="fas fa-qrcode" style="font-size: 6rem; margin-bottom: 1rem;"></i>
                    <p>QR Code Generated!</p>
                    <p style="font-size: 0.9rem; margin-top: 0.5rem; color: var(--gray-color);">Content: ${text.substring(0, 30)}${text.length > 30 ? '...' : ''}</p>
                </div>
            `;
        });

        // Reset
        resetBtn.addEventListener('click', function() {
            textarea.value = 'https://toolsshop.example.com';
            sizeRange.value = 300;
            sizeValue.textContent = '300×300 px';
            
            const qrPreview = document.getElementById('qrCodePreview');
            qrPreview.innerHTML = `
                <div style="text-align: center; color: var(--gray-color);">
                    <i class="fas fa-qrcode" style="font-size: 4rem; margin-bottom: 1rem;"></i>
                    <p>QR Code Preview</p>
                </div>
            `;
        });

        // Download
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, you would generate and download actual QR code image
            alert('QR code downloaded! (Simulated in demo)');
        });

        // Initial generation
        generateBtn.click();
    }

    function initJsonFormatter() {
        const formatBtn = document.getElementById('formatJson');
        const validateBtn = document.getElementById('validateJson');
        const minifyBtn = document.getElementById('minifyJson');
        const clearBtn = document.getElementById('clearJson');
        const copyBtn = document.getElementById('copyJson');
        const textarea = document.querySelector('textarea');

        // Format JSON
        formatBtn.addEventListener('click', function() {
            try {
                const json = JSON.parse(textarea.value);
                const formatted = JSON.stringify(json, null, 2);
                textarea.value = formatted;
                alert('JSON formatted successfully!');
            } catch (e) {
                alert('Invalid JSON: ' + e.message);
            }
        });

        // Validate JSON
        validateBtn.addEventListener('click', function() {
            try {
                JSON.parse(textarea.value);
                alert('✅ Valid JSON!');
            } catch (e) {
                alert('❌ Invalid JSON: ' + e.message);
            }
        });

        // Minify JSON
        minifyBtn.addEventListener('click', function() {
            try {
                const json = JSON.parse(textarea.value);
                const minified = JSON.stringify(json);
                textarea.value = minified;
                alert('JSON minified successfully!');
            } catch (e) {
                alert('Invalid JSON: ' + e.message);
            }
        });

        // Clear
        clearBtn.addEventListener('click', function() {
            textarea.value = '';
        });

        // Copy
        copyBtn.addEventListener('click', function() {
            textarea.select();
            document.execCommand('copy');
            
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        });
    }

    // Get remaining interfaces
    function getImageCropInterface() {
        return getImageToolInterface('Crop Image', 'Crop images to remove unwanted areas');
    }

    function getImageEnhancerInterface() {
        return getImageToolInterface('Enhance Image', 'Improve photo quality and colors');
    }

    function getImageToPdfInterface() {
        return getImageToolInterface('Image to PDF', 'Convert images to PDF document');
    }

    function getRotateImageInterface() {
        return getImageToolInterface('Rotate Image', 'Rotate images by custom degrees');
    }

    function getFlipImageInterface() {
        return getImageToolInterface('Flip Image', 'Flip images horizontally or vertically');
    }

    function getImageToolInterface(title, description) {
        return `
            <div class="tool-interface">
                <div class="upload-area">
                    <input type="file" accept="image/*" style="display: none;">
                    <div class="upload-icon">
                        <i class="fas fa-cloud-upload-alt"></i>
                    </div>
                    <div class="upload-text">${description}</div>
                    <div class="upload-subtext">Supports JPG, PNG, WEBP (Max 10MB)</div>
                </div>
                
                <div class="file-info">
                    <div class="file-name">filename.jpg</div>
                    <div class="file-size">2.5 MB</div>
                </div>
                
                <div class="preview-container">
                    <div class="preview-title">
                        <i class="fas fa-eye"></i> Preview
                    </div>
                    <div class="preview-box">
                        <div class="preview-column">
                            <div class="preview-label">Original</div>
                            <img id="originalPreview" class="preview-image" alt="Original">
                        </div>
                        <div class="preview-column">
                            <div class="preview-label">Processed</div>
                            <img id="processedPreview" class="preview-image" alt="Processed">
                        </div>
                    </div>
                </div>
                
                <div class="tool-options">
                    <div class="option-group">
                        <label class="option-label">${title} Options</label>
                        <select class="option-select">
                            <option>Default Settings</option>
                            <option>High Quality</option>
                            <option>Custom</option>
                        </select>
                    </div>
                </div>
                
                <div class="action-buttons">
                    <button class="action-btn action-btn-secondary reset-btn">
                        <i class="fas fa-redo"></i> Reset
                    </button>
                    <button class="action-btn action-btn-primary process-btn">
                        <i class="fas fa-cog"></i> ${title.split(' ')[0]}
                    </button>
                </div>
                
                <div class="result-area">
                    <div class="result-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3 class="result-title">Processing Complete!</h3>
                    <p class="result-info">Your image has been processed successfully.</p>
                    <a href="#" class="download-btn" download="processed-image.jpg">
                        <i class="fas fa-download"></i> Download Image
                    </a>
                </div>
            </div>
        `;
    }
});