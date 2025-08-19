'use client';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

const options = [ 'TRY_AGAIN', '1', '0.5', '2', 'BLNT', '5' ];

export default function SpinWheel() {
  const [spinsLeft, setSpinsLeft] = useState(5);
  const [message, setMessage] = useState('');

  const spin = useMutation({
    mutationFn: async () => {
      const res = await fetch('/api/spin', { method: 'POST' });
      if (!res.ok) throw new Error(await res.text());
      return res.json();
    },
    onSuccess: (data) => {
      setSpinsLeft((s)=> Math.max(0, s-1));
      setMessage(`You got ${data.result} ⇒ +${data.coinsWon} coins (today: ${data.todayEarned}/1.5)`);
    },
    onError: (e:any) => setMessage(e.message)
  });

  return (
    <div className="card space-y-3">
      <h2 className="text-lg font-semibold">Spin Wheel</h2>
      <p>Spins left today: <b>{spinsLeft}</b></p>
      <button className="btn-primary" disabled={spinsLeft===0 || spin.isPending} onClick={()=>spin.mutate()}>
        {spin.isPending? 'Spinning...' : 'Spin'}
      </button>
      {message && <p className="text-sm text-gray-700">{message}</p>}
      <div className="text-xs text-gray-500">Options: {options.join(' • ')}</div>
    </div>
  );
}
