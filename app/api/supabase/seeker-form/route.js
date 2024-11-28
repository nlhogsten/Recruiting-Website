"use server";
import { NextResponse } from 'next/server';
import { createClient } from "@/lib/server";

export async function POST(req) {

  try {

    const {
        name,
        about,
        email,
        country,
        city,
        state,
        social,
    } = await req.json();

    const supabase = await createClient();
    
    const { data, error } = await supabase
    .from('job_seekers')
    .insert([
      {
        country: country,
        city: city,
        state: state,
        name: name,
        about: about,
        email: email,
        social: social,
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