import { mdiBarleyOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BarleyOff(props: IconComponentProps) {
  return <Icon path={mdiBarleyOff} {...props} />;
}

export { mdiBarleyOff as path };
