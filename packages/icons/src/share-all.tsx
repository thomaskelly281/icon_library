import { mdiShareAll } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShareAll(props: IconComponentProps) {
  return <Icon path={mdiShareAll} {...props} />;
}

export { mdiShareAll as path };
