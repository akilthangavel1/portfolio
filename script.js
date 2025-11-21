/**
 * Akil Thangavel - Portfolio Website JavaScript
 * Handles seminars gallery functionality and smooth interactions
 */

// Configuration: Unsplash image URLs for seminars gallery
const SEMINARS_CONFIG = {
    imageUrls: [
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1280&h=720&fit=crop', // Mountains
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1280&h=720&fit=crop', // Forest
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1280&h=720&fit=crop', // Beach
        'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=1280&h=720&fit=crop', // City
        'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1280&h=720&fit=crop', // Desert
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1280&h=720&fit=crop', // Lake
        'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1280&h=720&fit=crop', // Space
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1280&h=720&fit=crop', // Street
        'https://images.unsplash.com/photo-1505842465776-3ac65e95b1d0?w=1280&h=720&fit=crop', // Architecture
        'https://images.unsplash.com/photo-1503264116251-35a269479413?w=1280&h=720&fit=crop', // Sky
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&h=720&fit=crop', // Forest Path
        'https://images.unsplash.com/photo-1493244040629-496f6d136cc3?w=1280&h=720&fit=crop', // Sunset
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop', // Ocean
        'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1280&h=720&fit=crop', // Waterfall
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1280&h=720&fit=crop', // Stars
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1280&h=720&fit=crop', // Canyon
        'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1280&h=720&fit=crop', // Tropical
        'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1280&h=720&fit=crop'  // Fields
    ],
    maxImages: 18,
    hoverZoneCount: 9
};

/**
 * Seminars Gallery Module
 * Handles the interactive 3D seminars gallery
 */
class SeminarsGallery {
    constructor() {
        this.container = document.querySelector('.akil-seminars-nav');
        this.initialized = false;
    }

    /**
     * Initialize the seminars gallery
     * @returns {boolean} Success status
     */
    init() {
        if (!this.container) {
            console.warn('Seminars gallery: Container not found (.akil-seminars-nav)');
            return false;
        }

        if (this.initialized) {
            console.warn('Seminars gallery: Already initialized');
            return true;
        }

        try {
            this.generateGalleryHTML();
            this.attachEventListeners();
            this.initialized = true;
            console.log('Seminars gallery: Successfully initialized');
            return true;
        } catch (error) {
            console.error('Seminars gallery: Initialization failed', error);
            return false;
        }
    }

    /**
     * Generate HTML for the seminars gallery
     * @private
     */
    generateGalleryHTML() {
        const { imageUrls, maxImages, hoverZoneCount } = SEMINARS_CONFIG;
        
        const galleryHTML = Array.from({ length: maxImages }, (_, index) => {
            const imageUrl = imageUrls[index] || imageUrls[0]; // Fallback to first image
            const hoverZones = Array.from({ length: hoverZoneCount }, () => '<i></i>').join('');
            
            return `
                <a href="#" class="akil-seminars-link" 
                   style="--akil-seminars-i:${index + 1};--akil-seminars-img:url('${imageUrl}')"
                   data-seminar-index="${index + 1}"
                   aria-label="Seminar ${index + 1}">
                    <div class="akil-seminars-img"></div>
                    <aside class="akil-seminars-hover-zone">
                        ${hoverZones}
                    </aside>
                </a>
            `;
        }).join('');

        this.container.innerHTML = galleryHTML;
    }

    /**
     * Attach event listeners to gallery elements
     * @private
     */
    attachEventListeners() {
        const seminarsLinks = this.container.querySelectorAll('.akil-seminars-link');
        
        seminarsLinks.forEach((link, index) => {
            // Prevent default click behavior
            link.addEventListener('click', this.handleLinkClick.bind(this));
            
            // Add accessibility support
            link.addEventListener('keydown', this.handleKeyboardNav.bind(this));
            
            // Optional: Add custom click handlers for each seminar
            link.addEventListener('click', () => this.handleSeminarClick(index + 1));
        });
    }

    /**
     * Handle link click events
     * @param {Event} event - Click event
     * @private
     */
    handleLinkClick(event) {
        event.preventDefault();
        // Link clicks are handled by CSS animations
        // Custom behavior can be added here
    }

    /**
     * Handle keyboard navigation
     * @param {KeyboardEvent} event - Keyboard event
     * @private
     */
    handleKeyboardNav(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            // Focus behavior is handled by CSS
            // Additional keyboard interactions can be added here
        }
    }

    /**
     * Handle individual seminar clicks
     * @param {number} seminarIndex - Index of clicked seminar
     * @private
     */
    handleSeminarClick(seminarIndex) {
        // This method can be extended to show seminar details,
        // open modals, or navigate to seminar-specific pages
        console.log(`Seminar ${seminarIndex} clicked`);
        
        // Example: You could dispatch a custom event here
        // document.dispatchEvent(new CustomEvent('seminar-selected', {
        //     detail: { index: seminarIndex }
        // }));
    }

    /**
     * Destroy the gallery and clean up
     */
    destroy() {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.initialized = false;
        console.log('Seminars gallery: Destroyed');
    }
}

/**
 * Contact Section Animation Module
 * Handles the entrance animation for social buttons
 */
class ContactAnimation {
    constructor() {
        this.avatar = null;
        this.buttons = [];
        this.initialized = false;
    }

    /**
     * Initialize contact section animations
     * @returns {boolean} Success status
     */
    init() {
        this.avatar = document.getElementById('psiAvatar');
        this.buttons = Array.from(document.querySelectorAll('.psi-social-button'));

        if (!this.avatar || this.buttons.length === 0) {
            console.warn('Contact animation: Avatar or buttons not found');
            return false;
        }

        try {
            this.setupEntranceAnimation();
            this.initialized = true;
            console.log('Contact animation: Successfully initialized');
            return true;
        } catch (error) {
            console.error('Contact animation: Initialization failed', error);
            return false;
        }
    }

    /**
     * Setup the entrance animation for social buttons
     * @private
     */
    setupEntranceAnimation() {
        const avatarRect = this.avatar.getBoundingClientRect();
        const avatarCenter = {
            x: avatarRect.left + avatarRect.width / 2,
            y: avatarRect.top + avatarRect.height / 2
        };

        const baseDelay = 150;
        const initialScale = 0.6;
        const dropBelow = 20;
        const duration = 800;
        const easing = 'cubic-bezier(.2,.8,.2,1)';

        this.buttons.forEach((btn, index) => {
            const btnRect = btn.getBoundingClientRect();
            const btnCenter = {
                x: btnRect.left + btnRect.width / 2,
                y: btnRect.top + btnRect.height / 2
            };

            const dx = avatarCenter.x - btnCenter.x;
            const dy = avatarCenter.y - btnCenter.y + dropBelow;

            btn.style.transition = `transform ${duration}ms ${easing}, opacity ${Math.max(200, duration/2)}ms ease`;
            btn.style.transform = `translate(${dx}px, ${dy}px) scale(${initialScale})`;
            btn.style.opacity = '0';
            btn.style.pointerEvents = 'none';

            const delay = index * baseDelay + 150;

            setTimeout(() => {
                btn.style.transform = 'translate(0,0) scale(1)';
                btn.style.opacity = '1';

                const restorePointer = () => {
                    btn.style.pointerEvents = '';
                    btn.removeEventListener('transitionend', restorePointer);
                };
                btn.addEventListener('transitionend', restorePointer);
            }, delay);
        });
    }
}

/**
 * Portfolio Application Controller
 * Manages all JavaScript functionality for the portfolio
 */
class PortfolioApp {
    constructor() {
        this.seminarsGallery = new SeminarsGallery();
        this.contactAnimation = new ContactAnimation();
        this.modules = [];
    }

    /**
     * Initialize all portfolio functionality
     */
    init() {
        console.log('Portfolio: Initializing application...');
        
        try {
            // Initialize seminars gallery
            if (this.seminarsGallery.init()) {
                this.modules.push('seminarsGallery');
            }

            // Initialize contact animation
            if (this.contactAnimation.init()) {
                this.modules.push('contactAnimation');
            }

            // Add other modules here as needed
            // Example: this.initSmoothScrolling();
            // Example: this.initContactForm();
            
            console.log(`Portfolio: Successfully initialized ${this.modules.length} modules`);
            
            // Dispatch ready event
            document.dispatchEvent(new CustomEvent('portfolio-ready', {
                detail: { modules: this.modules }
            }));
            
        } catch (error) {
            console.error('Portfolio: Initialization failed', error);
        }
    }

    /**
     * Example: Initialize smooth scrolling for navigation
     * @private
     */
    initSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        this.modules.push('smoothScrolling');
        console.log('Portfolio: Smooth scrolling initialized');
    }

    /**
     * Get application status
     * @returns {Object} Status information
     */
    getStatus() {
        return {
            initialized: this.modules.length > 0,
            modules: this.modules,
            seminarsGallery: this.seminarsGallery.initialized,
            contactAnimation: this.contactAnimation.initialized
        };
    }
}

// Global portfolio instance
let portfolioApp;

/**
 * Initialize portfolio when DOM is ready
 */
function initializePortfolio() {
    portfolioApp = new PortfolioApp();
    portfolioApp.init();
    
    // Make portfolio app globally accessible for debugging
    if (typeof window !== 'undefined') {
        window.portfolioApp = portfolioApp;
    }
}

// Auto-initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
    // DOM is already loaded
    initializePortfolio();
}

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PortfolioApp, SeminarsGallery, ContactAnimation, SEMINARS_CONFIG };
}