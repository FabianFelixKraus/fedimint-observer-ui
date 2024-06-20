import Header from "./Header";
import Footer from "./Footer";
import FederationSelection from "./FederationSelection";


export default async function Home() {

  const rawFederationIds = await fetch(process.env.BACKEND_URL + 'federations', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  );
  const federationIds: string[] = await rawFederationIds.json();

  const federationInfos: {[id: string]: Federation} = {};

  federationIds.forEach(async id => {
    const rawFederationInfo = fetch(process.env.BACKEND_URL + 'federations/' + id + '/config', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const federationInfo: Federation = await (await rawFederationInfo).json();
    console.log("federationInfo", federationInfo);
    federationInfos[id] = federationInfo;

    console.log(federationInfos)
  });

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {federationIds ? <FederationSelection data={federationInfos} /> : <p>Loading...</p>}
      </main>
      <Footer />
    </>
  );
}
