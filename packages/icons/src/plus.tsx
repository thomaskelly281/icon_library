import { mdiPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Plus(props: IconComponentProps) {
  return <Icon path={mdiPlus} {...props} />;
}

export { mdiPlus as path };
