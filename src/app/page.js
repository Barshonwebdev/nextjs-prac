"use client";

import Counter from "@/components/counter/counter";
import Link from "next/link";

const Home = () => {
  return (
    <div className="mx-2">
      <h1 className="text-red-600">hi there</h1>
      <Counter/> 
      <div className="mt-5 space-x-4">
        <Link href={'/about'}><button className="btn btn-primary">About</button> </Link>
        <Link href={'/jobs'}><button className="btn btn-primary">Jobs</button> </Link>
        <Link href={'/careers'}><button className="btn btn-primary">Careers</button> </Link>
        
      </div>
    </div>
  );
};

export default Home;
