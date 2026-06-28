export const site = {
  name: 'Psikolojik Danışman Selcan Sarılmış',
  shortName: 'Selcan Sarılmış',
  title: 'Psikolojik Danışman Selcan Sarılmış | Online Psikolojik Danışmanlık',
  description:
    'Online psikolojik danışmanlık ile, bulunduğunuz yerden Zoom üzerinden güvenli ve gizlilik ilkesine uygun görüşmeler. [DÜZENLE]',
  email: 'selcansarilmis11@gmail.com',
  whatsapp: '905373529369',
  whatsappDisplay: '+90 537 352 93 69',
  instagram: 'https://www.instagram.com/selcannsarilmiss?igsh=MWQwNWo5OGNpbnJyeQ==',
  linkedin: 'https://www.linkedin.com/in/selcan-sar%C4%B1lm%C4%B1%C5%9F-359779372/',
  workingHours: 'Hafta içi 09:00–18:00 (Online görüşme, Zoom)', // [DÜZENLE]
};

export function whatsappLink(message = 'Merhaba, online danışmanlık hakkında bilgi almak istiyorum.') {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: '/', label: 'Anasayfa' },
  { href: '/hakkimda/', label: 'Hakkımda' },
  { href: '/danismanlik-alanlarim/', label: 'Danışmanlık Alanlarım' },
  { href: '/blog/', label: 'Blog' },
  { href: '/sss/', label: 'SSS' },
  { href: '/iletisim/', label: 'İletişim' },
];
