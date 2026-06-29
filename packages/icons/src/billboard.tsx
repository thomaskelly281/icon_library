import { mdiBillboard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Billboard(props: IconComponentProps) {
  return <Icon path={mdiBillboard} {...props} />;
}

export { mdiBillboard as path };
