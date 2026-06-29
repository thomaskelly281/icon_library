import { mdiLanguageMarkdownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanguageMarkdownOutline(props: IconComponentProps) {
  return <Icon path={mdiLanguageMarkdownOutline} {...props} />;
}

export { mdiLanguageMarkdownOutline as path };
