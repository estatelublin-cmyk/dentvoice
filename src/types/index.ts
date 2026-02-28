export interface Clinic {
  id: string;
  name: string;
  owner_email: string;
  owner_user_id: string;
  phone: string | null;
  address: string | null;
  city: string | null;
  postal_code: string | null;
  nip: string | null;
  working_hours: WorkingHours;
  created_at: string;
  updated_at: string;
}

export interface WorkingHours {
  [key: string]: { from: string; to: string; enabled: boolean };
}

export interface Agent {
  id: string;
  clinic_id: string;
  retell_agent_id: string;
  retell_phone_number: string | null;
  name: string;
  voice_id: string;
  system_prompt: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CallLog {
  id: string;
  clinic_id: string;
  agent_id: string | null;
  retell_call_id: string | null;
  caller_number: string | null;
  duration: number;
  status: string;
  transcript: string | null;
  ai_summary: string | null;
  sentiment: 'positive' | 'neutral' | 'negative' | null;
  appointment_detected: boolean;
  is_read: boolean;
  recording_url: string | null;
  started_at: string;
  ended_at: string | null;
  created_at: string;
}

export interface Subscription {
  id: string;
  clinic_id: string;
  stripe_subscription_id: string | null;
  stripe_customer_id: string | null;
  plan: 'starter' | 'pro';
  status: 'active' | 'canceled' | 'past_due' | 'trialing';
  current_period_end: string | null;
  monthly_call_limit: number;
  calls_used_this_period: number;
  created_at: string;
  updated_at: string;
}

export type PlanType = 'starter' | 'pro';

export const PLANS = {
  starter: {
    name: 'Starter',
    price: 500,
    priceLabel: '500 zł/mies',
    calls: 200,
    agents: 1,
    features: ['1 agent głosowy', '200 połączeń/miesiąc', 'Historia połączeń', 'AI podsumowania', 'Dashboard analityczny', 'Email support'],
  },
  pro: {
    name: 'Pro',
    price: 1500,
    priceLabel: '1500 zł/mies',
    calls: 1000,
    agents: 5,
    features: ['5 agentów głosowych', '1000 połączeń/miesiąc', 'Historia połączeń', 'AI podsumowania', 'Dashboard analityczny', 'Priority support', 'Custom prompt', 'Webhook integracje'],
  },
} as const;

export const VOICE_OPTIONS = [
  { id: 'zosia', name: 'Zosia', description: 'Ciepła i przyjazna', retellVoiceId: 'eleven_multilingual_v2' },
  { id: 'marek', name: 'Marek', description: 'Profesjonalny i spokojny', retellVoiceId: 'eleven_multilingual_v2' },
  { id: 'ania', name: 'Ania', description: 'Energiczna i pomocna', retellVoiceId: 'eleven_multilingual_v2' },
] as const;

export type VoiceId = typeof VOICE_OPTIONS[number]['id'];
