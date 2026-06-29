import { mdiLanguagePhp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanguagePhp(props: IconComponentProps) {
  return <Icon path={mdiLanguagePhp} {...props} />;
}

export { mdiLanguagePhp as path };
