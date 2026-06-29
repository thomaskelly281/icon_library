import { mdiLanguageSwift } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanguageSwift(props: IconComponentProps) {
  return <Icon path={mdiLanguageSwift} {...props} />;
}

export { mdiLanguageSwift as path };
