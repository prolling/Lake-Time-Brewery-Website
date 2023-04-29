import React from 'react'
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Methods = () => {
    
    const contacts = [
      {
        title: 'Call Us',
        icon: <FaPhoneAlt className="text-3xl mr-4 text-black" />,
        text: '(641) 357-2040',
        link: 'tel:6413572040',
      },
      {
        title: 'Visit Us',
        icon: <FaMapMarkerAlt className="text-3xl mr-4 text-black" />,
        text: '801 Main Ave, Clear Lake, IA 50428',
        link: 'https://www.google.com/maps?q=801+Main+Street+Clear+Lake+Iowa+USA',
      },
      {
        title: 'Email Us',
        icon: <FaEnvelope className="text-3xl mr-4 text-black" />,
        text: 'laketimebrewery@gmail.com',
        link: 'mailto:laketimebrewery@gmail.com',
      },
    ];

  return (
        <div className="flex flex-wrap justify-center mt-12 pt-32">
          {contacts.map((contact) => (
            <div className="w-full sm:w-1/3 lg:w-1/4 bg-gray-200 shadow-lg rounded-lg px-8 py-6 m-4" key={contact.title}>
              <div className="flex items-center">
                <Link to={contact.link}>
                {contact.icon}
                </Link>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{contact.title}</h2>
                  <p className="text-black">{contact.text}</p>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-gray-600 mt-2 inline-block"
                  >
                    {contact.link.startsWith('tel:') ? 'Call Now' : contact.link.startsWith('mailto:') ? 'Send Email' : 'Get Directions'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
}

export default Methods