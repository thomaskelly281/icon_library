import { mdiNpm } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Npm(props: IconComponentProps) {
  return <Icon path={mdiNpm} {...props} />;
}

export { mdiNpm as path };
