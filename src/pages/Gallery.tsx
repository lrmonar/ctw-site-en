import { useTranslation } from "react-i18next";
import GalleryItem from "@/components/GalleryItem";

export default function Gallery() {
  const { t } = useTranslation('gallery');

  return (
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
        <p className="text-muted-foreground mb-6">{t("description")}</p>

        {/* Placeholder content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GalleryItem title={t("sample.title")} />
          <GalleryItem title={t("sample.title")} />
          <GalleryItem title={t("sample.title")} />
        </div>
      </div>
  );
}
