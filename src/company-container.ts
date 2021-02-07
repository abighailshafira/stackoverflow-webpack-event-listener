export interface Company {
    location: string,
    name: string,
}

export const CompanyContainer = (company: Company) => (`
    <div>
        <p>company name ${company.name}</p>
        <p>company location ${company.location}</p>
    </div>
`)