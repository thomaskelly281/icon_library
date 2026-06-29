import { mdiPineTreeVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PineTreeVariant(props: IconComponentProps) {
  return <Icon path={mdiPineTreeVariant} {...props} />;
}

export { mdiPineTreeVariant as path };
