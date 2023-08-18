'use client'
import Image from "next/image"
import { useRouter } from "next/navigation";

const Avatar = () => {
    const router = useRouter();
    return (
        <Image
            alt="Avatar"
            className="rounded-full"
            height="30"
            width="30"
            src="/images/placeholder.jpg"
        />
    )
}

export default Avatar;