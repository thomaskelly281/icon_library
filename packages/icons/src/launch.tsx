import { mdiLaunch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Launch(props: IconComponentProps) {
  return <Icon path={mdiLaunch} {...props} />;
}

export { mdiLaunch as path };
