// ── Central Data Store for TSIT Website ──────────────────────────────────────

export const navItems = [
  { label: "Home",          href: "/" },
  { label: "About",         href: "/about" },
  { label: "Facilities",    href: "/facilities" },
  { label: "Programs",      href: "/programs" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "News & Events", href: "/news" },
  { label: "Contact",       href: "/contact" },
];

export const newsCards = [
  {
    title: "Diploma Admissions Open for 2026–27: Six AICTE-approved engineering branches",
    date: "01 Apr 2026",
    author: "TSIT Admissions",
    read: "4 min Read",
    type: "News",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "TSIT students secure top honors at Inter-Polytechnic Technical & Sports Meet",
    date: "20 Feb 2025",
    author: "TSIT Sports Cell",
    read: "3 min Read",
    type: "News",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
  },
];

export const eventCards = [
  {
    title: "Techno-Management Fest 2025",
    place: "TSIT Auditorium, Hubli",
    date: "2025",
    type: "Events",
    image: "/images/auditorium.webp",
  },
  {
    title: "District Polytechnic Sports Meet",
    place: "TSIT Campus Grounds",
    date: "2025",
    type: "Events",
    image: "/images/sports-grounds.webp",
  },
  {
    title: "Industry Interaction & Career Guidance",
    place: "Main Seminar Hall",
    date: "2025",
    type: "Events",
    image: "/images/career-talk.webp",
  },
  {
    title: "Technical Project & Model Exhibition",
    place: "Engineering Block",
    date: "2025",
    type: "Events",
    image: "/images/engineering-labs.webp",
  },
];

export const programItems = [
  {
    number: "01",
    slug: "electronics-and-communication",
    title: "Electronics & Communication Engg.",
    duration: "3 Years Full-Time (6 Semesters)",
    seats: "45 Seats",
    code: "AICTE Stream Code: ECE-101",
    affiliation: "Approved by AICTE, New Delhi & Affiliated to Directorate of Technical Education (DTE), Karnataka",
    color: "from-blue-500/10 to-blue-600/5",
    image: "/images/ece.webp",
    subjects: ["Electronic Circuits", "Signal Processing", "Microcontrollers & Embedded Systems", "Digital Communication", "VLSI Design & PCB Fabrication"],
    careers: ["Electronics Design Technician", "Telecom & Network Engineer", "Embedded Systems Developer", "PCB Layout Specialist", "Field Automation Supervisor"],
    description:
      "Comprehensive training in electronic circuits, signal processing, microcontrollers, embedded systems, and modern digital communication networks. Designed per DTE Karnataka C-20 curriculum standards.",
    eligibility: "Pass in 10th Standard (SSLC) or equivalent exam with a minimum of 35% aggregate marks in Science and Mathematics.",
    lateralEntry: "Eligible for direct admission to 2nd Year (3rd Semester) B.E. / B.Tech in ECE, EEE, Telecommunication, and Allied Branches through Karnataka DCET (Diploma Common Entrance Test).",
    overview:
      "The Diploma in Electronics & Communication Engineering at Tippu Shaheed Institute of Technology (TSIT), Hubli provides students with strong foundational and applied technical skills. Students gain hands-on expertise in semiconductor devices, analog & digital circuit design, signal processing, microcontroller programming (8051, ARM, Arduino), VLSI, and optical/wireless communication technologies.",
    semesters: [
      { sem: "Semester I & II", courses: ["Engineering Mathematics I & II", "Applied Science & Physics Lab", "Basic Electronics", "Engineering Graphics / CAD", "Communication Skills & English"] },
      { sem: "Semester III", courses: ["Analog Electronic Circuits", "Digital Electronics & Logic Design", "Electronic Measurements & Instrumentation", "C Programming & Microprocessor 8085", "Analog & Digital Electronics Lab"] },
      { sem: "Semester IV", courses: ["Microcontrollers (8051/ARM) & Embedded Systems", "Linear Integrated Circuits (Op-Amps)", "Communication Systems & Telephony", "Signals & Systems", "Microcontroller & Simulation Lab"] },
      { sem: "Semester V", courses: ["Advanced Digital Communication", "VLSI Design & VHDL/Verilog", "Industrial Automation & PLC", "Computer Communication Networks", "PCB Design & Fabrication Workshop"] },
      { sem: "Semester VI", courses: ["Optical Fiber & Wireless Mobile Networks", "Embedded Linux & IoT Applications", "Industrial Management & Entrepreneurship", "Major Technical Project & Seminar", "Comprehensive Viva-Voce"] },
    ],
    labs: [
      "Analog & Digital Electronics Lab (Tektronix CROs, Function Generators, Power Supplies)",
      "Microcontroller & Embedded Systems Lab (ARM, 8051, Arduino & Raspberry Pi kits)",
      "VLSI & Computer Simulation Lab (EDA Tools, Xilinx, Keil Microcontrollers)",
      "Communication Engineering Lab (Fiber Optic Kits, Microwave & Antenna Training Systems)",
      "PCB Design & Hardware Fabrication Workshop",
    ],
    governmentJobs: ["ISRO (Indian Space Research Organisation)", "DRDO (Defense Research & Development)", "BEL (Bharat Electronics Ltd)", "BSNL & MTNL Telecom", "Indian Railways (RRB Junior Engineer)", "KPTCL / KPCL"],
    privateJobs: ["L&T Semiconductor", "Bosch India", "Tata Elxsi", "Siemens Healthineers", "Airtel / Reliance Jio Networks", "Schneider Electric"],
  },
  {
    number: "02",
    slug: "computer-science",
    title: "Computer Science & Engineering",
    duration: "3 Years Full-Time (6 Semesters)",
    seats: "36 Seats",
    code: "AICTE Stream Code: CSE-102",
    affiliation: "Approved by AICTE, New Delhi & Affiliated to Directorate of Technical Education (DTE), Karnataka",
    color: "from-purple-500/10 to-purple-600/5",
    image: "/images/cse.webp",
    subjects: ["Programming in C, C++ & Java", "Data Structures & Algorithms", "Computer Networks & Security", "Database Management (SQL)", "Web Technologies & Cloud"],
    careers: ["Junior Software Developer", "Network & Systems Administrator", "Web Application Developer", "Database Administrator", "IT Infrastructure Specialist"],
    description:
      "Focuses on software engineering, computer network administration, database management systems, web development, cloud computing, and modern Object-Oriented programming languages.",
    eligibility: "Pass in 10th Standard (SSLC) or equivalent exam with a minimum of 35% aggregate marks in Science and Mathematics.",
    lateralEntry: "Eligible for direct admission to 2nd Year (3rd Semester) B.E. / B.Tech in CSE, Information Science (ISE), Artificial Intelligence & Data Science via Karnataka DCET.",
    overview:
      "The Diploma in Computer Science & Engineering at TSIT Hubli equips students with rigorous practical programming skills and core computer science fundamentals. The curriculum balances software development, system architecture, database administration, web programming, and cybersecurity basics to prepare graduates for high-demand IT industry roles and higher studies.",
    semesters: [
      { sem: "Semester I & II", courses: ["Engineering Mathematics I & II", "Basic Computer Skills & Office Automation", "Programming in C", "Concepts of Electrical & Electronics", "Communication Skills & Professional Ethics"] },
      { sem: "Semester III", courses: ["Data Structures using C/C++", "Computer Organization & Architecture", "Database Management Systems (RDBMS)", "Object-Oriented Programming with Java", "Data Structures & Java Lab"] },
      { sem: "Semester IV", courses: ["Operating Systems (Linux/Windows)", "Computer Communication & Networks", "Software Engineering & Testing", "Web Technology (HTML5, CSS3, JavaScript)", "Database & Web Development Lab"] },
      { sem: "Semester V", courses: ["Python Programming & Scripting", "Information & Cyber Security", "Cloud Computing & DevOps Basics", "Mobile Application Development", "Python & Network Administration Lab"] },
      { sem: "Semester VI", courses: ["Machine Learning Fundamentals & AI Tools", "Software Project Management", "Elective: Internet of Things (IoT)", "Capstone Technical Software Project", "Industrial Training & Viva"] },
    ],
    labs: [
      "High-Performance Computer Center (100+ Intel Core i5/i7 Workstations with High-Speed Internet)",
      "Software Development & Programming Lab (C, C++, Java, Python, GCC, Eclipse)",
      "Database & Web Application Lab (Oracle, MySQL, VS Code, Linux Server stack)",
      "Network Engineering & Cyber Security Lab (Cisco Switches, Routers, Packet Tracer)",
    ],
    governmentJobs: ["NIC (National Informatics Centre)", "C-DAC (Centre for Development of Advanced Computing)", "Railway Recruitment Board (RRB IT-JE)", "ISRO & DRDO IT Labs", "Bank IT Officers (IBPS / SBI)", "Karnataka State Data Centre"],
    privateJobs: ["TCS (Tata Consultancy Services)", "Infosys", "Wipro Technologies", "Cognizant", "Mindtree / LTIMindtree", "Tech Mahindra"],
  },
  {
    number: "03",
    slug: "electrical-and-electronics",
    title: "Electrical & Electronics Engg.",
    duration: "3 Years Full-Time (6 Semesters)",
    seats: "36 Seats",
    code: "AICTE Stream Code: EEE-103",
    affiliation: "Approved by AICTE, New Delhi & Affiliated to Directorate of Technical Education (DTE), Karnataka",
    color: "from-yellow-500/10 to-yellow-600/5",
    image: "/images/eee.webp",
    subjects: ["Electrical Machines (AC/DC)", "Generation, Transmission & Distribution", "Industrial Automation & PLC", "Control Systems & Switchgear", "Power Electronics & Drives"],
    careers: ["Electrical Maintenance Supervisor", "Substation / Power Plant Operator", "Industrial Automation Technician", "Electrical Estimator & Contractor", "Control Panel Designer"],
    description:
      "Covers electrical machines, power generation, transmission networks, industrial automation, SCADA/PLC systems, renewable energy, and power electronics.",
    eligibility: "Pass in 10th Standard (SSLC) or equivalent exam with a minimum of 35% aggregate marks in Science and Mathematics.",
    lateralEntry: "Eligible for direct admission to 2nd Year (3rd Semester) B.E. / B.Tech in Electrical & Electronics Engineering, Electrical & Power Engineering via Karnataka DCET.",
    overview:
      "The Diploma in Electrical & Electronics Engineering at TSIT Hubli provides thorough training in generation, transmission, distribution, and utilization of electrical power. Students master the operation and maintenance of transformers, AC/DC motors, generators, switchgear protection systems, modern industrial PLCs, and power electronic drives.",
    semesters: [
      { sem: "Semester I & II", courses: ["Engineering Mathematics I & II", "Applied Physics & Chemistry", "Elements of Electrical Engineering", "Engineering Drawing / CAD", "Workshop Practice & Wiring"] },
      { sem: "Semester III", courses: ["Electric Circuit Theory", "DC Machines & Transformers", "Electrical & Electronic Measurements", "Analog Electronics", "Electrical Machines Lab I"] },
      { sem: "Semester IV", courses: ["AC Machines (Induction & Synchronous)", "Power Generation & Economics", "Power Electronics & Inverters", "Digital Electronics & Microcontrollers", "Electrical Machines Lab II"] },
      { sem: "Semester V", courses: ["Electrical Power Transmission & Distribution", "Switchgear & Protection Systems", "Industrial Automation (PLC & SCADA)", "Utilization of Electrical Energy", "PLC & Power Electronics Lab"] },
      { sem: "Semester VI", courses: ["Electrical Design, Estimation & Costing", "Renewable Energy Sources (Solar/Wind)", "Industrial Management & Safety", "Major Technical Project & Field Visit", "Comprehensive Viva-Voce"] },
    ],
    labs: [
      "Electrical Machines Lab (AC/DC Motors, Alternators, 3-Phase Transformers, Loading Racks)",
      "Power Electronics & Drives Lab (Thyristor Inverters, Choppers, Cycloconverters, Speed Controllers)",
      "Measurements & Instrumentation Lab (Wattmeters, Energy Meters, Wheatstone Bridges)",
      "Industrial Automation & PLC Lab (Programmable Logic Controllers, SCADA Simulation)",
      "High Voltage & Switchgear Protection Simulation Setup",
    ],
    governmentJobs: ["KPTCL (Karnataka Power Transmission Corp Ltd)", "HESCOM / BESCOM / MESCOM Electricity Supply Companies", "KPCL (Karnataka Power Corporation Ltd)", "NTPC & POWERGRID", "BHEL & NHPC", "Indian Railways Electrical Cadre"],
    privateJobs: ["ABB India", "Siemens Power", "L&T Electrical & Automation", "Schneider Electric", "TATA Power", "Crompton Greaves"],
  },
  {
    number: "04",
    slug: "civil-engineering",
    title: "Civil Engineering",
    duration: "3 Years Full-Time (6 Semesters)",
    seats: "45 Seats",
    code: "AICTE Stream Code: CE-104",
    affiliation: "Approved by AICTE, New Delhi & Affiliated to Directorate of Technical Education (DTE), Karnataka",
    color: "from-orange-500/10 to-orange-600/5",
    image: "/images/civil.webp",
    subjects: ["Surveying & Total Station", "Structural Engineering & RCC", "Construction Technology & Management", "Environmental & Hydraulics Engg.", "AutoCAD & 3D Building Drafting"],
    careers: ["Civil Site Supervisor", "Land Surveyor & GIS Assistant", "Building Draughtsman / CAD Operator", "Quantity Surveyor & Cost Estimator", "Quality Control Construction Inspector"],
    description:
      "Core training in surveying, structural engineering, concrete technology, construction management, environmental engineering, soil mechanics, and computer-aided drafting (AutoCAD).",
    eligibility: "Pass in 10th Standard (SSLC) or equivalent exam with a minimum of 35% aggregate marks in Science and Mathematics.",
    lateralEntry: "Eligible for direct admission to 2nd Year (3rd Semester) B.E. / B.Tech in Civil Engineering, Environmental Engineering, Structural Engineering via Karnataka DCET.",
    overview:
      "The Diploma in Civil Engineering at TSIT Hubli prepares students to design, construct, execute, and maintain infrastructure projects like residential buildings, bridges, highways, water supply networks, and environmental sanitation works. Students master modern surveying tools (Total Station, GPS), material testing techniques, structural RCC detailing, and AutoCAD building modeling.",
    semesters: [
      { sem: "Semester I & II", courses: ["Engineering Mathematics I & II", "Applied Physics & Chemistry", "Basic Surveying & Levelling", "Engineering Graphics & Building Drawing", "Workshop Practice"] },
      { sem: "Semester III", courses: ["Advanced Surveying & GIS", "Strength of Materials / Mechanics of Structures", "Building Materials & Construction Technology", "Fluid Mechanics & Hydraulics", "Surveying Practice Lab I"] },
      { sem: "Semester IV", courses: ["Reinforced Concrete Structures (RCC)", "Concrete Technology & Quality Control", "Water Supply & Sanitary Engineering", "Computer Aided Building Drafting (AutoCAD)", "Material Testing & Hydraulics Lab"] },
      { sem: "Semester V", courses: ["Design of Steel & Masonry Structures", "Geotechnical Engineering / Soil Mechanics", "Highway, Railway & Airport Engineering", "Estimation, Costing & Valuation", "AutoCAD 2D/3D Lab"] },
      { sem: "Semester VI", courses: ["Construction Management & Safety", "Irrigation & Bridge Engineering", "Town Planning & Green Buildings", "Extensive Survey Project Camp", "Major Technical Project & Viva"] },
    ],
    labs: [
      "Surveying & Geomatics Lab (Total Stations, Digital Levels, Theodolites, Prismatic Compasses)",
      "Strength of Materials & Concrete Lab (Universal Testing Machine 100T, Compression Testing Machine, Vicat Apparatus)",
      "Hydraulics & Fluid Mechanics Lab (Venturimeter, Bernoulli's Apparatus, Pipe Friction Rigs)",
      "Computer Aided Design (CAD) Lab (AutoCAD 2024, Revit Architecture licenses)",
      "Geotechnical / Soil Testing Laboratory (Sieve Shakers, Direct Shear Apparatus, Triaxial Test)",
    ],
    governmentJobs: ["PWD (Public Works Department Karnataka)", "Irrigation Department & Minor Irrigation", "Karnataka Rural Infrastructure Development (KRIDL)", "NHAI (National Highways Authority of India)", "Hubli-Dharwad Municipal Corporation (HDMC)", "Railway Recruitment Board (RRB Civil JE)"],
    privateJobs: ["L&T Construction", "Sobha Limited", "Prestige Group", "Shapoorji Pallonji", "Tata Projects", "DLF & Brigade Group"],
  },
  {
    number: "05",
    slug: "mechanical-engineering",
    title: "Mechanical Engineering",
    duration: "3 Years Full-Time (6 Semesters)",
    seats: "45 Seats",
    code: "AICTE Stream Code: ME-105",
    affiliation: "Approved by AICTE, New Delhi & Affiliated to Directorate of Technical Education (DTE), Karnataka",
    color: "from-red-500/10 to-red-600/5",
    image: "/images/mech.webp",
    subjects: ["Thermodynamics & Thermal Engg.", "CAD/CAM & CNC Machining", "Manufacturing Processes & Workshop", "Fluid Mechanics & Turbomachinery", "Machine Design & Industrial Maintenance"],
    careers: ["Production & Manufacturing Supervisor", "Maintenance & Utility Engineer", "CNC Programmer & Operator", "Quality Control Inspector (QA/QC)", "CAD Draughtsman"],
    description:
      "Comprehensive diploma covering thermodynamics, CAD/CAM, CNC programming, foundry & welding manufacturing processes, fluid power, machine element design, and plant maintenance.",
    eligibility: "Pass in 10th Standard (SSLC) or equivalent exam with a minimum of 35% aggregate marks in Science and Mathematics.",
    lateralEntry: "Eligible for direct admission to 2nd Year (3rd Semester) B.E. / B.Tech in Mechanical, Industrial & Production, Mechatronics, Aeronautical Engineering via Karnataka DCET.",
    overview:
      "The Diploma in Mechanical Engineering at TSIT Hubli is one of the premier technical diploma programs in North Karnataka. It trains students in design, manufacturing, thermal power systems, hydraulic machinery, CNC technology, and plant maintenance. Hands-on workshop training on lathes, milling machines, welding rigs, and CNC trainers ensures high industry readiness.",
    semesters: [
      { sem: "Semester I & II", courses: ["Engineering Mathematics I & II", "Applied Science & Mechanics", "Engineering Graphics & Machine Drawing", "Basic Workshop Practice (Fitting, Carpentry)", "Communication Skills"] },
      { sem: "Semester III", courses: ["Thermodynamics & IC Engines", "Strength of Materials", "Manufacturing Processes (Casting, Welding, Turning)", "Mechanical Measurements & Metrology", "Workshop Practice Lab I (Machine Shop)"] },
      { sem: "Semester IV", courses: ["Thermal Engineering & Power Plants", "Fluid Mechanics & Hydraulic Machinery", "Theory of Machines & Mechanisms", "Computer Aided Machine Drawing (CAD)", "Metrology & Fluid Power Lab"] },
      { sem: "Semester V", courses: ["Design of Machine Elements", "Advanced Manufacturing Technology & CNC", "Industrial Hydraulics & Pneumatics", "Production Management & Industrial Engg", "CAD/CAM & CNC Lab"] },
      { sem: "Semester VI", courses: ["Mechatronics & Robotics Basics", "Refrigeration & Air Conditioning", "Industrial Safety & Total Quality Management (TQM)", "Major Manufacturing Technical Project", "Industrial Plant Exposure & Viva"] },
    ],
    labs: [
      "Central Machine Shop (Lathe Machines, Universal Milling, Shaping, Drilling & Grinding Machines)",
      "Foundry, Fitting & Welding Shop (Arc Welding, TIG/MIG Welding Rigs, Pattern Making)",
      "CNC & CAD/CAM Laboratory (CNC Lathe Trainer, CNC Milling Trainer, SolidWorks / MasterCAM)",
      "Thermal Engineering & IC Engines Lab (Multi-Cylinder Petrol & Diesel Engine Test Rigs, Calorimeters)",
      "Fluid Mechanics & Metrology Lab (Pelton Wheel Turbine, Francis Turbine, Vernier Calipers, Micrometers, Profile Projector)",
    ],
    governmentJobs: ["HAL (Hindustan Aeronautics Limited)", "BHEL (Bharat Heavy Electricals Ltd)", "ISRO & DRDO Mechanical Wings", "Indian Railways (RRB Loco Pilot / Junior Engineer)", "KSRTC / BMTC Technical Division", "ONGC & Indian Oil Corporation (IOCL)"],
    privateJobs: ["Tata Motors", "Bosch India", "Toyota Kirloskar Motor", "L&T Heavy Engineering", "Kirloskar Brothers", "Jindal Steel & Power (JSW)"],
  },
  {
    number: "06",
    slug: "automobile-engineering",
    title: "Automobile Engineering",
    duration: "3 Years Full-Time (6 Semesters)",
    seats: "45 Seats",
    code: "AICTE Stream Code: AE-106",
    affiliation: "Approved by AICTE, New Delhi & Affiliated to Directorate of Technical Education (DTE), Karnataka",
    color: "from-green-500/10 to-green-600/5",
    image: "/images/auto.webp",
    subjects: ["IC Engines & Fuel Injection", "Automotive Electronics & ECU", "Vehicle Dynamics & Transmission", "Chassis Systems & Braking", "Electric Vehicles (EV) & Diagnostics"],
    careers: ["Automobile Technical Supervisor", "Dealership Service Advisor", "Fleet & Logistics Maintenance Engineer", "EV Battery & Motor Specialist", "Automotive Diagnostic Specialist"],
    description:
      "Specialized diploma in internal combustion engines, automotive electricals, vehicle dynamics, suspension & steering chassis, electric & hybrid vehicles (EV), and computer diagnostic testing.",
    eligibility: "Pass in 10th Standard (SSLC) or equivalent exam with a minimum of 35% aggregate marks in Science and Mathematics.",
    lateralEntry: "Eligible for direct admission to 2nd Year (3rd Semester) B.E. / B.Tech in Automobile Engineering, Mechanical Engineering, EV Technology via Karnataka DCET.",
    overview:
      "The Diploma in Automobile Engineering at TSIT Hubli provides practical expertise in modern automotive systems, internal combustion engine tuning, transmission assemblies, electronic control units (ECU), ABS braking, power steering, and modern Electric Vehicle (EV) drive technology. Students learn fault diagnosis using OBD-II scanners and engine testing rigs.",
    semesters: [
      { sem: "Semester I & II", courses: ["Engineering Mathematics I & II", "Applied Physics & Chemistry", "Automobile Workshop Practice", "Engineering Drawing", "Basic Computer & Communication Skills"] },
      { sem: "Semester III", courses: ["Auto IC Engines & Combustion", "Automobile Chassis & Suspension Systems", "Strength of Materials & Auto Components", "Automobile Electricals & Battery Technology", "Auto Engine Dismantling & Assembly Lab"] },
      { sem: "Semester IV", courses: ["Transmission, Clutch & Gearbox Systems", "Automotive Electronics & Sensors", "Automobile Body Engineering & Aerodynamics", "Fuels & Lubricants Testing", "Chassis & Transmission Servicing Lab"] },
      { sem: "Semester V", courses: ["Electric & Hybrid Vehicles (EV Powertrains, BMS)", "Automotive Engine Performance & Emission Control", "Vehicle Maintenance, Servicing & Reconditioning", "Computer Aided Auto Component Design", "EV & OBD Diagnostic Scanning Lab"] },
      { sem: "Semester VI", courses: ["Motor Transport Organization & Fleet Management", "Two & Three Wheeler Technology", "Industrial Safety & Vehicle Inspection Regulations", "Major Automobile Fabricated Project", "Comprehensive Technical Viva"] },
    ],
    labs: [
      "Automobile Engine Overhauling Shop (Cut-section working models of Petrol & Diesel Engines, Fuel Injection Pump Rigs)",
      "Auto Chassis & Transmission Workshop (Hydraulic Braking, ABS Test Rig, Power Steering Rigs, Gearbox Assemblies)",
      "Electric Vehicle (EV) & Battery Diagnostics Lab (Lithium-ion Battery Pack, Battery Management System BMS, Motor Controller Test Rigs)",
      "Auto Electrical & Electronics Lab (Alternator & Starter Testing, ECU Diagnostic Scanners, OBD-II Readers)",
      "Vehicle Reconditioning & Wheel Alignment Shop (Computerized Wheel Balancer & 3D Wheel Alignment)",
    ],
    governmentJobs: ["KSRTC / NWKRTC / BMTC Transport Corporations", "RTO (Regional Transport Office - Assistant Inspector of Motor Vehicles AIMV)", "Indian Railways Mechanical & Loco Workshop", "DRDO Combat Vehicle Labs", "Indian Army Ordnance / EME Corps"],
    privateJobs: ["Tata Motors Commercial Vehicles", "Ashok Leyland", "TVS Motor Company", "Mahindra & Mahindra", "Ola Electric / Ather Energy", "Maruti Suzuki Dealership Networks"],
  },
];

export const facilitySlides = [
  {
    label: "Classroom",
    index: "01/08",
    headline: "Comfortable and modern classrooms to support learning activities",
    subtitle: "Engineering Classrooms",
    description:
      "Purpose-built classrooms supporting six diploma disciplines — designed to promote active learning, practical demonstrations, and collaborative problem-solving.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    label: "Library",
    index: "02/08",
    headline: "Exceptional Library Facilities & Technical Journals for Academic Discovery",
    subtitle: "TSIT Library",
    description:
      "A well-stocked library with over 5,000 books and technical journals across engineering disciplines, supporting students in research and academic development.",
    image: "/images/library.webp",
  },
  {
    label: "Auditorium",
    index: "03/08",
    headline: "Multipurpose Auditorium for Seminars and Cultural Extravaganzas",
    subtitle: "TSIT Auditorium",
    description:
      "A large multipurpose auditorium hosting seminars, cultural fests, Annual Day celebrations, and industry interaction events throughout the academic year.",
    image: "/images/auditorium.webp",
  },
  {
    label: "Laboratories",
    index: "04/08",
    headline: "State-of-the-Art Electronics, Computing & Engineering Labs",
    subtitle: "Departmental Labs",
    description:
      "Fully equipped computer networks, circuit testing stations, mechanical workshops, and civil testing equipment for practical hands-on training.",
    image: "/images/engineering-labs.webp",
  },
  {
    label: "Sports Grounds",
    index: "05/08",
    headline: "Spacious Outdoor Grounds & Basketball Courts for Student Athletics",
    subtitle: "Sports & Athletics",
    description:
      "Dedicated grounds for cricket, volleyball, basketball, and athletics competing at district polytechnic tournaments.",
    image: "/images/sports-grounds.webp",
  },
  {
    label: "Cafeteria",
    index: "06/08",
    headline: "Hygienic Canteen & Social Spaces for Refreshing Meals and Snacks",
    subtitle: "Campus Dining",
    description:
      "A clean campus cafeteria serving fresh meals, snacks, and beverages for students, faculty, and visiting guests.",
    image: "/images/cafeteria.webp",
  },
  {
    label: "Medical Care",
    index: "07/08",
    headline: "On-Campus First Aid & Medical Infirmary Support for Student Safety",
    subtitle: "Health & Safety",
    description:
      "First aid facilities and emergency medical assistance available on campus for all students and staff members.",
    image: "/images/medical.webp",
  },
  {
    label: "Campus Grounds",
    index: "08/08",
    headline: "6-Acre Green Campus Located at Simla Nagar, Hubli",
    subtitle: "Simla Nagar Campus",
    description:
      "Serene, green, and spacious campus grounds located behind Siddarudh Math, near the old Hubli bypass road.",
    image: "/images/campus-grounds.webp",
  },
];

export const statsCards = [
  {
    label: "Students",
    value: "400+",
    subtitle: "Enrolled Students",
    description: "Across six core diploma engineering programs",
  },
  {
    label: "Faculty Members",
    value: "34+",
    subtitle: "Teaching Staff",
    description: "Dedicated lecturers & technical instructors",
  },
  {
    label: "Diploma Programs",
    value: "6",
    subtitle: "Approved Branches",
    description: "AICTE-approved 3-year full-time engineering streams",
  },
  {
    label: "Campus Area",
    value: "6 Acres",
    subtitle: "Campus Grounds",
    description: "Located at Simla Nagar, Hubli (Dharwad dist.)",
  },
];

export const whyChooseCards = [
  {
    number: "01",
    icon: "badge",
    title: "AICTE-Approved & DTE Affiliated",
    description:
      "All six diploma programs are approved by AICTE, New Delhi, and affiliated to the Directorate of Technical Education (DTE), Karnataka.",
    extraDetail:
      "As a government-aided polytechnic, TSIT follows DTE Karnataka's standardized syllabus, semester examinations, and quality norms — ensuring nationally recognized credentials for every graduate.",
  },
  {
    number: "02",
    icon: "faculty",
    title: "Experienced Faculty & Mentorship",
    description:
      "34 dedicated faculty members providing expert academic instruction, practical lab training, and individual student guidance.",
    extraDetail:
      "Our lecturers hold bachelor's and master's degrees in engineering and technology. Many bring industry experience, bridging the gap between classroom theory and real-world practice.",
  },
  {
    number: "03",
    icon: "government",
    title: "Government-Aided & Accessible",
    description:
      "As a government-aided polytechnic under Karnataka DTE, TSIT provides subsidized technical education accessible to all students.",
    extraDetail:
      "With government scholarship support, SC/ST/OBC fee waivers, and state merit awards, Tippu Shaheed is dedicated to making quality technical education reachable for every student in North Karnataka.",
  },
  {
    number: "04",
    icon: "placement",
    title: "Placement Cell & Career Support",
    description:
      "Active Training & Placement Cell coordinating campus recruitment drives, industry workshops, and student skill enhancement.",
    extraDetail:
      "Industry partners from manufacturing, construction, and IT sectors — including firms like L&T, Tata, Siemens, and Crompton Greaves — participate in campus recruitment activities and skill-building initiatives.",
  },
];

