import { mdiBagPersonalPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BagPersonalPlus(props: IconComponentProps) {
  return <Icon path={mdiBagPersonalPlus} {...props} />;
}

export { mdiBagPersonalPlus as path };
