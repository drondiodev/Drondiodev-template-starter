type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

const siteConfig: SiteConfig = {
  name: 'Nom du projet',
  description: 'Description de votre projet',
  url: 'adresse_web_du_projet',
  ogImage: 'adresse_web_du_projet/og',
  links: {
    twitter: 'lien de votre compte twitter',
    github: 'lien de votre compte github',
  },
}

export default siteConfig
