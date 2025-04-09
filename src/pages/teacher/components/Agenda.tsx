import AgendaCard from "./AgendaCard";

const Agenda = () => {
    return <div className="">
        <h1 className="heading-lg font-bold mb-5">Agenda</h1>
        <AgendaCard heading={"History 11 AP World History"} timeString={"8:00 AM - 9:00 AM"} task={"Review the test results"}></AgendaCard>
        <AgendaCard heading={"History 12"} timeString={"10:00 AM - 11:00 AM"} task={"Lecture on Cold War"}></AgendaCard>
        <AgendaCard heading={"History 10A"} timeString={"4:30 PM - 5:30 PM"} task={"Prepare for Tomorrow's Debate"}></AgendaCard>
    </div>
}

export default Agenda;