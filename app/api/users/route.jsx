import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { userName, userEmail } = await req.json();

    if (!userName || !userEmail) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if user exists
    const docRef = doc(db, "users", userEmail);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return NextResponse.json(docSnap.data(), { status: 200 });
    } else {
      // Create new user
      const data = {
        name: userName,
        email: userEmail,
        credit: 5,
      };
      await setDoc(docRef, data);

      return NextResponse.json(data, { status: 201 });
    }
  } catch (error) {
    console.error("Error in API:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
