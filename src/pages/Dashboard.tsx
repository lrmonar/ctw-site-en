import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const { t } = useTranslation('dashboard');

  return (
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-4">{t("dashboard.title")}</h1>
        <p className="text-muted-foreground">{t("dashboard.description")}</p>
      </div>
  );
}
