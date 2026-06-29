import { mdiMargin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Margin(props: IconComponentProps) {
  return <Icon path={mdiMargin} {...props} />;
}

export { mdiMargin as path };
