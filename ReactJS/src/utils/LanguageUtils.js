import messages_vi from "../translations/vi.json";
import messages_en from "../translations/en.json";
import messages_fr from "../translations/fr.json";

const flattenMessages = (nestedMessages, prefix = "") => {
  if (nestedMessages == null) {
    return {};
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      Object.assign(messages, { [prefixedKey]: value });
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};

const messages = {
  vi: flattenMessages(messages_vi),
  en: flattenMessages(messages_en),
  fr: flattenMessages(messages_fr),
};

export default class LanguageUtils {
  static getMessageByKey(key, lang) {
    return messages[lang][key];
  }

  static getFlattenedMessages() {
    return messages;
  }
}
