import { mdiBootstrap } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bootstrap(props: IconComponentProps) {
  return <Icon path={mdiBootstrap} {...props} />;
}

export { mdiBootstrap as path };
