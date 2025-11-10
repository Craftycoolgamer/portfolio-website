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
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024',
      description:
        'Demonstrates expertise in designing distributed systems on AWS. Covers architectural best practices, cost optimization, security, and reliability.',
      badgeUrl: 'https://via.placeholder.com/150/2563EB/FFFFFF?text=AWS',
      credentialId: 'ABC-123-XYZ',
      skills: ['Cloud Architecture', 'AWS Services', 'System Design'],
    },
    {
      id: 2,
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023',
      description:
        'Validates ability to build scalable and highly available applications using Google Cloud Platform technologies.',
      badgeUrl: 'https://via.placeholder.com/150/4285F4/FFFFFF?text=GCP',
      credentialId: 'GCP-456-DEF',
      skills: ['GCP', 'Cloud Development', 'DevOps'],
    },
    {
      id: 3,
      name: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2023',
      description:
        'Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.',
      badgeUrl: 'https://via.placeholder.com/150/0078D4/FFFFFF?text=Azure',
      credentialId: 'AZ-789-GHI',
      skills: ['Azure', 'Cloud Computing', 'Fundamentals'],
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
                  <img src={cert.badgeUrl} alt={cert.name} />
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
                <img src={selectedCert.badgeUrl} alt={selectedCert.name} />
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
                    <strong>Credential ID:</strong> {selectedCert.credentialId}
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

