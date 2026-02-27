import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const { t } = useTranslation('notfound');

  return (
    <Layout>
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          {t("notfound.title")}
        </h1>
        <p className="text-muted-foreground mb-6">
          {t("notfound.description")}
        </p>

        <Button asChild>
          <Link to="/">{t("notfound.button")}</Link>
        </Button>
      </div>
    </Layout>
  );
}
