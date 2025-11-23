import { useState, useEffect } from 'react'
import './Certifications.css'

const Certifications = ({ className = '' }) => {
  const [selectedCert, setSelectedCert] = useState(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedCert) {
        setSelectedCert(null)
      }
    }

    if (selectedCert) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedCert])

  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      description:
        'AWS Certified Cloud Practitioner certifies fundamental understanding of IT services and their uses in the AWS Cloud. Demonstrated cloud fluency and foundational AWS knowledge. Able to identify essential AWS services necessary to set up AWS-focused projects',
      badgeUrl: 'https://www.credly.com/badges/a44e950d-7070-4c4e-a609-63da18d66879/linked_in_profile',
      credentialId: '2f7dff55b91843f5bd41acc3d948bcd3',
      image: 'AWS Cloud Practitioner.png',
      skills: ['Cloud Computing', 'DevOps', 'Infrastructure as Code', 'Computer Science', 'Amazon Web Services', 'AWS Services', 'Cloud Platform'],
    },
    {
      id: 2,
      name: 'CompTIA Project+',
      issuer: 'CompTIA',
      date: '2024',
      description:
        'CompTIA Project+ certifies entry-level hands-on IT project management skills to coordinate small- to medium-sized projects using waterfall and agile methodologies. Demonstrates the knowledge and skills required to manage a project lifecycle by identifying and managing risk, establishing a communication plan, managing resources, and stakeholders, and maintaining project documentation',
      badgeUrl: 'https://www.credly.com/badges/427f5926-6c92-423f-8e4e-48a450d0a1c8/linked_in_profile',
      credentialId: 'DC6Q2JK631Q1QKCL',
      image: 'CompTIA Project+.png',
      skills: ['Project Management', 'Project+', 'Budgeting', 'Scheduling', 'Resource Management', 'Risk Management', 'Communication', 'Stakeholder Management', 'Project Planning']
    },
    {
      id: 3,
      name: 'ITIL® Foundation',
      issuer: 'AXELOS Global Best Practice',
      date: '2024',
      description:
        'ITIL® Foundation certification validates the ability to understand and apply the ITIL® framework, which is a best practice for IT service management.',
      badgeUrl: 'https://www.peoplecert.org/for-corporations/certificate-verification-service',
      credentialId: 'GR671687348QP',
      image: 'ITIL Foundation.png',
      skills: ['ITIL®', 'IT Service Management', 'ITIL® Foundation', 'ITIL® Best Practices', 'ITIL® Framework', 'ITIL® Practices', 'ITIL® Processes']
    },
  ]

  const openModal = (cert) => {
    setSelectedCert(cert)
  }

  const closeModal = () => {
    setSelectedCert(null)
  }

  return (
    <>
      <section className={`section certifications ${className}`.trim()}>
        <h2 className="sectionTitle">Certifications</h2>
        <div className="certificationsContainer">
          <div className="certificationsGrid">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="certificationBadge"
                onClick={() => openModal(cert)}
              >
                <div className="badgeImage">
                  <img src={`${import.meta.env.BASE_URL}images/${cert.image}`} alt={cert.name} />
                </div>
                <div className="badgeInfo">
                  <h3 className="badgeName">{cert.name}</h3>
                  <p className="badgeIssuer">{cert.issuer}</p>
                  <p className="badgeDate">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedCert && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="modalClose" onClick={closeModal}>
              ×
            </button>
            <div className="modalHeader">
              <div className="modalBadgeImage">
                <img src={`${import.meta.env.BASE_URL}images/${selectedCert.image}`} alt={selectedCert.name} />
              </div>
              <div className="modalTitle">
                <h2>{selectedCert.name}</h2>
                <p className="modalIssuer">{selectedCert.issuer}</p>
              </div>
            </div>
            <div className="modalBody">
              <div className="modalInfo">
                <div className="infoItem">
                  <strong>Issued:</strong> {selectedCert.date}
                </div>
                {selectedCert.credentialId && (
                  <div className="infoItem">
                    <strong>Credential ID:</strong>{' '}
                    <a
                      href={selectedCert.badgeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="credentialLink"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {selectedCert.credentialId}
                    </a>
                  </div>
                )}
              </div>
              <div className="modalDescription">
                <h3>Description</h3>
                <p>{selectedCert.description}</p>
              </div>
              {selectedCert.skills && selectedCert.skills.length > 0 && (
                <div className="modalSkills">
                  <h3>Skills Validated</h3>
                  <div className="skillsList">
                    {selectedCert.skills.map((skill, index) => (
                      <span key={index} className="skillTag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Certifications

