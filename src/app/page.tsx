import { redirect } from "next/navigation";

// Root path — middleware handles locale detection, this is just a fallback
export default function RootPage() {
  redirect("/ru");
}
