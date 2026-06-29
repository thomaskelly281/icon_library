import { mdiCogStop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CogStop(props: IconComponentProps) {
  return <Icon path={mdiCogStop} {...props} />;
}

export { mdiCogStop as path };
