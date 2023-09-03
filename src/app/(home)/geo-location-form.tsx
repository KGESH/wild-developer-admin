'use client';

import { Location } from '@/libs/services/location/location.types';
import { FormEvent, MouseEvent, useEffect, useState } from 'react';
import { useClientGeolocation } from '@/components/hooks/use-client-geolocation';

export default function GeoLocationForm() {
  const { clientLocation, getClientLocation, pending } = useClientGeolocation();
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  const onFindMeClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    getClientLocation();
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const lat = formData.get('lat') as string;
    const lng = formData.get('lng') as string;

    const location: Location = { lat: +lat, lng: +lng };
    const response = await fetch('/api/location', {
      method: 'POST',
      body: JSON.stringify(location),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json());

    console.log(`Client location response: `, response);
  };

  useEffect(() => {
    if (clientLocation) {
      console.log(`My location: `, clientLocation);
      setLat(`${clientLocation.lat}`);
      setLng(`${clientLocation.lng}`);
    }
  }, [clientLocation]);

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center">
      <label htmlFor="lat">Latitude</label>
      <input
        type="text"
        name="lat"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        placeholder="123.123123"
        className="placeholder:text-center"
      />

      <label htmlFor="lng">Longitude</label>
      <input
        type="text"
        name="lng"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
        placeholder="123.123123"
        className="placeholder:text-center"
      />

      <div className="flex">
        <button
          type="button"
          disabled={pending}
          onClick={onFindMeClick}
          className="w-32 h-6 mx-12 bg-blue-400 text-gray-50 rounded"
        >
          {pending ? 'Loading...' : 'Find me'}
        </button>
        <button type="submit" className="w-32 h-6 mx-12 bg-blue-400 text-gray-50 rounded">
          Apply
        </button>
      </div>
    </form>
  );
}
