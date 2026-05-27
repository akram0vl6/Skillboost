// shared/data/categoryData.js

export const DATA_STRUCTURE = {
  "Frontend": {
    languages: {
      "JavaScript": {
        frameworks: ["React", "Vue.js", "Angular", "jQuery"]
      },
      "TypeScript": {
        frameworks: ["React", "Vue.js", "Angular", "Next.js"]
      }
    }
  },
  "Backend": {
    languages: {
      "Node.js": {
        frameworks: ["Express", "NestJS", "Koa", "Fastify"]
      },
      "Python": {
        frameworks: ["Django", "FastAPI", "Flask", "Pyramid"]
      },
      "Go": {
        frameworks: ["Gin", "Echo", "Fiber", "Chi"]
      },
      "Java": {
        frameworks: ["Spring", "Hibernate", "Micronaut", "Quarkus"]
      }
    }
  },
  "Fullstack": {
    languages: {
      "JavaScript": {
        frameworks: ["Next.js", "MERN", "MEVN", "SvelteKit"]
      },
      "TypeScript": {
        frameworks: ["Next.js", "Nuxt.js", "Remix", "tRPC"]
      }
    }
  }
};

export const LEVELS = ["Стажер", "Junior", "Middle", "Senior"];

// Вспомогательная функция для получения языков из категории
export const getLanguagesForCategory = (category) => {
  if (!category || !DATA_STRUCTURE[category]) return [];
  return Object.keys(DATA_STRUCTURE[category].languages);
};

// Вспомогательная функция для получения фреймворков для языка
export const getFrameworksForLanguage = (category, language) => {
  if (!category || !language || !DATA_STRUCTURE[category]) return [];
  return DATA_STRUCTURE[category].languages[language]?.frameworks || [];
};