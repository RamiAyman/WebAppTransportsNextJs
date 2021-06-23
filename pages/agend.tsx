import Head from "next/head";
import Agendee from "../components/pages/Agendaa/Agendee";

export default function VehiculePage() {
    return (
      <>
        <Head>
          <title>Schedule</title>
        </Head>
        <div className="bg-gray-100	">
        <Agendee id={1} title={''} startDate={new Date()} endDate={new Date()} ownerId={1} />

          </div>
      </>
    );
  }