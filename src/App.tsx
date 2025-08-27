import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Linkedin, Code, Database, Server, Globe, User, GraduationCap, Briefcase, Star, Github, ExternalLink, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    frontend: [
      { name: 'HTML5/CSS3', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 80 },
      { name: 'Bootstrap', level: 85 }
    ],
    backend: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 70 },
      { name: 'Python', level: 65 },
      { name: 'API REST', level: 75 }
    ],
    database: [
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 70 },
      { name: 'SQL', level: 85 }
    ],
    tools: [
      { name: 'Git/GitHub', level: 80 },
      { name: 'WordPress', level: 75 }
    ]
  };

  const languages = [
    { name: 'Arabe', level: 100, description: 'Langue maternelle' },
    { name: 'Amazighe', level: 90, description: 'Courant' },
    { name: 'Français', level: 80, description: 'Bien' },
    { name: 'Anglais', level: 60, description: 'Niveau moyen' },
    { name: 'Espagnol', level: 30, description: 'Débutant' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Redouane BENICHOU
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: 'home', label: 'Accueil' },
                  { id: 'about', label: 'À propos' },
                  { id: 'education', label: 'Formation' },
                  { id: 'experience', label: 'Expérience' },
                  { id: 'skills', label: 'Compétences' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: 'Accueil' },
                { id: 'about', label: 'À propos' },
                { id: 'education', label: 'Formation' },
                { id: 'experience', label: 'Expérience' },
                { id: 'skills', label: 'Compétences' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <User size={48} className="text-blue-600" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4 animate-slide-in-left">
              Redouane <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">BENICHOU</span>
            </h1>
            
            <div className="text-xl sm:text-2xl text-gray-600 mb-8 animate-slide-in-right">
              <span className="typewriter">Développeur Full Stack JavaScript</span>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-300">
              Passionné par le développement web, je transforme vos idées en solutions digitales innovantes. 
              Spécialisé en technologies JavaScript modernes avec une approche centrée utilisateur.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-500">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Me Contacter
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                En Savoir Plus
              </button>
            </div>
            
            <div className="flex justify-center space-x-6 animate-fade-in-up delay-700">
              <a href="mailto:redouanebenichou02@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <Mail size={24} />
              </a>
              <a href="tel:0602393564" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <Phone size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-600" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">À Propos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Profil Professionnel</h3>
              <p className="text-gray-700 leading-relaxed">
                Diplômé en Économie et Gestion, je me suis reconverti dans le développement web avec une spécialisation 
                en technologies JavaScript. Actuellement en formation Full Stack chez Azicode 62, je maîtrise les 
                technologies modernes du web.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Fort d'une expérience diversifiée incluant l'éducation spécialisée et la participation à des projets 
                d'envergure nationale, j'apporte une perspective unique alliant compétences techniques et humaines.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">2+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">10+</div>
                  <div className="text-sm text-gray-600">Projets réalisés</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Informations Personnelles</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-blue-600" />
                  <span className="text-gray-700">Azilal (22000), Maroc</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-blue-600" />
                  <span className="text-gray-700">0602-393564</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-blue-600" />
                  <span className="text-gray-700">redouanebenichou02@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin size={20} className="text-blue-600" />
                  <span className="text-gray-700">@Redouane Benichou</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Compétences Personnelles</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Organisation',
                    'Travail en équipe',
                    'Responsabilité',
                    'Gestion du temps'
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Star size={16} className="text-yellow-500" />
                      <span className="text-gray-700 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Formation & Diplômes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-indigo-600"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: '2025',
                  title: 'Formation Full Stack JavaScript',
                  institution: 'Azicode 62, Azilal',
                  description: 'Formation intensive en développement web moderne',
                  status: 'En cours',
                  type: 'primary'
                },
                {
                  year: '2025',
                  title: 'Certificats SATR - Tuwaiq Academy',
                  institution: 'Plateforme en ligne',
                  description: 'HTML, CSS, Bootstrap, DOM, JavaScript, Node.js',
                  status: 'Mai 2025',
                  type: 'secondary'
                },
                {
                  year: '2024',
                  title: 'Soft Skills et Techniques de Recherche d\'Emploi',
                  institution: 'Association AJMIL – Azilal',
                  description: 'Développement des compétences comportementales',
                  status: 'Décembre 2024',
                  type: 'accent'
                },
                {
                  year: '2022',
                  title: 'Licence en Économie et Gestion',
                  institution: 'Faculté Polydisciplinaire de Beni Mellal',
                  description: 'Formation en sciences économiques et gestion',
                  status: 'Diplômé',
                  type: 'primary'
                },
                {
                  year: '2021',
                  title: 'Baccalauréat Libre - Sciences Physiques',
                  institution: 'Azourki – Azilal',
                  description: 'Spécialisation en sciences physiques',
                  status: 'Diplômé',
                  type: 'secondary'
                }
              ].map((edu, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          edu.type === 'primary' ? 'bg-blue-100 text-blue-600' :
                          edu.type === 'secondary' ? 'bg-green-100 text-green-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          {edu.status}
                        </span>
                        <span className="text-2xl font-bold text-gray-300">{edu.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{edu.title}</h3>
                      <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                      <p className="text-gray-600 text-sm">{edu.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className={`w-4 h-4 rounded-full border-4 border-white ${
                      edu.type === 'primary' ? 'bg-blue-600' :
                      edu.type === 'secondary' ? 'bg-green-600' :
                      'bg-purple-600'
                    } shadow-lg`}></div>
                  </div>
                  
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Expérience Professionnelle</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid gap-8">
            {[
              {
                period: 'Septembre 2024',
                title: 'Participation au Recensement Général de la Population',
                company: 'Haut-Commissariat au Plan – Ait Attab',
                description: 'Collecte de données démographiques dans le cadre du recensement national',
                type: 'contract'
              },
              {
                period: 'Nov. 2023 - Juin 2024',
                title: 'Professeur (heures supplémentaires)',
                company: 'Ait Attab',
                description: 'Enseignement et accompagnement pédagogique',
                type: 'education'
              },
              {
                period: 'Sept. 2023 - Août 2024',
                title: 'Éducateur spécialisé',
                company: 'Centre pour personnes handicapées – Ait Attab',
                description: 'Accueil et prise en charge de personnes en situation de handicap',
                type: 'social'
              },
              {
                period: 'Juin 2023 - Juin 2024',
                title: 'Programme national de réadaptation professionnelle',
                company: 'Centre pour personnes handicapées – Azilal',
                description: 'Accompagnement dans la réinsertion professionnelle',
                type: 'social'
              },
              {
                period: 'Sept. - Oct. 2021',
                title: 'Stage en Comptabilité et Gestion',
                company: 'Cabinet Fiduciaire ATADAMOUN – Azilal',
                description: 'Application des connaissances en gestion et comptabilité',
                type: 'internship'
              }
            ].map((exp, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Briefcase size={20} className="text-blue-600 mr-2" />
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    </div>
                    <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                  <div className="mt-2 md:mt-0 md:ml-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      exp.type === 'contract' ? 'bg-green-100 text-green-600' :
                      exp.type === 'education' ? 'bg-blue-100 text-blue-600' :
                      exp.type === 'social' ? 'bg-purple-100 text-purple-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Compétences Techniques</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { title: 'Frontend', icon: Globe, skills: skills.frontend, color: 'blue' },
              { title: 'Backend', icon: Server, skills: skills.backend, color: 'green' },
              { title: 'Base de données', icon: Database, skills: skills.database, color: 'purple' },
              { title: 'Outils', icon: Code, skills: skills.tools, color: 'orange' }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-6">
                  <category.icon size={24} className={`text-${category.color}-600 mr-3`} />
                  <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r from-${category.color}-400 to-${category.color}-600 h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Languages */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Langues</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {languages.map((lang, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-gray-200"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - lang.level / 100)}`}
                        className="text-blue-600 transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-semibold text-gray-700">{lang.level}%</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900">{lang.name}</h4>
                  <p className="text-sm text-gray-600">{lang.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prêt à collaborer sur votre prochain projet ? N'hésitez pas à me contacter !
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900">Restons en contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:redouanebenichou02@gmail.com" className="text-blue-600 hover:text-blue-700">
                      redouanebenichou02@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Téléphone</p>
                    <a href="tel:0602393564" className="text-green-600 hover:text-green-700">
                      0602-393564
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <MapPin size={24} className="text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Localisation</p>
                    <p className="text-red-600">Azilal (22000), Maroc</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Linkedin size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">LinkedIn</p>
                    <a href="#" className="text-blue-600 hover:text-blue-700">
                      @Redouane Benichou
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Sujet de votre message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Redouane BENICHOU</h3>
            <p className="text-gray-400 mb-6">Développeur Full Stack JavaScript</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a href="mailto:redouanebenichou02@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Mail size={24} />
              </a>
              <a href="tel:0602393564" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Phone size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={24} />
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-400 text-sm">
                © 2025 Redouane BENICHOU. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;