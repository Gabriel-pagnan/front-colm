import { DepartmentType } from "../types/departmentType";

export const DepartmentMock: DepartmentType = {
    id: 1,
    name: 'Marketing',
    description: 'Departamento resposável pelo identidade visual.',
    questions: [
        {
            id: 1,
            title: 'Nome e logotipo',
            description: 'É fundamental para que os clientes possam identificar e diferenciar um produto ou serviço. Uma empresa sem logotipo é uma empresa sem identidade, sendo assim impossível de ser reconhecida pelos consumidores.',
            response: 'O nome da empresa e a logo está em sintonia com a proposta da empresa presa e com a forma que quer ser vista no mercado?',
            department_id: 1
        },
        {
            id: 2,
            title: 'Posicionamento no mercado',
            description: 'Aumentar sua credibilidade no mercado; Te diferencia diante da concorrência; Economiza tempo, pois permite um direcionamento assertivo ao encontro do seu público; Evidenciar seus valores e prioridades.',
            response: 'A marca da sua empresa está bem posicionada no mercado conseguindo mostrar os valores, e comportamentos que a mesma carrega, de forma que a diferencie de outras empresas e dos seus concorrentes?',
            department_id: 1
        },
        {
            id: 3,
            title: 'Planejamento de marketing',
            description: 'O plano de marketing nada mais é do que uma ferramenta estratégica gerencial. Ela é utilizada para identificar as forças e fraquezas da empresa e as ameaças e oportunidades que o mercado proporciona. E com isto estimula o empreendedor a estabelecer metas e objetivos.',
            response: 'Sua empresa faz lista dos objetivos para alcançar durante o ano/mês? É definida a prioridade desses objetivos?',
            department_id: 1
        },
        {
            id: 4,
            title: 'Portfólio de produtos e serviços',
            description: 'Um bom portfólio de produtos é fundamental na comunicação entre a indústria e o varejo, que também pode usá-lo como guia de exibição em caso de vendas online. Além de facilitar o trabalho de divulgação, essa ferramenta é uma forma de se compartilhar e padronizar as mensagens de marketing.',
            response: 'Olhando para o seu mix de produtos e serviços, você acredita que ele está bem apresentado? Ele passa a mensagem necessária e desperta o desejo que seu cliente precisa para adquirir a compra?',
            department_id: 1
        },
        {
            id: 5,
            title: 'Desejo de compra',
            description: 'Usar os gatilhos mentais, as informações, um bom visual e criar sentimentos, é fundamental para despertar o desejo de compra nas pessoas. Entretanto, analisar os comportamentos de seus clientes também é importante para fechar negócio! Comece sempre identificando os sinais que o cliente te dá',
            response: 'A estratégia de marketing trás para seus clientes o desejo de compra em adquirir seus produtos?',
            department_id: 1
        },
        {
            id: 6,
            title: 'Diferencial competitivo',
            description: 'Ter um diferencial competitivo coloca um negócio em posição de destaque. Ele insere na mente do consumidor a lembrança sobre os seus produtos e serviços. Essa característica faz com que sua empresa seja preferida pelos consumidores. Logo, fazendo mais vendas que a concorrência.',
            response: 'Conhece bem seus clientes e sabe qual é o diferencial competitivo da sua empresa?',
            department_id: 1
        },
        {
            id: 7,
            title: 'Precificação',
            description: 'Fazer uma precificação adequada é muito importante para manter a saúde financeira da sua empresa, pois colocar um preço alto ou baixo demais afasta os clientes, enquanto colocar um preço mais baixo pode comprometer o fluxo de caixa.',
            response: ' A precificação dos seus produtos está coerente com o diferencial que a empresa trás? Como é definido o preço médio por peça vendida? Como é determinada a política de precificação?',
            department_id: 1
        },
        {
            id: 8,
            title: 'Canais / acessibilidade a produtos e serviços',
            description: 'É através dos canais de venda que o cliente passa a ter contato com a sua empresa. É aí que ocorre a atração do público que ainda não é seu cliente, mas tem intenção de compra do seu produto ou serviço.Eles são muito importantes no cotidiano de uma empresa e fundamentais para alavancar as vendas do seu negócio.',
            response: 'Quem não é visto não é lembrado. Os canais de venda são suficientes e fáceis para que os clientes possam encontrar o produto e serviço desejado?',
            department_id: 1
        },
        {
            id: 9,
            title: 'Fidelização de clientes',
            description: 'Por meio da fidelização de clientes, você pode reduzir, pouco a pouco, esse custo de aquisição e a duração do seu ciclo de vendas. Esse público, à medida que se aproxima da sua marca, tende a fechar negócio por conta própria com mais rapidez, diminuindo bastante seus custos no médio e longo prazo',
            response: 'Conhece bem a necessidade de seus clientes? A empresa faz pesquisa de conversão de clientes? E isso é medido em diversos canais de comunicação?',
            department_id: 1
        },
        {
            id: 10,
            title: 'Mídias digitais',
            description: 'Essa forma de trabalho de gerar conteúdo, tem como principal função em criar um relacionamento com os usuários, principalmente quando falamos de redes sociais. Mídia Digital tem um enorme leque de funcionalidades, ferramentas e técnicas para divulgação de empresas ou marcas.',
            response: 'A empresa está em mídias digitais? É feito um cronograma de conteúdo que consiga comunicar com o seu público? Acredita que explora essa ferramenta de forma suficiente?',
            department_id: 1
        },
        {
            id: 11,
            title: 'Mídias tradicionais',
            description: 'A mídia tradicional segue relevante para a publicidade de muitas marcas. Uma das principais vantagens da mídia tradicional no Brasil nesse aspecto continua sendo a audiência. Um anúncio no chamado “horário nobre” da televisão, por exemplo, pode alcançar milhares, e até milhões, de pessoas.',
            response: 'A empresa se encontra em algumas plataformas de mídias como rádio, Jornal, outdoor e etc? É feito uma pesquisa para medir a conversão de clientes ou de visibilidade?',
            department_id: 1
        },
        {
            id: 12,
            title: 'Mensuração do resultado de marketing',
            description: 'Mensuração de resultados é uma ação realizada pelas empresas para identificar o desempenho das estratégias colocadas em prática, de acordo com os objetivos traçados. Na área de Marketing e Vendas, é um passo fundamental para identificar quais ações trazem os melhores resultados',
            response: 'É definido métricas dentro do marketing? É identificado os objetivos da empresa diante de metas definidas? É utilizado ferramentas de medição?',
            department_id: 1
        },
    ]
}