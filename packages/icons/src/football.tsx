import { mdiFootball } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Football(props: IconComponentProps) {
  return <Icon path={mdiFootball} {...props} />;
}

export { mdiFootball as path };
