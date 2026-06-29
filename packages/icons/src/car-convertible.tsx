import { mdiCarConvertible } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarConvertible(props: IconComponentProps) {
  return <Icon path={mdiCarConvertible} {...props} />;
}

export { mdiCarConvertible as path };
