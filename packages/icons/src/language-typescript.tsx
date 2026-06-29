import { mdiLanguageTypescript } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanguageTypescript(props: IconComponentProps) {
  return <Icon path={mdiLanguageTypescript} {...props} />;
}

export { mdiLanguageTypescript as path };
