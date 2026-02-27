import { useTranslation } from "react-i18next";
import RegisterForm from "@/components/RegisterForm";

export default function Register() {
  const { t } = useTranslation('register');

  return (
      <div className="max-w-md mx-auto py-10">
        <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
        <p className="text-muted-foreground mb-6">
          {t("description")}
        </p>

        <RegisterForm
          labels={{
            name: t("form.name"),
            email: t("form.email"),
            password: t("form.password"),
            submit: t("form.submit")
          }}
        />
      </div>
  );
}
