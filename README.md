The ADR Trading website was created using the same custom “ADR Trading” layout that we used to create our other layouts; it's modeled after what you see at Robinhood, Webull or at any Prop Firm dashboard. We chose to use a dark theme with a green accent because this is what most trading platforms use.

We have five main pages for the website:

- index.html — This will be your landing page where you will find the hero area along with the services and the video section.

- about-us.html — This page will explain who ADR Trading is and how we can help you through mentoring and coaching.

- services.html — This page lists the different types of mentoring and coaching services that ADR Trading offers.

- gallery.html — This page includes a slideshow of student wins and some examples of charts.

- contact-us.html — This page includes a contact form for students interested in working with ADR Trading.

JavaScript Interactions

-------------------

As stated earlier, the interactivity for the entire website is located within the script.js document:

1. Slideshow Controls

- On the gallery.html page, the next button and previous button allow the user to view each slide individually. Additionally, the slides automatically advance every 5 seconds.

2. Smooth scrolling

- If an in-page anchor link is clicked (e.g. View Trading Services), then the user will be able to scroll down to the corresponding section without any jarring.

3. Header Scroll Effect

- If the user scrolls more than 50 pixels, the scrolled class will be added to the header, changing the background color of the header and adding a drop shadow.

4. Contact Form Feedback

- On the contact-us.html page, submitting the form is captured with JavaScript. Instead of actually sending the form data, the page will display a confirmation message and clear out the form field values.

Challenges Encountered

------------------

- Ensuring all images and links were consistent throughout the many pages.

- Establishing Flexbox and Grid so that the layout would be responsive on smaller screen sizes.

- Moving the JavaScript from the inline tags to the script.js document and ensuring that it did not run until the corresponding elements existed on the page.