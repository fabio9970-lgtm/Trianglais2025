# Language Academy Landing Page Blueprint

## Project Goal
The primary goal is to create a static website for a language academy offering courses in English, French, and Spanish, using a specific JSON design system to establish a professional, modern, and minimalist online presence to attract potential students. The site will present our academy's content within this defined design framework.

## Technology Stack

*   **HTML5:** For semantic page structure, utilizing custom elements (Web Components) for reusability where appropriate.
*   **CSS3:** For styling and layout. Will leverage modern features like Flexbox, Grid, CSS variables, and potentially subtle keyframe animations. Focus on clean design, ample whitespace, and a limited color palette.
*   **JavaScript (ES Modules):** Pure JavaScript for any necessary interactive elements, such as smooth scrolling or simple form validation (if a contact form is included). No external frameworks will be used to keep the page lightweight and minimalist.
*   **Limitations:** Replicating dynamic functionalities found on lingui.com.co (like functional contact forms or integrations) will not be fully achievable in a static site; the focus is on the visual representation.
*   **Design System:** The design of the entire website will be based on a provided JSON object detailing colors, typography, spacing, component styles, and layout specifications. This JSON will be the single source of truth for all design decisions.

## Design Principles
*   **Minimalism:** Clean lines, uncluttered layout, and focus on essential content.
*   **Modern Typography:** Use carefully selected fonts to enhance readability and convey a modern aesthetic.
*   **Responsive Design:** The layout will adapt seamlessly to various screen sizes (desktop, tablet, mobile) using media queries and flexible units.
*   **Subtle Animations:** Incorporate subtle, non-intrusive animations to add visual interest and improve user experience (e.g., fade-in on scroll, hover effects).
*   **Defined Color Palette:** Utilize the specific color palette provided in the JSON design system for a consistent and sophisticated look.
*   **Adaptation to All Devices:** Ensure the design looks and functions well on a wide range of devices, from small mobile phones to large desktop monitors, through careful implementation of media queries, flexible units (like percentages, vw/vh, rem/em), and responsive layout techniques (Flexbox, Grid). This includes ensuring images are also responsive (`max-width: 100%;`).

*   **Implementation of JSON Design System:** The entire visual design, including colors, typography, spacing, button styles, input fields, layout (header height, content width), and component appearances (like cards), will be directly implemented from the provided JSON design system.
    *   The `/style.css` file will be completely rewritten to translate the JSON specifications into CSS rules, including CSS variables for colors and spacing.
    *   HTML files (`/index.html`, `/about.html`, `/courses.html`, `/contact.html`) will be reviewed and adjusted to utilize appropriate CSS classes and structures that align with the implemented JSON design system.

## Page Structure and Sections
This blueprint now describes a multi-page structure, with main sections residing on independent HTML files while maintaining a consistent design and navigation across all pages.

**Navigation Menu:**
*   A clean and minimalist navigation bar at the top.
*   Links to the main sections of the page (Hero, About Us, Courses, Contact).
*   **Inclusivity and Accessibility:**
    *   Use semantic HTML (`<nav>`, `<ul>`, `<li>`, `<a>`).
    *   Include ARIA attributes (`aria-label`, `aria-current`) for improved screen reader support.
    *   Ensure sufficient color contrast for readability.
    *   Provide a clear visual focus indicator for keyboard navigation.

    **Fixed and Full-Width Menu:**
    *   The navigation menu will be fixed at the top of the viewport so it remains visible while the user scrolls down the page.
    *   It will occupy the full width of the browser window.
    *   CSS properties required for this include `position: fixed;`, `top: 0;`, `width: 100%;`, and potentially a higher `z-index` to ensure it stays on top of other content.
    *   To prevent the main content from being hidden behind the fixed menu, appropriate `padding-top` or `margin-top` will be added to the main content container or the first section below the navigation.


**Hero Section Background:**
*   Implement a short, optimized video as the background for the Hero section in `/index.html`.
*   The video concept should relate to language learning, potentially showing subtle transitions between languages or abstract representations of global communication.
*   Technical considerations: Use optimized web formats (`.mp4`, `.webm`), ensure autoplay, loop, muted, and playsinline attributes are set.
*   Include a `poster` image for browsers that cannot play the video or while it loads.
*   Add an overlay layer on top of the video to ensure text readability.


### Independent Pages

1.  **/index.html (Landing Page):**
    *   Prominent headline clearly stating the academy's purpose (e.g., "Learn English, French, or Spanish").
    *   Concise subheading or brief description of the academy's approach or benefits.
    *   Clear Call-to-Action (CTA) button (e.g., "Explore Courses," "Contact Us").
    *   Visually appealing background (image, gradient, or simple color block) that aligns with the minimalist design.
    *   This page will primarily feature the Hero section and the consistent navigation.

2.  **/about.html (About Us Page):**
    *   Introduce the language academy.
    *   Highlight the academy's mission, values, or teaching philosophy.
    *   Briefly mention what sets the academy apart.
    *   This file will contain detailed information about the academy.
    *   **Content Source:** Information for this section will be based on analysis of competitor websites' "About Us" sections, adapted to fit our academy's unique selling points and presented within the framework of the JSON design system.

3.  **/courses.html (Courses Page):**
    *   Overview of the languages offered: English, French, and Spanish.
    *   A brief description for each language, perhaps highlighting key aspects of the curriculum or target audience.
    *   Avoid detailed course outlines on the landing page; direct users to contact for more information.
    *   This file will detail the language courses offered.
    *   **Content Source:** Information regarding the structure and types of courses (English, French, Spanish) will be informed by the "Programas" section of lingui.com.co, tailored to our academy's offerings and presented within the minimalist layout.

4.  **/contact.html (Contact Page):**
    *   Provide clear contact information (email address, phone number).
    *   Consider a simple contact form with minimal fields (Name, Email, Message).
    *   Include a call to action to get in touch for inquiries or enrollment.
    *   This file will contain contact details and potentially a contact form.
    *   **Content Source:** Contact information structure and elements will be influenced by the "Contacto" section of lingui.com.co, providing essential contact details clearly and concisely within our design framework.
    *   **Navigation Link Verification:** Ensure that all navigation links across all pages correctly point to their intended target URLs (`/index.html`, `/about.html`, `/courses.html`, `/contact.html`) and are functional.
## Implementation Notes
*   Start with the basic HTML structure for each page: `/index.html`, `/about.html`, `/courses.html`, and `/contact.html`.
*   Link to any required external fonts in the `<head>` of the HTML files as specified by the JSON typography.
*   Ensure each HTML file includes the consistent navigation menu and links to the shared `/style.css` and `/main.js` files.
*   Migrate the content from the original single-page structure in `/index.html` to their respective new HTML files.
*   Update the navigation links in all HTML files to point to the new page URLs (e.g., `/about.html`, `/courses.html`, `/contact.html`).
*   Continue styling the pages using the shared `/style.css`, ensuring the established layout and design principles are applied across all files.
*   Add JavaScript functionality in `/main.js` as needed for interactivity across the site (e.g., smooth scrolling).
*   Ensure cross-browser compatibility and accessibility throughout the site, within the constraints of replicating the visual design.
*   Optimize images and other assets for performance across all pages.
*   **Apply JSON Design System:** The primary focus of CSS implementation will be translating the provided JSON design system into CSS rules. This involves defining CSS variables, applying typography, spacing, and styling components based on the JSON specifications.
## Content Refinement Phase

Following the initial population of the independent pages based on competitor analysis, the project will enter a content refinement phase. The goal is to enhance the text on the `/about.html`, `/courses.html`, and `/contact.html` pages.

*   **Improve Clarity and Coherence:** Ensure the information is easy to understand and flows logically within each page and section.
*   **Enhance Persuasive Language:** Use compelling language to highlight the unique value proposition and benefits of the academy, encouraging visitor engagement and action.
*   **Refine Adaptation to Design:** Review and adjust the content structure (headings, paragraphs, lists) to best fit the established minimalist design, ensuring readability and visual appeal without clutter.
*   **Include Key Details:** Ensure all crucial information a potential student would need is present and easy to find on the relevant page. This builds upon the initial content from the competitor analysis, making it more specific and tailored to our academy.

This refinement process aims to make each page not just informative, but also effective in converting visitors into potential students, all while adhering to the minimalist and modern aesthetic.