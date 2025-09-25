import dynamic from "next/dynamic";

// Dynamically import the NewExam component with SSR disabled
const NewExam = dynamic(() => import("../../components/NewExam.jsx"), {
  ssr: false,
});

export default function NewExamPage() {
  return (
    <div>
      <NewExam />
    </div>
  );
}
