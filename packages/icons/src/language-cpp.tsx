import { mdiLanguageCpp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanguageCpp(props: IconComponentProps) {
  return <Icon path={mdiLanguageCpp} {...props} />;
}

export { mdiLanguageCpp as path };
