import Card from "@/components/Card";
import ImageFull from "@/components/ImageCard";
import Link from "next/link";

// 100 posts

export default function Home() {
     return (
          <>
               <main>
                    <h1>Home</h1>
                    <Card title="Card 1" id={1} />
                    <Card title="Card 2" id={5} />
               </main>
          </>
     )
}