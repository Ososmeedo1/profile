import { Youtube, Github, Linkedin, Mail, Smartphone } from 'lucide-react';

export const socials = [
  {
    id: 'linkedin',
    nameEn: 'LinkedIn',
    nameAr: 'LinkedIn',
    url: 'https://www.linkedin.com/in/osamaelgamal27',
    icon: Linkedin,
    color: 'text-blue-600 dark:text-blue-400',
    display: 'osamaelgamal27',
    ctaEn: 'Connect on LinkedIn',
    ctaAr: 'تواصل على لينكد إن'
  },
  {
    id: 'github',
    nameEn: 'GitHub',
    nameAr: 'GitHub',
    url: 'https://github.com/Ososmeedo1',
    icon: Github,
    color: 'text-zinc-900 dark:text-zinc-100',
    display: 'github.com/ososmeedo1',
    ctaEn: 'Follow on GitHub',
    ctaAr: 'تابعني على جيت هب'
  },
  {
    id: 'email',
    nameEn: 'Email',
    nameAr: 'البريد الإلكتروني',
    url: 'mailto:ososmeedo@gmail.com',
    icon: Mail,
    color: 'text-red-500 dark:text-red-400',
    display: 'ososmeedo@gmail.com',
    ctaEn: 'Send an Email',
    ctaAr: 'أرسل بريداً إلكترونياً'
  },
  {
    id: 'whatsapp',
    nameEn: 'WhatsApp',
    nameAr: 'واتساب',
    url: 'https://wa.me/01060683508',
    icon: Smartphone,
    color: 'text-green-500 dark:text-green-400',
    display: '01060683508',
    ctaEn: 'Chat on WhatsApp',
    ctaAr: 'راسلني على واتساب'
  },
  {
    id: 'youtube',
    nameEn: 'YouTube',
    nameAr: 'يوتيوب',
    url: 'https://www.youtube.com/@code2210',
    icon: Youtube,
    color: 'text-red-600 dark:text-red-500',
    display: '@osama-code',
    ctaEn: 'Subscribe on YouTube',
    ctaAr: 'اشترك في القناة'
  }
];
