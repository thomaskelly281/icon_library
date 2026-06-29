import { mdiRake } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rake(props: IconComponentProps) {
  return <Icon path={mdiRake} {...props} />;
}

export { mdiRake as path };
