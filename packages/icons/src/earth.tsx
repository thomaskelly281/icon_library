import { mdiEarth } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Earth(props: IconComponentProps) {
  return <Icon path={mdiEarth} {...props} />;
}

export { mdiEarth as path };
