import { mdiPageFirst } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PageFirst(props: IconComponentProps) {
  return <Icon path={mdiPageFirst} {...props} />;
}

export { mdiPageFirst as path };
