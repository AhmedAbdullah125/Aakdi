// lib/api/login.js
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import { toast } from 'sonner';
import { t } from '@/lib/i18n';

export async function sendPostRequest({ phone, countryCode, lang, setLoading, setStep, setPhone, resetForm }) {

  setLoading(true);
  const url = `${API_BASE_URL}/auth/send-otp`;

  try {
    const response = await axios.post(
      url,
      {
        phone: phone,
        phone_country: countryCode

      },
      { headers: { 'x-localization': lang } }
    );

    setLoading(false);

    const message = response.data?.message || t(lang, 'success_message');

    if (response.status === 200) {
      toast(message, {
        style: {
          borderColor: '#28a745',
          boxShadow: '0px 0px 10px rgba(40, 167, 69, .5)',
        },
      });

      setStep('verify');
      setPhone(phone);

      if (resetForm !== "nothing") {
        resetForm();
      }
    } else {
      toast(message, {
        style: {
          borderColor: '#dc3545',
          boxShadow: '0px 0px 10px rgba(220, 53, 69, .5)',
        },
        description: lang === 'ar' ? 'استجابة غير متوقعة' : 'Unexpected response',
      });
    }
  } catch (error) {
    setLoading(false);

    const errorMessage = error?.response?.data?.message || error.message || (lang === 'ar' ? 'حدث خطأ غير معروف' : 'An unknown error occurred');

    toast(errorMessage, {
      style: {
        borderColor: '#dc3545',
        boxShadow: '0px 0px 10px rgba(220, 53, 69, .5)',
      },
    });
  }
}
