import { profile } from '@/content/profile';

export const scheduleInterviewHref =
    `mailto:${profile.email}?subject=${encodeURIComponent('Interview request')}` +
    `&body=${encodeURIComponent(`Hi ${profile.name},\n\nI'd like to schedule an interview.`)}`;
