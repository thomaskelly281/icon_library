import { mdiCogPause } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CogPause(props: IconComponentProps) {
  return <Icon path={mdiCogPause} {...props} />;
}

export { mdiCogPause as path };
