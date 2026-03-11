import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import building1 from '../../assets/building-1.jpg';
import building2 from '../../assets/building-2.jpg';
import building3 from '../../assets/building-3.jpg';
import building4 from '../../assets/building-4.jpg';
import building5 from '../../assets/building-5.jpg';
import building6 from '../../assets/building-6.jpg';

// Project data with translation keys – images stay here
const projects = [
  {
    id: 1,
    image: building1,
    additionalImages: [building1, building2],
    titleKey: "project_1_title",
    descKey: "project_1_desc",
    detailedDescKey: "project_1_detailedDesc",
    serviceKeys: [
      "project_1_service_1",
      "project_1_service_2",
      "project_1_service_3",
      "project_1_service_4",
    ],
    clientKey: "project_1_client",
    locationKey: "project_1_location",
    completionDateKey: "project_1_completionDate",
  },
  {
    id: 2,
    image: building2,
    additionalImages: [building2, building3],
    titleKey: "project_2_title",
    descKey: "project_2_desc",
    detailedDescKey: "project_2_detailedDesc",
    serviceKeys: [
      "project_2_service_1",
      "project_2_service_2",
      "project_2_service_3",
      "project_2_service_4",
    ],
    clientKey: "project_2_client",
    locationKey: "project_2_location",
    completionDateKey: "project_2_completionDate",
  },
  {
    id: 3,
    image: building3,
    additionalImages: [building3, building4],
    titleKey: "project_3_title",
    descKey: "project_3_desc",
    detailedDescKey: "project_3_detailedDesc",
    serviceKeys: [
      "project_3_service_1",
      "project_3_service_2",
      "project_3_service_3",
      "project_3_service_4",
    ],
    clientKey: "project_3_client",
    locationKey: "project_3_location",
    completionDateKey: "project_3_completionDate",
  },
  {
    id: 4,
    image: building4,
    additionalImages: [building4, building5],
    titleKey: "project_4_title",
    descKey: "project_4_desc",
    detailedDescKey: "project_4_detailedDesc",
    serviceKeys: [
      "project_4_service_1",
      "project_4_service_2",
      "project_4_service_3",
      "project_4_service_4",
    ],
    clientKey: "project_4_client",
    locationKey: "project_4_location",
    completionDateKey: "project_4_completionDate",
  },
  {
    id: 5,
    image: building5,
    additionalImages: [building5, building6],
    titleKey: "project_5_title",
    descKey: "project_5_desc",
    detailedDescKey: "project_5_detailedDesc",
    serviceKeys: [
      "project_5_service_1",
      "project_5_service_2",
      "project_5_service_3",
      "project_5_service_4",
    ],
    clientKey: "project_5_client",
    locationKey: "project_5_location",
    completionDateKey: "project_5_completionDate",
  },
  {
    id: 6,
    image: building6,
    additionalImages: [building6, building1],
    titleKey: "project_6_title",
    descKey: "project_6_desc",
    detailedDescKey: "project_6_detailedDesc",
    serviceKeys: [
      "project_6_service_1",
      "project_6_service_2",
      "project_6_service_3",
      "project_6_service_4",
    ],
    clientKey: "project_6_client",
    locationKey: "project_6_location",
    completionDateKey: "project_6_completionDate",
  },
];

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } } };

const ProjectsSection = ({ t }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="w-full flex justify-center py-16 bg-gray-900 text-white">
      <div className="w-[95%] max-w-6xl">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-[#F97316] rounded px-4 py-2 uppercase text-white text-xs sm:text-sm md:text-base">
            {t['projekt']}
          </span>
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 leading-tight"
        >
          {t['projects_heading']}
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl"
        >
          {t['projects_description']}
        </motion.p>

        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              variants={fadeUp}
            >
              <img
                src={project.image}
                alt={t[project.titleKey]}
                className="w-full h-64 sm:h-72 md:h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-2">{t[project.titleKey]}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{t[project.descKey]}</p>
                <button
                  onClick={() => openModal(project)}
                  className="mt-3 bg-[#F97316] hover:bg-[#EA580C] cursor-pointer text-white px-4 py-2 rounded-lg font-semibold shadow transition-colors"
                >
                  {t['view_project']}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="bg-gray-800 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full [scrollbar-width:thin] [scrollbar-color:#4B5563_#1F2937]">
                <div className="relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-gray-400 hover:text-white bg-gray-700/50 hover:bg-gray-700 rounded-full p-2 transition-colors z-10"
                    aria-label="Close modal"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <img
                    src={selectedProject.image}
                    alt={t[selectedProject.titleKey]}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6">
                    <h2 className="text-3xl font-bold mb-2">{t[selectedProject.titleKey]}</h2>
                    <p className="text-gray-300 mb-4">{t[selectedProject.detailedDescKey]}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h3 className="text-[#F97316] font-semibold mb-1">{t['services_provided']}</h3>
                        <ul className="list-disc list-inside text-gray-300 text-sm">
                          {selectedProject.serviceKeys.map((serviceKey, index) => (
                            <li key={index}>{t[serviceKey]}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-[#F97316] font-semibold mb-1">{t['project_details']}</h3>
                        <p className="text-gray-300 text-sm"><span className="font-medium">{t['client_label']}</span> {t[selectedProject.clientKey]}</p>
                        <p className="text-gray-300 text-sm"><span className="font-medium">{t['location_label']}</span> {t[selectedProject.locationKey]}</p>
                        <p className="text-gray-300 text-sm"><span className="font-medium">{t['completed_label']}</span> {t[selectedProject.completionDateKey]}</p>
                      </div>
                    </div>

                    {selectedProject.additionalImages && selectedProject.additionalImages.length > 0 && (
                      <div>
                        <h3 className="text-[#F97316] font-semibold mb-2">{t['more_images']}</h3>
                        <div className="flex gap-2 overflow-x-auto pb-2">
                          {selectedProject.additionalImages.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt={`${t[selectedProject.titleKey]} additional ${idx + 1}`}
                              className="w-24 h-24 object-cover rounded-md flex-shrink-0"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;