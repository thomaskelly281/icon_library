import { mdiCogSync } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CogSync(props: IconComponentProps) {
  return <Icon path={mdiCogSync} {...props} />;
}

export { mdiCogSync as path };
