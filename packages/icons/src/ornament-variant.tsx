import { mdiOrnamentVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function OrnamentVariant(props: IconComponentProps) {
  return <Icon path={mdiOrnamentVariant} {...props} />;
}

export { mdiOrnamentVariant as path };
