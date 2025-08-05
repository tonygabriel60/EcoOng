import type { ONG } from '../types';

export const initialONGs: ONG[] = [
  {
    id: '1',
    nome: 'WWF Brasil',
    descricao: 'Organização mundial de conservação da natureza que trabalha para preservar a biodiversidade e reduzir o impacto humano no meio ambiente.',
    imagemUrl: 'https://d3nehc6yl9qzo4.cloudfront.net/img/original/wwf_logo_large_rgb_72dpi.jpg',
    valorMeta: 50000,
    valorArrecadado: 32000
  },
  {
    id: '2',
    nome: 'Greenpeace Brasil',
    descricao: 'Organização ambientalista que atua na defesa do meio ambiente e na promoção da paz, inspirando as pessoas a mudarem atitudes.',
    imagemUrl: 'https://captadores.org.br/wp-content/uploads/2016/05/Greenpeace.jpg',
    valorMeta: 75000,
    valorArrecadado: 45000
  },
  {
    id: '3',
    nome: 'SOS Mata Atlântica',
    descricao: 'ONG brasileira que desenvolve projetos de conservação da Mata Atlântica, educação ambiental e políticas públicas.',
    imagemUrl: 'https://sosma.org.br/storage/media/An0jjQaRxVLCP5RzejU2ycSPAnNP37VbNxwEBGxG.png',
    valorMeta: 30000,
    valorArrecadado: 30000
  },
  {
    id: '4',
    nome: 'Instituto Socioambiental',
    descricao: 'Organização que defende bens e direitos sociais, coletivos e difusos relativos ao meio ambiente, ao patrimônio cultural e aos direitos humanos.',
    imagemUrl: 'https://i1.wp.com/ipam.org.br/wp-content/uploads/2025/04/logo-redes_1.png',
    valorMeta: 40000,
    valorArrecadado: 15000
  }
];

export const loadONGs = (): ONG[] => {
  const stored = localStorage.getItem('ecoong-ongs');
  if (stored) {
    return JSON.parse(stored);
  }
  localStorage.setItem('ecoong-ongs', JSON.stringify(initialONGs));
  return initialONGs;
};

export const saveONGs = (ongs: ONG[]): void => {
  localStorage.setItem('ecoong-ongs', JSON.stringify(ongs));
};