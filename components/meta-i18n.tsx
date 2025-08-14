'use client';

import { useI18n } from './i18n-provider';

export function MetaI18n() {
  const { t } = useI18n();
  return (
    <>
      <title>{t('meta.title')}</title>
      <meta name="description" content={t('meta.description')} />
      {/* Keep JSON-LD if needed, can be extended per-locale later */}
    </>
  );
}


