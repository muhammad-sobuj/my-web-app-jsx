import { NextResponse } from "next/server";
import { getAllItems, addItem } from "@/lib/data";
import { getCurrentUser } from "@/lib/auth";

export async function GET() {
  try {
    const items = getAllItems();
    return NextResponse.json({ items });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    // Check if user is authenticated
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        { message: "Authentication required" },
        { status: 401 }
      );
    }

    const itemData = await request.json();

    // Validate required fields
    const { name, description, price, image, category } = itemData;
    if (!name || !description || !price || !image || !category) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const newItem = addItem({
      name,
      description,
      price: parseFloat(price),
      image,
      category,
      inStock: true,
      rating: 0,
      reviews: 0,
    });

    return NextResponse.json({ item: newItem }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
