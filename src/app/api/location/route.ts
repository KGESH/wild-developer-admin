import { NextRequest, NextResponse } from 'next/server';
import { Location } from '@/libs/services/location/location.types';
import { createLocation } from '@/libs/services/location/update-location';

export async function POST(request: NextRequest) {
  const location = (await request.json()) as Location;

  const { error } = await createLocation(location);

  if (error) {
    // Todo: handle error
    console.log(`error: `, error);
    return NextResponse.error();
  }

  return NextResponse.json({ success: true });
}
