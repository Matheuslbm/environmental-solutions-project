import type { Language } from '../contexts/LanguageContext';
import type { CompanyInfo, ContactPerson, NavigationLink, ServiceItem } from '../types';

interface Translations {
    navigation: NavigationLink[];
    company: CompanyInfo;
    team: ContactPerson[];
    services: ServiceItem[];
    about: {
        title: string;
        text: string;
        imageUrl: string;
        imageAlt: string;
    };
    home: {
        hero: {
            title: string;
            subtitle: string;
        };
        technologies: Array<{
            id: string;
            title: string;
            text: string[];
        }>;
        galleryImages: Array<{
            id: number;
            src: string;
            alt: string;
        }>;
        servicesTitle: string;
    };
    contact: {
        title: string;
        subtitle: string;
        descriptionTitle: string;
        descriptionText: string;
        form: {
            name: string;
            company: string;
            email: string;
            phone: string;
            message: string;
            send: string;
            required: string;
            invalidEmail: string;
        };
        modal: {
            title: string;
            message: string;
            close: string;
        };
    };
    solutions: {
        hero: {
            title: string;
            subtitle: string;
        };
        cta: {
            title: string;
            button: string;
        };
    };
    aboutPage: {
        hero: {
            title: string;
            subtitle: string;
        };
        cta: {
            title: string;
            button: string;
        };
    };
}

export const translations: Record<Language, Translations> = {
    en: {
        navigation: [
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solucoes' },
            { label: 'About', href: '/sobre' },
            { label: 'Contact', href: '/contato' },
        ],
        company: {
            name: "AWFD",
            address: "Rua Guararapes, 548 - Brooklin Paulista",
            zip: "04.561-000 - São Paulo - SP",
            fullAddress: "Rua Guararapes, 548 - Brooklin Paulista, 04.561-000 - São Paulo - SP",
            phones: ["(11) 98578-2437", "(19) 9 9287-2817"],
            emails: ["joao.mariz@awfd.com.br", "rafael@awfd.com.br"]
        },
        team: [
            {
                name: "Antonio Carlos",
                role: "",
                phone: "55 21 998631960",
                email: ""
            },
            {
                name: "Rosimar Ramos",
                role: "",
                phone: "+55 21 995085765",
                email: "rosimar.ramos@gmail.com"
            },
            {
                name: "Dr Mark Adjetey",
                role: "",
                phone: "+1 240 855 1984",
                email: "markadjetey3@gmail.com"
            }
        ],
        services: [
            {
                id: 'domestico',
                title: 'Domestic Wastewater Treatment',
                description: 'Applicable to domestic sewage treatment, AWFD® aeration is highly effective. Depending on technical parameters such as retention time, the treated effluent can become clear and odorless, meeting all regulatory standards.',
                imageAlt: 'Domestic wastewater treatment tank',
                imageUrl: '/images/solutions-image-1.png'
            },
            {
                id: 'chorume',
                title: 'Landfill Leachate Treatment',
                description: 'Leachate is a major challenge for any sanitary landfill. Instead of spending a fortune transporting leachate to chemical-heavy treatment plants, AWFD® provides in-situ treatment, enabling water reuse or discharge into water bodies.',
                imageAlt: 'Landfill leachate treatment',
                imageUrl: '/images/solutions-image-2.png'
            },
            {
                id: 'industrial',
                title: 'Industrial Effluent Treatment',
                description: 'Industrial effluents can contain a wide variety of substances, ranging from oils and greases to soaps and fats. The AWFD® Solution, combined with the power of ECO3®, has demonstrated exceptional results in case studies where it has been implemented.',
                imageAlt: 'Complex industrial installation',
                imageUrl: '/images/solutions-image-3.png'
            },
            {
                id: 'agua',
                title: 'Water Treatment',
                description: 'Water abstraction from wells or surface sources requires treatment to remove impurities and mineral components. The AWFD® system is ideal for water treatment without the need for chemical additives.',
                imageAlt: 'Piping discharging treated water',
                imageUrl: '/images/solutions-image-4.png'
            },
            {
                id: 'nebulizacao',
                title: 'Nebulization (Volume Reduction)',
                description: 'Nebulization can be utilized in effluent treatment systems and delivers significant results in reducing the volume of effluent to be treated, thereby lowering final disposal costs.',
                imageAlt: 'Nebulization treatment tank',
                imageUrl: '/images/solutions-image-5.png'
            },
            {
                id: 'aeracao',
                title: 'Aeration',
                description: 'The aeration performed by the AWFD® injects micro-nano bubbles into the effluent, providing significantly more effective aeration as the air bubbles remain active for much longer. With aeration alone, it is possible to achieve removal rates of up to 85% for parameters such as BOD (Biochemical Oxygen Demand) and COD (Chemical Oxygen Demand).',
                imageAlt: 'Detail of the aeration process',
                imageUrl: '/images/solutions-image-6.png'
            }
        ],
        about: {
            title: "The Creator of the Technology",
            text: "Creator of the AWFD® (Air Waterfall Device) technology and ECO3® cells, João Mariz is a specialist in managing economic and environmental investment projects, as well as resource efficiency. With over 30 years of experience, Mariz has implemented more than 85 industrial and domestic wastewater, leachate, and water treatment plants worldwide, including 35 in Brazil. He also holds a degree in Business Administration and a postgraduate degree in Environmental Management focusing on biotechnology",
            imageUrl: "/images/about-image-1.png",
            imageAlt: "João Mariz presenting the AWFD technology panel"
        },
        home: {
            hero: {
                title: "THE SOLUTION FOR YOUR EFFLUENT TREATMENT",
                subtitle: "WHETHER DOMESTIC, INDUSTRIAL, LEACHATE, OR SPECIALIZED WASTE."
            },
            technologies: [
                {
                    id: 'awfd',
                    title: 'AWFD',
                    text: [
                        "The AWFD® (Air Waterfall Device) is equipment created and patented by our founder, João Mariz.",
                        "Utilizing the Venturi Effect, the AWFD® provides aeration that is distinct from common aerators on the market. By injecting micro-nano bubbles into the effluent, it ensures an aeration density and quality unmatched by any other solution.",
                        "Implemented across multiple sites in Portugal and Brazil, this solution demonstrates that the aeration provided by the AWFD® promotes organic load removal rates of up to 85%."
                    ]
                },
                {
                    id: 'ozone',
                    title: 'OZONE - ECO3',
                    text: [
                        "ECO3® cells transform atmospheric oxygen into ozone.",
                        "Ozone is approximately 30 times more oxidizing and 50 times faster than oxygen in oxidizing organic particles, delivering superior results in the treatment of any effluent.",
                        "The ozone produced by the ECO3® cells is injected into the AWFD® aerators, accelerating the treatment process and reducing energy consumption."
                    ]
                }
            ],
            galleryImages: [
                { id: 1, src: '/images/services-image-1.png', alt: 'Treatment service 1' },
                { id: 2, src: '/images/services-image-2.png', alt: 'Treatment service 2' },
                { id: 3, src: '/images/services-image-3.png', alt: 'Treatment service 3' },
                { id: 4, src: '/images/services-image-4.png', alt: 'Treatment service 4' },
                { id: 5, src: '/images/services-image-5.png', alt: 'Treatment service 5' },
                { id: 6, src: '/images/services-image-6.png', alt: 'Treatment service 6' },
            ],
            servicesTitle: "Some of Our Services"
        },
        contact: {
            title: "WE CAN HELP YOU FIND THE BEST SOLUTION FOR YOUR NEEDS",
            subtitle: "Speak to one of our experts and discover how AWFD® technology can optimize your effluent treatment processes.",
            descriptionTitle: "CONTACT US",
            descriptionText: "Using compact designs, we deliver high-impact solutions with a small footprint, suitable for a wide range of effluents across diverse scenarios.",
            form: {
                name: "Name",
                company: "Company",
                email: "E-mail",
                phone: "Phone",
                message: "Message",
                send: "SEND",
                required: "Required field",
                invalidEmail: "Invalid email"
            },
            modal: {
                title: "Sorry, Message Not Sent!",
                message: "We apologize for the inconvenience. Our contact form is currently experiencing technical difficulties, and we are working to resolve the issue. Thank you for your interest. Please contact our team directly via phone or email listed below.",
                close: "CLOSE"
            }
        },
        solutions: {
            hero: {
                title: "Discover AWFD Applications",
                subtitle: "Solving Your Effluent Challenges"
            },
            cta: {
                title: "Contact one of our professionals.",
                button: "Get in Touch"
            }
        },
        aboutPage: {
            hero: {
                title: "About AWFD",
                subtitle: "Who We Are"
            },
            cta: {
                title: "Contact an Expert",
                button: "CLICK HERE"
            }
        }
    },
    pt: {
        navigation: [
            { label: 'Início', href: '/' },
            { label: 'Soluções', href: '/solucoes' },
            { label: 'Sobre', href: '/sobre' },
            { label: 'Contato', href: '/contato' },
        ],
        company: {
            name: "AWFD",
            address: "Rua Guararapes, 548 - Brooklin Paulista",
            zip: "04.561-000 - São Paulo - SP",
            fullAddress: "Rua Guararapes, 548 - Brooklin Paulista, 04.561-000 - São Paulo - SP",
            phones: ["(11) 98578-2437", "(19) 9 9287-2817"],
            emails: ["joao.mariz@awfd.com.br", "rafael@awfd.com.br"]
        },
        team: [
            {
                name: "Antonio Carlos",
                role: "",
                phone: "55 21 998631960",
                email: ""
            },
            {
                name: "Rosimar Ramos",
                role: "",
                phone: "+55 21 995085765",
                email: "rosimar.ramos@gmail.com"
            },
            {
                name: "Dr Mark Adjetey",
                role: "",
                phone: "+1 240 855 1984",
                email: "markadjetey3@gmail.com"
            }
        ],
        services: [
            {
                id: 'domestico',
                title: 'Tratamento de Efluentes Domésticos',
                description: 'Aplicável ao tratamento de esgoto doméstico, a aeração AWFD® é altamente eficaz. Dependendo de parâmetros técnicos como tempo de retenção, o efluente tratado pode se tornar claro e sem odor, atendendo a todos os padrões regulatórios.',
                imageAlt: 'Tanque de tratamento de efluentes domésticos',
                imageUrl: '/images/solutions-image-1.png'
            },
            {
                id: 'chorume',
                title: 'Tratamento de Chorume de Aterros',
                description: 'O chorume é um grande desafio para qualquer aterro sanitário. Em vez de gastar uma fortuna transportando chorume para estações de tratamento com muitos produtos químicos, o AWFD® fornece tratamento in-situ, permitindo o reúso da água ou descarte em corpos hídricos.',
                imageAlt: 'Tratamento de chorume de aterro',
                imageUrl: '/images/solutions-image-2.png'
            },
            {
                id: 'industrial',
                title: 'Tratamento de Efluentes Industriais',
                description: 'Efluentes industriais podem conter uma grande variedade de substâncias, desde óleos e graxas até sabões e gorduras. A Solução AWFD®, combinada com o poder do ECO3®, tem demonstrado resultados excepcionais em estudos de caso onde foi implementada.',
                imageAlt: 'Instalação industrial complexa',
                imageUrl: '/images/solutions-image-3.png'
            },
            {
                id: 'agua',
                title: 'Tratamento de Água',
                description: 'A captação de água de poços ou fontes superficiais requer tratamento para remover impurezas e componentes minerais. O sistema AWFD® é ideal para tratamento de água sem a necessidade de aditivos químicos.',
                imageAlt: 'Tubulação descarregando água tratada',
                imageUrl: '/images/solutions-image-4.png'
            },
            {
                id: 'nebulizacao',
                title: 'Nebulização (Redução de Volume)',
                description: 'A nebulização pode ser utilizada em sistemas de tratamento de efluentes e oferece resultados significativos na redução do volume de efluente a ser tratado, diminuindo assim os custos de disposição final.',
                imageAlt: 'Tanque de tratamento por nebulização',
                imageUrl: '/images/solutions-image-5.png'
            },
            {
                id: 'aeracao',
                title: 'Aeração',
                description: 'A aeração realizada pelo AWFD® injeta micro-nanobolhas no efluente, proporcionando uma aeração significativamente mais eficaz, pois as bolhas de ar permanecem ativas por muito mais tempo. Somente com a aeração, é possível alcançar taxas de remoção de até 85% para parâmetros como DBO (Demanda Bioquímica de Oxigênio) e DQO (Demanda Química de Oxigênio).',
                imageAlt: 'Detalhe do processo de aeração',
                imageUrl: '/images/solutions-image-6.png'
            }
        ],
        about: {
            title: "O Criador da Tecnologia",
            text: "Criador da tecnologia AWFD® (Air Waterfall Device) e das células ECO3®, João Mariz é especialista em gestão de projetos de investimento econômico e ambiental, além de eficiência de recursos. Com mais de 30 anos de experiência, Mariz implementou mais de 85 plantas de tratamento de efluentes industriais e domésticos, chorume e água em todo o mundo, incluindo 35 no Brasil. Ele também possui graduação em Administração de Empresas e pós-graduação em Gestão Ambiental com foco em biotecnologia.",
            imageUrl: "/images/about-image-1.png",
            imageAlt: "João Mariz apresentando o painel da tecnologia AWFD"
        },
        home: {
            hero: {
                title: "A SOLUÇÃO PARA SEU TRATAMENTO DE EFLUENTES",
                subtitle: "SEJA DOMÉSTICO, INDUSTRIAL, CHORUME OU RESÍDUOS ESPECIALIZADOS."
            },
            technologies: [
                {
                    id: 'awfd',
                    title: 'AWFD',
                    text: [
                        "O AWFD® (Air Waterfall Device) é um equipamento criado e patenteado por nosso fundador, João Mariz.",
                        "Utilizando o Efeito Venturi, o AWFD® fornece uma aeração distinta dos aeradores comuns do mercado. Ao injetar micro-nanobolhas no efluente, garante uma densidade e qualidade de aeração incomparável a qualquer outra solução.",
                        "Implementado em múltiplos locais em Portugal e no Brasil, esta solução demonstra que a aeração fornecida pelo AWFD® promove taxas de remoção de carga orgânica de até 85%."
                    ]
                },
                {
                    id: 'ozone',
                    title: 'OZÔNIO - ECO3',
                    text: [
                        "As células ECO3® transformam oxigênio atmosférico em ozônio.",
                        "O ozônio é aproximadamente 30 vezes mais oxidante e 50 vezes mais rápido que o oxigênio na oxidação de partículas orgânicas, oferecendo resultados superiores no tratamento de qualquer efluente.",
                        "O ozônio produzido pelas células ECO3® é injetado nos aeradores AWFD®, acelerando o processo de tratamento e reduzindo o consumo de energia."
                    ]
                }
            ],
            galleryImages: [
                { id: 1, src: '/images/services-image-1.png', alt: 'Serviço de tratamento 1' },
                { id: 2, src: '/images/services-image-2.png', alt: 'Serviço de tratamento 2' },
                { id: 3, src: '/images/services-image-3.png', alt: 'Serviço de tratamento 3' },
                { id: 4, src: '/images/services-image-4.png', alt: 'Serviço de tratamento 4' },
                { id: 5, src: '/images/services-image-5.png', alt: 'Serviço de tratamento 5' },
                { id: 6, src: '/images/services-image-6.png', alt: 'Serviço de tratamento 6' },
            ],
            servicesTitle: "Alguns dos Nossos Serviços"
        },
        contact: {
            title: "PODEMOS AJUDÁ-LO A ENCONTRAR A MELHOR SOLUÇÃO PARA SUAS NECESSIDADES",
            subtitle: "Fale com um de nossos especialistas e descubra como a tecnologia AWFD® pode otimizar seus processos de tratamento de efluentes.",
            descriptionTitle: "ENTRE EM CONTATO",
            descriptionText: "Usando designs compactos, entregamos soluções de alto impacto com pequena área de instalação, adequadas para uma ampla gama de efluentes em diversos cenários.",
            form: {
                name: "Nome",
                company: "Empresa",
                email: "E-mail",
                phone: "Telefone",
                message: "Mensagem",
                send: "ENVIAR",
                required: "Campo obrigatório",
                invalidEmail: "E-mail inválido"
            },
            modal: {
                title: "Desculpe, Mensagem Não Enviada!",
                message: "Pedimos desculpas pelo inconveniente. Nosso formulário de contato está enfrentando dificuldades técnicas no momento, e estamos trabalhando para resolver o problema. Obrigado pelo seu interesse. Por favor, entre em contato com nossa equipe diretamente pelos telefones ou e-mails listados abaixo.",
                close: "FECHAR"
            }
        },
        solutions: {
            hero: {
                title: "Descubra as Aplicações do AWFD",
                subtitle: "Resolvendo Seus Desafios de Efluentes"
            },
            cta: {
                title: "Entre em contato com um de nossos profissionais.",
                button: "Entrar em Contato"
            }
        },
        aboutPage: {
            hero: {
                title: "Sobre a AWFD",
                subtitle: "Quem Somos"
            },
            cta: {
                title: "Fale com um Especialista",
                button: "CLIQUE AQUI"
            }
        }
    }
};

// Hook helper para facilitar o acesso às traduções
export function getTranslation(lang: Language) {
    return translations[lang];
}
