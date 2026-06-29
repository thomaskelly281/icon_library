import { mdiIncognito } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Incognito(props: IconComponentProps) {
  return <Icon path={mdiIncognito} {...props} />;
}

export { mdiIncognito as path };
