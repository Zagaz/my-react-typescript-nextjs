import Card from "@/components/Card";
import ImageFull from "@/components/ImageCard";
import Link from "next/link";

export default function Home() {
     return (
          <>
               <main>
                    <h1>Home</h1>
                    <Card title="Card 1" id={1} />
               </main>
          </>
     )
}