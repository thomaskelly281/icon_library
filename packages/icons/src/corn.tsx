import { mdiCorn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Corn(props: IconComponentProps) {
  return <Icon path={mdiCorn} {...props} />;
}

export { mdiCorn as path };
