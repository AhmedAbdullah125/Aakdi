
import StaffAnalysisWrapper from "@/components/StaffAnalysis/StaffAnalysisWrapper"
import TotalStaff from "@/components/StaffAnalysis/TotalStaff"

export default async function page({ params }) {
    const { id } = await params
    return (
        <>
            {id === "total" ? <TotalStaff /> : <StaffAnalysisWrapper id={id} />}
        </>
    )
}