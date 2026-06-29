import { mdiSkateboarding } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Skateboarding(props: IconComponentProps) {
  return <Icon path={mdiSkateboarding} {...props} />;
}

export { mdiSkateboarding as path };
