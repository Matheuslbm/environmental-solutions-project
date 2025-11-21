import type { CompanyInfo, ContactPerson, NavigationLink, ServiceItem } from '../types';

export const NAVIGATION: NavigationLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Soluções', href: '/solucoes' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
];

export const COMPANY: CompanyInfo = {
    name: "AWFD",
    address: "Rua Guararapes, 548 - Brooklin Paulista",
    zip: "04.561-000 - São Paulo - SP",
    fullAddress: "Rua Guararapes, 548 - Brooklin Paulista, 04.561-000 - São Paulo - SP",
    phones: ["(11) 98578-2437", "(19) 9 9287-2817"],
    emails: ["joao.mariz@awfd.com.br", "rafael@awfd.com.br"]
};

export const TEAM: ContactPerson[] = [
    {
        name: "João Mariz",
        role: "Sócio-diretor",
        phone: "(11) 98578-2437",
        email: "joao.mariz@awfd.com.br"
    },
    {
        name: "José Rafael Alvim",
        role: "Responsável Técnico",
        phone: "(19) 9 9287-2817",
        email: "rafael@awfd.com.br"
    }
];

export const SERVICES: ServiceItem[] = [
    {
        id: 'domestico',
        title: 'Tratamento de Efluentes Domésticos',
        description: 'Aplicável para o tratamento de esgoto doméstico, a aeração com AWFD® é muito efetiva. O efluente após tratamento, de acordo com características técnicas do tratamento, como tempo de detenção, pode resultar em uma água límpida e inodora, atendendo a todos os parâmetros legais.',
        imageAlt: 'Tanque de tratamento de efluentes domésticos',
        imageUrl: '/images/solutions-image-1.png'
    },
    {
        id: 'chorume',
        title: 'Tratamento de Chorume de Aterros Sanitários',
        description: 'O chorume é um grande problema para qualquer aterro sanitário. Ao invés de gastar fortunas para enviar o chorume para uma estação de tratamento repleta de químicos, a AWFD® proporciona um tratamento in loco, possibilitando o reaproveitamento da água ou lançamento em corpo hídrico.',
        imageAlt: 'Tratamento de chorume em aterro',
        imageUrl: '/images/solutions-image-2.png'
    },
    {
        id: 'industrial',
        title: 'Tratamento de Efluentes Industriais',
        description: 'Efluentes industriais podem conter os mais variados tipos de substâncias, desde óleos e graxas, a sabão e gorduras. A Solução AWFD®, somada à força do ECO3®, mostrou-se com grandes resultados em "cases" em que foram implantadas.',
        imageAlt: 'Instalação industrial complexa',
        imageUrl: '/images/solutions-image-3.png'
    },
    {
        id: 'agua',
        title: 'Tratamento de Água',
        description: 'A captação de água de poços ou cursos d\'água superficiais necessitam de tratamento para remoção de impurezas e componentes minerais. O sistema de tratamento AWFD® é ideal para a utilização de água sem a necessidade de adição de produtos químicos.',
        imageAlt: 'Tubulação despejando água tratada',
        imageUrl: '/images/solutions-image-4.png'
    },
    {
        id: 'nebulizacao',
        title: 'Nebulização',
        description: 'A nebulização pode ser utilizada nos sistemas de tratamento de efluentes e tem grande resultado na redução do volume de efluente a ser tratado, diminuindo custos com disposição final desses efluentes.',
        imageAlt: 'Tanque de tratamento com nebulização',
        imageUrl: '/images/solutions-image-5.png'
    },
    {
        id: 'aeracao',
        title: 'Aeração',
        description: 'A aeração realizada pelo AWFD® injeta micro-nano bolhas no efluente, o que proporciona uma aeração muito mais efetiva, uma vez que as bolhas de ar permanecem e agem por muito mais tempo no efluente. Apenas com a aeração, é possível obter ganhos de remoção de até 85% de parâmetros como DBO e DQO.',
        imageAlt: 'Detalhe do processo de aeração',
        imageUrl: '/images/solutions-image-6.png'
    }
];

export const ABOUT_CONTENT = {
    title: "O Criador da Tecnologia",
    text: "Criador da Tecnologia AWFD® (Air Waterfall Device) e das células ECO3®, João Mariz é especialista em gestão de projetos de investimento econômico, ambiental e economia de recursos. Com mais de 30 anos de experiência, Mariz implementou mais de 85 projetos de estações de tratamento de esgoto industrial, doméstico, de chorume e de água pelo mundo, sendo 35 delas no Brasil. Também possui formação em Gestão de Empresas e pós-graduação em Gestão Ambiental com foco em biotecnologia.",
    imageUrl: "/images/about-image-1.png",
    imageAlt: "João Mariz apresentando o painel da tecnologia AWFD"
};

export const HOME_CONTENT = {
    hero: {
        title: "A SOLUÇÃO PARA O TRATAMENTO DE SEU EFLUENTE",
        subtitle: "SEJA ELE DOMÉSTICO, INDUSTRIAL, CHORUME OU DOS MAIS DIFERENTES TIPOS"
    },
    technologies: [
        {
            id: 'awfd',
            title: 'AWFD',
            text: [
                "O AWFD® (Air Waterfall Device) é um equipamento criado e patenteado pelo nosso fundador, João Mariz.",
                "Com sua propriedade de Efeito Venturi, o AWFD® proporciona uma aeração totalmente diferente de outros aeradores mais comuns no mercado, injetando micro-nano bolhas no efluente a ser tratado, garantindo uma concentração e qualidade de aeração como nenhuma outra solução.",
                "Esta solução implementada em diversos sites em Portugal e no Brasil, mostra que a aeração proporcionada pelo AWFD® promove remoções de cargas orgânicas de até 85%."
            ]
        },
        {
            id: 'ozonio',
            title: 'OZÔNIO - ECO3',
            text: [
                "ECO3® são células que transformam o oxigênio atmosférico em ozônio.",
                "O ozônio é cerca de 30 vezes mais oxidante e 50 vezes mais rápido do que o oxigênio na oxidação de partículas orgânicas, o que traz um excelente ganho no tratamento de quaisquer efluentes.",
                "O ozônio produzido pelas células ECO3® é injetado nos aeradores AWFD®, acelerando o tratamento e reduzindo o consumo de energia elétrica."
            ]
        }
    ],
    galleryImages: [
        { id: 1, src: '/images/services-image-1.png', alt: 'Serviço de Tratamento 1' },
        { id: 2, src: '/images/services-image-2.png', alt: 'Serviço de Tratamento 2' },
        { id: 3, src: '/images/services-image-3.png', alt: 'Serviço de Tratamento 3' },
        { id: 4, src: '/images/services-image-4.png', alt: 'Serviço de Tratamento 4' },
        { id: 5, src: '/images/services-image-5.png', alt: 'Serviço de Tratamento 5' },
        { id: 6, src: '/images/services-image-6.png', alt: 'Serviço de Tratamento 6' },
    ]
};

export const CONTACT_PAGE = {
    title: "PODEMOS TE AJUDAR COM A MELHOR SOLUÇÃO PARA SEU CASO",
    subtitle: "Chame um de nossos profissionais",
    descriptionTitle: "FALE CONOSCO",
    descriptionText: "Com soluções compactas, podemos implementar grandes soluções com pouco espaço, sendo aplicável para os mais diversos efluentes, nas mais diversas situações."
};