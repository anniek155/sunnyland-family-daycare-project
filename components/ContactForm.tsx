'use client';

import { useState, FormEvent, FocusEvent, ChangeEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const MESSAGE_MAX = 500;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldName = 'email' | 'phone' | 'message';
type FieldErrors = Partial<Record<FieldName, string>>;
type TouchedFields = Partial<Record<FieldName, boolean>>;

function validateEmail(value: string): string | undefined {
  if (!value) return 'Email is required';
  if (!EMAIL_REGEX.test(value)) return 'Please enter a valid email address';
}

function validatePhone(value: string): string | undefined {
  if (!value) return;
  const digits = value.replace(/\D/g, '');
  if (digits.length !== 10) return 'Please enter a valid 10-digit phone number';
}

function validateMessage(value: string): string | undefined {
  if (value.length > MESSAGE_MAX) return `Message must be ${MESSAGE_MAX} characters or fewer`;
}

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xzdywjad');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [messageLength, setMessageLength] = useState(0);

  if (state.succeeded) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">🌻</div>
        <h3 className="text-xl sm:text-2xl mb-3 text-gray-800">Thank you!</h3>
        <p className="text-base sm:text-lg text-gray-600">
          We&apos;ve received your message and will be in touch soon.
        </p>
      </div>
    );
  }

  const validators: Record<FieldName, (v: string) => string | undefined> = {
    email: validateEmail,
    phone: validatePhone,
    message: validateMessage,
  };

  const runValidation = (field: FieldName, value: string) => {
    setErrors((prev) => ({ ...prev, [field]: validators[field](value) }));
  };

  const onBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name as FieldName;
    if (!validators[field]) return;
    setTouched((prev) => ({ ...prev, [field]: true }));
    runValidation(field, e.target.value);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name as FieldName;
    if (field === 'message') setMessageLength(e.target.value.length);
    if (touched[field]) runValidation(field, e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const data = new FormData(form);
    const nextErrors: FieldErrors = {
      email: validateEmail((data.get('email') as string) ?? ''),
      phone: validatePhone((data.get('phone') as string) ?? ''),
      message: validateMessage((data.get('message') as string) ?? ''),
    };
    setTouched({ email: true, phone: true, message: true });
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) {
      e.preventDefault();
      return;
    }
    handleSubmit(e);
  };

  const fieldError = (field: FieldName) => (touched[field] ? errors[field] : undefined);
  const inputClass = (field: FieldName) =>
    `w-full px-4 py-3 rounded-xl border-2 focus:outline-none transition-colors text-sm sm:text-base ${
      fieldError(field)
        ? 'border-red-400 focus:border-red-500'
        : 'border-gray-200 focus:border-yellow-400'
    }`;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-700 mb-2 text-sm sm:text-base">Parent&apos;s Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          maxLength={100}
          placeholder="Your full name"
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors text-sm sm:text-base"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 mb-2 text-sm sm:text-base">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          onBlur={onBlur}
          onChange={onChange}
          aria-invalid={!!fieldError('email')}
          className={inputClass('email')}
        />
        {fieldError('email') && (
          <p className="text-red-500 text-sm mt-1">{fieldError('email')}</p>
        )}
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-gray-700 mb-2 text-sm sm:text-base">Phone</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="(650) 302-8856"
          onBlur={onBlur}
          onChange={onChange}
          aria-invalid={!!fieldError('phone')}
          className={inputClass('phone')}
        />
        {fieldError('phone') && (
          <p className="text-red-500 text-sm mt-1">{fieldError('phone')}</p>
        )}
        <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-500 text-sm mt-1" />
      </div>
      <div>
        <label htmlFor="childAge" className="block text-gray-700 mb-2 text-sm sm:text-base">Child&apos;s Age</label>
        <input
          id="childAge"
          type="text"
          name="childAge"
          maxLength={30}
          placeholder="e.g., 2 years old"
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors text-sm sm:text-base"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-700 mb-2 text-sm sm:text-base">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          maxLength={MESSAGE_MAX}
          placeholder="Tell us about your childcare needs..."
          onBlur={onBlur}
          onChange={onChange}
          aria-invalid={!!fieldError('message')}
          className={inputClass('message')}
        />
        <div className="flex justify-between mt-1">
          <p className="text-red-500 text-sm">{fieldError('message') ?? ''}</p>
          <p className={`text-xs sm:text-sm ${messageLength > MESSAGE_MAX ? 'text-red-500' : 'text-gray-500'}`}>
            {messageLength}/{MESSAGE_MAX}
          </p>
        </div>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white py-4 rounded-xl hover:from-yellow-500 hover:to-orange-500 transition-all shadow-lg text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
