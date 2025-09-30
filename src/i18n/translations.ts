export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    services: string;
    experience: string;
    certificates: string;
    works: string;
    blog: string;
    contact: string;
  };
  
  // Common
  common: {
    readMore: string;
    viewDetails: string;
    close: string;
    loading: string;
    error: string;
    success: string;
    cancel: string;
    save: string;
    edit: string;
    delete: string;
    back: string;
    next: string;
    previous: string;
    search: string;
    filter: string;
    all: string;
    none: string;
    select: string;
    download: string;
    share: string;
    copy: string;
  };

  // Home page
  home: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    scrollDown: string;
  };

  // About page
  about: {
    title: string;
    subtitle: string;
    description: string;
    skills: string;
    experience: string;
    education: string;
    languages: string;
    hobbies: string;
  };

  // Services page
  services: {
    title: string;
    subtitle: string;
    description: string;
    webDevelopment: {
      title: string;
      description: string;
    };
    mobileDevelopment: {
      title: string;
      description: string;
    };
    consulting: {
      title: string;
      description: string;
    };
    maintenance: {
      title: string;
      description: string;
    };
  };

  // Experience page
  experience: {
    title: string;
    subtitle: string;
    current: string;
    location: string;
    duration: string;
    achievements: string;
    technologies: string;
  };

  // Certificates page
  certificates: {
    title: string;
    subtitle: string;
    description: string;
    filters: {
      all: string;
      category: string;
      type: string;
      skills: string;
    };
    modal: {
      title: string;
      issuer: string;
      date: string;
      credentialId: string;
      duration: string;
      studyHours: string;
      contentCovered: string;
      learningOutcomes: string;
      skills: string;
      downloadPdf: string;
      viewCredential: string;
    };
  };

  // Works page
  works: {
    title: string;
    subtitle: string;
    description: string;
    filters: {
      all: string;
      category: string;
      technology: string;
    };
    viewProject: string;
    viewCode: string;
    liveDemo: string;
  };

  // Blog page
  blog: {
    title: string;
    subtitle: string;
    description: string;
    readMore: string;
    readTime: string;
    publishedOn: string;
    tags: string;
    noPosts: string;
  };

  // Contact page
  contact: {
    title: string;
    subtitle: string;
    description: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
    methods: {
      email: string;
      phone: string;
      address: string;
      social: string;
    };
  };

  // Footer
  footer: {
    copyright: string;
    rights: string;
  };
}

export const translations: Record<string, Translations> = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      services: "Servicios",
      experience: "Experiencia",
      certificates: "Certificados",
      works: "Proyectos",
      blog: "Blog",
      contact: "Contacto"
    },
    common: {
      readMore: "Leer más",
      viewDetails: "Ver detalles",
      close: "Cerrar",
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
      cancel: "Cancelar",
      save: "Guardar",
      edit: "Editar",
      delete: "Eliminar",
      back: "Atrás",
      next: "Siguiente",
      previous: "Anterior",
      search: "Buscar",
      filter: "Filtrar",
      all: "Todos",
      none: "Ninguno",
      select: "Seleccionar",
      download: "Descargar",
      share: "Compartir",
      copy: "Copiar"
    },
    home: {
      title: "Soufiane Raki",
      subtitle: "Full Stack Developer",
      description: "Desarrollador apasionado por crear experiencias digitales excepcionales. Especializado en tecnologías modernas y soluciones innovadoras.",
      cta: "Ver mi trabajo",
      scrollDown: "Desplazarse hacia abajo"
    },
    about: {
      title: "Sobre mí",
      subtitle: "Conoce mi historia y experiencia",
      description: "Soy un desarrollador full stack con más de 2 años de experiencia creando aplicaciones web y móviles modernas. Me apasiona la tecnología y siempre estoy aprendiendo nuevas herramientas y frameworks.",
      skills: "Habilidades",
      experience: "Experiencia",
      education: "Educación",
      languages: "Idiomas",
      hobbies: "Aficiones"
    },
    services: {
      title: "Servicios",
      subtitle: "Lo que puedo hacer por ti",
      description: "Ofrezco servicios completos de desarrollo web y móvil, desde la concepción hasta el despliegue.",
      webDevelopment: {
        title: "Desarrollo Web",
        description: "Aplicaciones web modernas y responsivas usando las últimas tecnologías."
      },
      mobileDevelopment: {
        title: "Desarrollo Móvil",
        description: "Aplicaciones móviles nativas e híbridas para iOS y Android."
      },
      consulting: {
        title: "Consultoría",
        description: "Asesoramiento técnico para optimizar tus proyectos existentes."
      },
      maintenance: {
        title: "Mantenimiento",
        description: "Soporte continuo y actualizaciones para mantener tu aplicación funcionando perfectamente."
      }
    },
    experience: {
      title: "Experiencia",
      subtitle: "Mi trayectoria profesional",
      current: "Actual",
      location: "Ubicación",
      duration: "Duración",
      achievements: "Logros",
      technologies: "Tecnologías"
    },
    certificates: {
      title: "Certificados",
      subtitle: "Mi formación y certificaciones",
      description: "Certificaciones profesionales que validan mis conocimientos y habilidades técnicas.",
      filters: {
        all: "Todos",
        category: "Categoría",
        type: "Tipo",
        skills: "Habilidades"
      },
      modal: {
        title: "Detalles del Certificado",
        issuer: "Emisor",
        date: "Fecha",
        credentialId: "ID de Credencial",
        duration: "Duración",
        studyHours: "Horas de Estudio",
        contentCovered: "Contenido Cubierto",
        learningOutcomes: "Resultados de Aprendizaje",
        skills: "Habilidades",
        downloadPdf: "Descargar PDF",
        viewCredential: "Ver Credencial"
      }
    },
    works: {
      title: "Proyectos",
      subtitle: "Mi trabajo reciente",
      description: "Una selección de proyectos que demuestran mis habilidades y experiencia.",
      filters: {
        all: "Todos",
        category: "Categoría",
        technology: "Tecnología"
      },
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
      liveDemo: "Demo en Vivo"
    },
    blog: {
      title: "Blog",
      subtitle: "Artículos y tutoriales",
      description: "Comparto mi conocimiento y experiencia a través de artículos técnicos y tutoriales.",
      readMore: "Leer más",
      readTime: "min de lectura",
      publishedOn: "Publicado el",
      tags: "Etiquetas",
      noPosts: "No hay artículos disponibles"
    },
    contact: {
      title: "Contacto",
      subtitle: "Hablemos de tu proyecto",
      description: "¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ayudarte a hacerlo realidad.",
      form: {
        name: "Nombre",
        email: "Email",
        subject: "Asunto",
        message: "Mensaje",
        send: "Enviar",
        sending: "Enviando...",
        success: "¡Mensaje enviado correctamente!",
        error: "Error al enviar el mensaje"
      },
      methods: {
        email: "Email",
        phone: "Teléfono",
        address: "Dirección",
        social: "Redes Sociales"
      }
    },
    footer: {
      copyright: "© 2025 Soufiane Raki",
      rights: "Todos los derechos reservados"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      experience: "Experience",
      certificates: "Certificates",
      works: "Works",
      blog: "Blog",
      contact: "Contact"
    },
    common: {
      readMore: "Read more",
      viewDetails: "View details",
      close: "Close",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      cancel: "Cancel",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      back: "Back",
      next: "Next",
      previous: "Previous",
      search: "Search",
      filter: "Filter",
      all: "All",
      none: "None",
      select: "Select",
      download: "Download",
      share: "Share",
      copy: "Copy"
    },
    home: {
      title: "Soufiane Raki",
      subtitle: "Full Stack Developer",
      description: "Passionate developer creating exceptional digital experiences. Specialized in modern technologies and innovative solutions.",
      cta: "View my work",
      scrollDown: "Scroll down"
    },
    about: {
      title: "About me",
      subtitle: "Get to know my story and experience",
      description: "I'm a full stack developer with over 2 years of experience creating modern web and mobile applications. I'm passionate about technology and always learning new tools and frameworks.",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      languages: "Languages",
      hobbies: "Hobbies"
    },
    services: {
      title: "Services",
      subtitle: "What I can do for you",
      description: "I offer complete web and mobile development services, from conception to deployment.",
      webDevelopment: {
        title: "Web Development",
        description: "Modern and responsive web applications using the latest technologies."
      },
      mobileDevelopment: {
        title: "Mobile Development",
        description: "Native and hybrid mobile applications for iOS and Android."
      },
      consulting: {
        title: "Consulting",
        description: "Technical advice to optimize your existing projects."
      },
      maintenance: {
        title: "Maintenance",
        description: "Continuous support and updates to keep your application running perfectly."
      }
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey",
      current: "Current",
      location: "Location",
      duration: "Duration",
      achievements: "Achievements",
      technologies: "Technologies"
    },
    certificates: {
      title: "Certificates",
      subtitle: "My training and certifications",
      description: "Professional certifications that validate my knowledge and technical skills.",
      filters: {
        all: "All",
        category: "Category",
        type: "Type",
        skills: "Skills"
      },
      modal: {
        title: "Certificate Details",
        issuer: "Issuer",
        date: "Date",
        credentialId: "Credential ID",
        duration: "Duration",
        studyHours: "Study Hours",
        contentCovered: "Content Covered",
        learningOutcomes: "Learning Outcomes",
        skills: "Skills",
        downloadPdf: "Download PDF",
        viewCredential: "View Credential"
      }
    },
    works: {
      title: "Works",
      subtitle: "My recent work",
      description: "A selection of projects that demonstrate my skills and experience.",
      filters: {
        all: "All",
        category: "Category",
        technology: "Technology"
      },
      viewProject: "View Project",
      viewCode: "View Code",
      liveDemo: "Live Demo"
    },
    blog: {
      title: "Blog",
      subtitle: "Articles and tutorials",
      description: "I share my knowledge and experience through technical articles and tutorials.",
      readMore: "Read more",
      readTime: "min read",
      publishedOn: "Published on",
      tags: "Tags",
      noPosts: "No articles available"
    },
    contact: {
      title: "Contact",
      subtitle: "Let's talk about your project",
      description: "Do you have a project in mind? I'd love to hear about it and help you make it a reality.",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Error sending message"
      },
      methods: {
        email: "Email",
        phone: "Phone",
        address: "Address",
        social: "Social Media"
      }
    },
    footer: {
      copyright: "© 2025 Soufiane Raki",
      rights: "All rights reserved"
    }
  }
};
