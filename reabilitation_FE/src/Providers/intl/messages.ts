import { LOCALES } from "./locales";

/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
// const messagesJson = require('../../DB/messages.json');

export const formatTranslationMessages = (messages: any) => {
  const _trmes: any = {};
  _trmes[LOCALES.EN.key] = !messages || !messages[LOCALES.EN.key] ? {} : { ...messages[LOCALES.EN.key] };
  if (!Object.keys(_trmes[LOCALES.EN.key]).length) return _trmes;
  for (const key in LOCALES) {
    if (LOCALES[key].key === LOCALES.EN.key) continue;
    _trmes[LOCALES[key].key] = {};
    if (messages[LOCALES[key].key]) {
      _trmes[LOCALES[key].key] = messages[LOCALES[key].key];
    } else {
      _trmes[LOCALES[key].key] = {};
    }
    for (const localkey in _trmes[LOCALES.EN.key]) {
      if (!Object.prototype.hasOwnProperty.call(_trmes[LOCALES[key].key], localkey)) {
        _trmes[LOCALES[key].key][localkey] = _trmes[LOCALES.EN.key][localkey];
      }
    }

  }
  return _trmes;
};

export const translationMessages = {}; // formatTranslationMessages(messagesJson);
