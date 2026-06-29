import { mdiBio } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bio(props: IconComponentProps) {
  return <Icon path={mdiBio} {...props} />;
}

export { mdiBio as path };
