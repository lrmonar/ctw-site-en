import { useTranslation } from "react-i18next";
import LoginForm from "@/components/LoginForm";

export default function Login() {
  const { t } = useTranslation('login');

  return (
      <div className="max-w-md mx-auto py-10">
        <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
        <p className="text-muted-foreground mb-6">{t("description")}</p>

        <LoginForm
          labels={{
            email: t("form.email"),
            password: t("form.password"),
            submit: t("form.submit")
          }}
        />
      </div>
  );
}
