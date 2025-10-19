/**
 * Portfolio Website JavaScript
 * Handles seminars gallery functionality and interactions
 */

// Array of Unsplash image URLs for seminars gallery
const imageUrls = [
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
];

/**
 * Initialize seminars gallery
 * Generates the interactive seminars navigation with images
 */
function initializeSeminarsGallery() {
    const seminarsNav = document.querySelector('.akil-seminars-nav');
    
    if (!seminarsNav) {
        console.warn('Seminars navigation container not found');
        return;
    }

    // Generate HTML for seminars gallery
    const galleryHTML = Array.from({ length: 18 }, (_, i) => `
        <a href="#" class="akil-seminars-link" style="--akil-seminars-i:${i + 1};--akil-seminars-img:url('${imageUrls[i]}')">
            <div class="akil-seminars-img"></div>
            <aside class="akil-seminars-hover-zone">
                ${Array.from({ length: 9 }, () => '<i></i>').join('')}
            </aside>
        </a>
    `).join('');

    seminarsNav.innerHTML = galleryHTML;

    // Prevent default click behavior on all seminar links
    const seminarsLinks = seminarsNav.querySelectorAll('.akil-seminars-link');
    seminarsLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });
}

/**
 * Initialize all JavaScript functionality when DOM is loaded
 */
function initializePortfolio() {
    initializeSeminarsGallery();
    console.log('Portfolio JavaScript initialized successfully');
}

// Initialize when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
    // DOM is already loaded
    initializePortfolio();
}
