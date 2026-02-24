import ObrigadoCard from "../components/ObrigadoCard";

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <ObrigadoCard
        onSubmitEmail={async (email) => {
          // aqui você depois liga no seu webhook do google script
          console.log("enviar para webhook:", email);
        }}
      />
    </div>
  );
}