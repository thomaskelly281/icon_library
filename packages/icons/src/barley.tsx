import { mdiBarley } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Barley(props: IconComponentProps) {
  return <Icon path={mdiBarley} {...props} />;
}

export { mdiBarley as path };
