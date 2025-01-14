import { AuthForm } from "./_componets/auth-form";

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <AuthForm />;
      </div>
    </div>
  );
}
