'use client';

import { Location } from '@/libs/services/location/location.types';
import { FormEvent } from 'react';

export default function GeoLocationForm() {
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

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center">
      <label htmlFor="lat">Latitude</label>
      <input type="text" name="lat" placeholder="123.123123" className="placeholder:text-center" />

      <label htmlFor="lng">Longitude</label>
      <input type="text" name="lng" placeholder="123.123123" className="placeholder:text-center" />

      <div className="flex">
        <button type="button" className="w-32 h-6 mx-12 bg-blue-400 text-gray-50 rounded">
          Find me
        </button>
        <button type="submit" className="w-32 h-6 mx-12 bg-blue-400 text-gray-50 rounded">
          Apply
        </button>
      </div>
    </form>
  );
}
