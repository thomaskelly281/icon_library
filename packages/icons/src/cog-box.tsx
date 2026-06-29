import { mdiCogBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CogBox(props: IconComponentProps) {
  return <Icon path={mdiCogBox} {...props} />;
}

export { mdiCogBox as path };
