# Smile Care Dental Clinic

Premium React + Tailwind CSS + Vite dental clinic website.

## 1. Doctor image
The uploaded image is already installed at:
`src/assets/doctor-richa.png`

To replace it later, replace that file with another image using the same filename.

## 2. Clinic details
Edit the `clinic` object near the top of `src/App.jsx`:
- phone
- email
- address
- hours
- name/doctor

Replace placeholder qualifications, experience and patient reviews with verified clinic information before publishing.

## 3. EmailJS on Replit
Add these three Replit Secrets:
- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`

The appointment form sends:
`name, phone, email, age, gender, service, date, time, message, current_date, current_time`

Configure your EmailJS template so its recipient is:
`Ytbhai486@gmail.com`

Do not put EmailJS values directly into source code.

## 4. Run
`npm install`
`npm run dev`

## 5. Build
`npm run build`

Then use Replit's deployment/publish flow for the Vite app.

## Important
The Google Maps embed, phone number, WhatsApp number, email, address, qualifications and testimonials are placeholders and should be replaced with the clinic's verified details before launch.
