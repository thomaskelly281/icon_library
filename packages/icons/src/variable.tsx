import { mdiVariable } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Variable(props: IconComponentProps) {
  return <Icon path={mdiVariable} {...props} />;
}

export { mdiVariable as path };
