import { mdiFedora } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Fedora(props: IconComponentProps) {
  return <Icon path={mdiFedora} {...props} />;
}

export { mdiFedora as path };
