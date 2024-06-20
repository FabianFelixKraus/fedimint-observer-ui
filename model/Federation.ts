interface Federation {
    api_endpoints: Record<string, Guardian>;
    consensus_version: Version;
    meta: any; // Replace 'any' with the appropriate type when it's known
    modules: Record<string, Module>;
}