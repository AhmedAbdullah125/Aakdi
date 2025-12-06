
import StaffAnalysisWrapper from "@/components/StaffAnalysis/StaffAnalysisWrapper"
import TotalStaff from "@/components/StaffAnalysis/TotalStaff"

export default function page({ params }) {
    const { id } = params
    return (
        <>
            {id === "total" ? <TotalStaff /> : <StaffAnalysisWrapper id={id} />}
        </>
    )
}