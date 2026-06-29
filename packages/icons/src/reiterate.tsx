import { mdiReiterate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Reiterate(props: IconComponentProps) {
  return <Icon path={mdiReiterate} {...props} />;
}

export { mdiReiterate as path };
