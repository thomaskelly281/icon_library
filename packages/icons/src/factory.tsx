import { mdiFactory } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Factory(props: IconComponentProps) {
  return <Icon path={mdiFactory} {...props} />;
}

export { mdiFactory as path };
