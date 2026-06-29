import { mdiBeer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Beer(props: IconComponentProps) {
  return <Icon path={mdiBeer} {...props} />;
}

export { mdiBeer as path };
