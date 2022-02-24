
export const getCompanyDomainInfo = async (name) => {
    return fetch(`/domain/${name}`)
        .then((res) => res.json())
        .then((data) => (data.data))
}