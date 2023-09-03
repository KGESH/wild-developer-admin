import { Location } from '@/libs/services/location/location.types';
import { createLocation } from '@/libs/services/location/update-location';

async function updateGeoLocation(formData: FormData) {
  'use server';
  const lat = formData.get('lat') as string;
  const lng = formData.get('lng') as string;

  const location: Location = { lat: +lat, lng: +lng };
  const response = await createLocation(location);
  if (response.error) {
    console.log(`update error: `, response.error);
    return;
  }

  console.log(`update result: `, response);
}

export default function GeoLocationForm() {
  return (
    <form action={updateGeoLocation} className="flex flex-col items-center">
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
