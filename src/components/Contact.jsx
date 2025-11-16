import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    // Get EmailJS configuration from environment variables
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

    // Check if EmailJS is configured
    if (!publicKey || !serviceId || !templateId) {
      console.error('EmailJS is not configured. Please set up your .env file.')
      console.error('Missing values:', {
        publicKey: !publicKey,
        serviceId: !serviceId,
        templateId: !templateId,
      })
      setSubmitStatus('error')
      setIsSubmitting(false)
      alert('Form submission is not configured. Please check your .env file and restart the dev server.')
      return
    }

    try {
      // Send email using EmailJS (newer API - public key passed directly)
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'quinn@prisbrey.us', // Your email address
        },
        publicKey // Pass public key as 4th parameter
      )

      if (result.text === 'OK') {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      } else {
        throw new Error('Email sending failed')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={`section contact ${className}`.trim()}>
      <h2 className="sectionTitle">Get In Touch</h2>
      <div className="contactContainer">
        <div className="contactContent">
          <div className="contactInfo">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out!
            </p>
            <div className="contactDetails">
              <div className="socialLinks">
                <a
                  href="mailto:quinn@prisbrey.com"
                  className="socialLink"
                >
                  <svg
                    className="socialLinkIcon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <div className="socialLinkContent">
                    <span className="socialLinkTitle">Email</span>
                    <span className="socialLinkSubtitle">quinn@prisbrey.com</span>
                  </div>
                </a>
                <a
                  href="https://github.com/craftycoolgamer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialLink"
                >
                  <svg
                    className="socialLinkIcon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <div className="socialLinkContent">
                    <span className="socialLinkTitle">GitHub</span>
                    <span className="socialLinkSubtitle">https://github.com/craftycoolgamer</span>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/quinn-prisbrey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialLink"
                >
                  <svg
                    className="socialLinkIcon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <div className="socialLinkContent">
                    <span className="socialLinkTitle">LinkedIn</span>
                    <span className="socialLinkSubtitle">https://linkedin.com/in/quinn-prisbrey</span>
                  </div>
                </a>
                {/* <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialLink"
                >
                  <svg
                    className="socialLinkIcon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                  <div className="socialLinkContent">
                    <span className="socialLinkTitle">Twitter</span>
                    <span className="socialLinkSubtitle">https://twitter.com</span>
                  </div>
                </a> */}
              </div>
            </div>
          </div>
          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="formGroup">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder="Your Name"
              />
              {errors.name && <span className="errorMessage">{errors.name}</span>}
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <span className="errorMessage">{errors.email}</span>
              )}
            </div>
            <div className="formGroup">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                placeholder="Your Message"
                rows="6"
              ></textarea>
              {errors.message && (
                <span className="errorMessage">{errors.message}</span>
              )}
            </div>
            {submitStatus === 'success' && (
              <div className="submitStatus successMessage">
                Thank you for your message! I will get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="submitStatus errorMessage">
                Sorry, there was an error sending your message. Please try again or contact me directly at quinn@prisbrey.us
              </div>
            )}
            <button
              type="submit"
              className="btn btnPrimary submitButton"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

