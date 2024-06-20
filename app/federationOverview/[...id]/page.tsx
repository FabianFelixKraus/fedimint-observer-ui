import { useRouter } from 'next/router';

const FedimintOverview = (federationsData: {[id: string]: Federation}) => {
    const router = useRouter();
    const id = router.query.id as string;

    const federationData: Federation = federationsData[id];
    console.log(federationData)


    const getGuardians = (federation: Federation) => {
        return Object.keys(federation.api_endpoints).map(key => (
            <div key={key}>
                <a href={federation.api_endpoints[key].url}>{federation.api_endpoints[key].name}</a>
            </div>
        ));
    }


    // TODO: Add meta data
    return (
        <>

            <h1>{federationData.meta.federation_name}</h1>

            <h2>Consensus Version</h2>
            <div>
                <p>{federationData.consensus_version.major} . {federationData.consensus_version.minor}</p>
            </div>

            <h2>Guardians</h2>
            <div className="grid-cols-2">
                {getGuardians(federationData).map((guardian, index) => {
                    const url = federationData.api_endpoints[index].url;
                    return <button key={url} onClick={() => window.open(url, '_blank')}>
                        {guardian}
                    </button>
                })}
            </div>

            <h2>Modules</h2>
            <div className="grid-cols-2">
                {Object.keys(federationData.modules).map(key => (
                    <div key={key}>
                        <p>{federationData.modules[key].kind}</p>
                        <p>{federationData.modules[key].version.major} . {federationData.modules[key].version.major}</p>
                    </div>
                ))}
            </div>

        </>
      );
};

export default FedimintOverview;
