import { mdiStrategy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Strategy(props: IconComponentProps) {
  return <Icon path={mdiStrategy} {...props} />;
}

export { mdiStrategy as path };
