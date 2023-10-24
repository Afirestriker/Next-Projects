import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProducstCard";

export default function Home() {
    return (
        <main>
            <h1> Hello World </h1>
            <Link href="/about">About us</Link>
            <br/>
            <Link href="/users">UsersPage</Link>
            <ProductCard />
        </main>
    );
}
