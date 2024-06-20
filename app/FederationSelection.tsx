"use client";
import { useRouter } from 'next/navigation';


export default function FederationSelection({data}: {data: {[id: string]: Federation}}) {
  
  const router = useRouter();

  const getName = (federation: Federation) => {
    return federation.meta['federation_name'];
  }

  return (
    <div className="grid">
        {Object.keys(data).map(id => (
            <button key={id} className="btn btn-primary p-4 m-4" onClick={() => router.push(`/fedimintOverview/${id}`)}>
                <p>{getName(data[id])}</p>
            </button>
          )
          )
        }
    </div>
  );
}