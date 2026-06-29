import { mdiJquery } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Jquery(props: IconComponentProps) {
  return <Icon path={mdiJquery} {...props} />;
}

export { mdiJquery as path };
