import { mdiFax } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Fax(props: IconComponentProps) {
  return <Icon path={mdiFax} {...props} />;
}

export { mdiFax as path };
