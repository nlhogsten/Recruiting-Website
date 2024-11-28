"use server";
import { NextResponse } from 'next/server';
import { createClient } from "@/lib/server";

export async function POST(req) {

  try {

    const {
        email,  
        business,
        city,
        phone,
        website,
        about,
    } = await req.json();

    const supabase = await createClient();
    
    const { data, error } = await supabase
    .from('job_schedule')
    .insert([
      {
        business: business,
        city: city,
        email: email,
        phone: phone,
        website: website,
        about: about,
      }
    ]);

    if (error) {
      throw error;
    }

    return NextResponse.json({ message: "data updated", data })

  } catch (error) {
    console.error('Error in post:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}