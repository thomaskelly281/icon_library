import { mdiSearchWeb } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SearchWeb(props: IconComponentProps) {
  return <Icon path={mdiSearchWeb} {...props} />;
}

export { mdiSearchWeb as path };
