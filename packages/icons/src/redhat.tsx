import { mdiRedhat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Redhat(props: IconComponentProps) {
  return <Icon path={mdiRedhat} {...props} />;
}

export { mdiRedhat as path };
