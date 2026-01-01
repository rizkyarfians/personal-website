export const works = [
  {
    id: 1,
    title: "AIoT Smart Greenhouse",
    image: "../../../public/works/aiot-greenhouse/VRGH.jpg",
    description:
      "Digital twin platform for monitoring and controlling greenhouse systems using real-time sensor data.",
    longDescription:
      "An interactive AIoT-based Digital Twin platform designed to monitor and manage sustainable smart greenhouses in off-grid environments.This system combines IoT sensor networks, MQTT-based real-time data streaming, and a 3D Virtual Reality interface to create a live, immersive representation of greenhouse conditions. Environmental and plant data—such as temperature, humidity, water level, soil moisture, pH, and NPK nutrients—are collected from distributed sensors, processed by a microcontroller, and visualized inside a spatial digital twin.By translating raw sensor data into an interactive 3D environment, the platform enables intuitive monitoring, system-level insight, and faster decision-making. Designed for renewable-energy-powered deployment, the project explores how digital twins and immersive interfaces can improve resilience, scalability, and clarity in smart agriculture systems.",
    images: [
        "../../../public/works/aiot-greenhouse/VRGH.jpg",
       "../../../public/works/aiot-greenhouse/VRDemo.jpg",
    ],
    tags: ["AIoT", "Digital Twin", "3D", "Web"],
  },
  {
    id: 2,
    title: "Smart Greenhouse Management System",
    image: "../../../public/works/BIApps/BIApps.png",
    description:
      "Backend Project for Smart Greenhouse Management System",
    longDescription:
      "The backend is built using Node.js and Express, serving as the central layer that manages communication between IoT hardware devices and software applications. Sensor data—including temperature, humidity, water level, soil moisture, pH, and nutrient levels—is transmitted from microcontroller-based devices via the REST API.All incoming data is validated, processed, and stored in a MySQL database, enabling reliable historical data tracking and system analysis. The backend exposes secure RESTful APIs for data access and control, while implementing authentication, authorization, and controlled device access to ensure system integrity and prevent unauthorized interactions. By combining secure backend services, structured data management, and real-time IoT communication, this project demonstrates a scalable approach to managing smart greenhouse systems, particularly in off-grid and resource-constrained environments.",
    images: [
      "../../../public/works/BIApps/BIApps3.png",
      "../../../public/works/BIApps/BIApps2.png",
      
    ],
    tags: ["Mobile Apps", "Web", "AIoT"],
  },
  {
    id: 3,
    title: "Integrated Photobooth Payment Gateway with QRIS",
    description:
      "An Backend system integrating photobooth services with QRIS payment gateway for seamless transactions.",
      image: "../../../public/works/photobooth/photobooth-2.jpg",
    longDescription:
      "This project is a backend system that integrates photobooth services with QRIS-based digital payments, using Xendit as the payment gateway and DSLRBooth as the photobooth control software. The system dynamically generates QRIS payment requests for each session, securely verifies transactions through Xendit webhooks, and automatically triggers photobooth actions once payment is confirmed. With a strong focus on security, reliability, and seamless software–hardware integration, the backend ensures that only valid payments can activate photobooth sessions, enabling a smooth, cashless, and automated experience for commercial and event-based photobooth deployments.",
    images: [
      "../../../public/works/photobooth/photobooth-2.jpg",
      "../../../public/works/photobooth/photobooth-3.jpg",
    ],
    tags: ["Web", "Desktop Apps", "Payment Gateway"],
  },
  {
    id: 4,
    title: "Company Profile Website for PT. Royal Selangor Transporter",
    description:
      "A company profile website for PT. Royal Selangor Transporter built with WordPress and Elementor.",
        image: "../../../public/works/RST/RST.png",
    longDescription:
      "This project involves designing and developing a company profile website for PT. Royal Selangor Transporter using WordPress and Elementor. The website presents the company’s 24-hour logistics services, covering vehicle and goods transportation via land and sea routes across Indonesia. The focus of this project is on delivering a clean, professional layout and well-structured content that highlights the company’s strengths, including its extensive delivery network, experienced operational team, and GPS-tracked fleet. The website serves as a reliable digital presence to build trust, communicate service quality, and support the company’s marketing and customer engagement efforts.",
    images: [
      "../../../public/works/RST/RST.png",
      "../../../public/works/RST/RST.png",
    ],
    tags: ["Web"],
  },

  
];
