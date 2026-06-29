import { mdiDetails } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Details(props: IconComponentProps) {
  return <Icon path={mdiDetails} {...props} />;
}

export { mdiDetails as path };
