import { mdiSteam } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Steam(props: IconComponentProps) {
  return <Icon path={mdiSteam} {...props} />;
}

export { mdiSteam as path };
