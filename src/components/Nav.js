import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <div>
            <header>
                <h1>
                    <Link to="/" >
                     <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2Fdcb3fcda-5925-491b-b841-334e641965cb%2Fd95wnnl-fc911c55-de09-4817-b6b2-427cc63581c1.jpg%2Fv1%2Ffill%2Fw_900%2Ch_507%2Cq_75%2Cstrp%2Fstudio_ghibli_logo_by_schneefuechsin_d95wnnl-fullview.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTA3IiwicGF0aCI6IlwvZlwvZGNiM2ZjZGEtNTkyNS00OTFiLWI4NDEtMzM0ZTY0MTk2NWNiXC9kOTV3bm5sLWZjOTExYzU1LWRlMDktNDgxNy1iNmIyLTQyN2NjNjM1ODFjMS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7ZFkQwLGEqJdwJ8QcMLw4pDUAReMCh-qdPeieyTPOZ8&imgrefurl=https%3A%2F%2Fwww.deviantart.com%2Fschneefuechsin%2Fart%2FStudio-Ghibli-Logo-554117313&tbnid=RGjkAqirYl1rnM&vet=12ahUKEwiyrrfws9b7AhXCiFMKHZJpDMQQMygDegUIARDlAQ..i&docid=LPP2iyQQKa3WxM&w=900&h=507&q=studio%20ghibli%20logo&ved=2ahUKEwiyrrfws9b7AhXCiFMKHZJpDMQQMygDegUIARDlAQ" 
                     alt="logo"/>
                    </Link>
                    <Link to="/movies" >
                     Movies
                    </Link>
                    <Link to="/people" >
                     People
                    </Link>
                    <Link to="/locations" >
                     Locations
                    </Link>
                </h1>
            </header>
        </div>
    )
}