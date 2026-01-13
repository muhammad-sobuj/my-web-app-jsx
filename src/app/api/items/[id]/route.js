import { NextResponse } from "next/server";
import { getItemById } from "@/lib/data";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const item = getItemById(id);

    if (!item) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ item });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
