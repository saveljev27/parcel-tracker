'use client';
import { useState } from 'react';
import { Input } from '../UI';

export function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col gap-4">
      <input
        placeholder="Email"
        className={`${email.length ? 'border-primary' : ''}`}
        name="email"
        type="email"
        value={email}
        required={true}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        className={`${password.length ? 'border-primary' : ''}`}
        name="password"
        type="password"
        value={password}
        required={true}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}
