import { mdiCogRefresh } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CogRefresh(props: IconComponentProps) {
  return <Icon path={mdiCogRefresh} {...props} />;
}

export { mdiCogRefresh as path };
